import { StyledWeatherLabel } from "../../weather/components/StyledWeather.tsx";
import { StyledTime } from "./StyledTime.tsx";
import { DateTimeFormatter, ZoneId } from "@js-joda/core";
import "@js-joda/timezone/dist/js-joda-timezone-10-year-range";
import { useMemo } from "react";
import type { Locale } from "@js-joda/locale";
import { useCurrentZonedTime } from "../hooks/useCurrentZonedTime.ts";

export interface CurrentTimeProps {
  timezone: string;
  locale: Locale;
}

export const CurrentTime = ({ timezone, locale }: CurrentTimeProps) => {
  const zoneId = useMemo(() => ZoneId.of(timezone), [timezone]);
  const { data: currentTime } = useCurrentZonedTime(zoneId, "minute");

  const formatter = useMemo(
    () => DateTimeFormatter.ofPattern("hh:mm a").withLocale(locale),
    [locale],
  );

  if (!currentTime) {
    return null;
  }

  return (
    <>
      <StyledWeatherLabel>Time</StyledWeatherLabel>
      <StyledTime>{currentTime.format(formatter)}</StyledTime>
    </>
  );
};

export default CurrentTime;
