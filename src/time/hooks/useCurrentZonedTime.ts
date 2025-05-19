import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ChronoUnit,
  Duration,
  ZonedDateTime,
  type ZoneId,
} from "@js-joda/core";
import { useEffect } from "react";

type RefreshInterval = "minute" | "second";

const REFRESH_INTERVALS_MAP: Record<RefreshInterval, number> = {
  minute: 1000 * 60,
  second: 1000,
};

export const useCurrentZonedTime = (
  zoneId: ZoneId,
  refreshInterval: "minute" | "second",
) => {
  const refetchInterval = REFRESH_INTERVALS_MAP[refreshInterval];
  if (!refreshInterval) {
    throw new Error("No-Op");
  }

  const queryResult = useQuery({
    queryKey: ["time", refreshInterval],
    queryFn: async () => {
      return ZonedDateTime.now(zoneId);
    },
    refetchInterval,
  });

  // Invalidate cache at 00.000 seconds if the timer drifts more than 100 seconds
  const currentTime = queryResult.data;
  const queryClient = useQueryClient();
  useEffect(() => {
    if (currentTime && refreshInterval === "minute") {
      const currentMinute = currentTime.withSecond(0).withNano(0);

      // If current time drifted more than 100 milliseconds
      if (currentTime.isAfter(currentMinute.plus(Duration.ofMillis(100)))) {
        // Manually invalidate the query at 00:00 mark.
        const nextMinute = currentMinute.plusMinutes(1);
        const timeout = ChronoUnit.MILLIS.between(currentTime, nextMinute);
        const timeoutId = setTimeout(() => {
          queryClient.invalidateQueries({
            queryKey: ["time", refreshInterval],
          });
        }, timeout);
        return () => {
          clearTimeout(timeoutId);
        };
      }
    }
  }, [currentTime, queryClient, refreshInterval]);

  return queryResult;
};
