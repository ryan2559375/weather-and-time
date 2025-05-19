import { useQuery } from "@tanstack/react-query";
import type { Weather } from "../objects/Weather.ts";

export const useWeather = (station: string) => {
  return useQuery({
    queryKey: ["weather", station],
    queryFn: async () => {
      const response = await fetch(
        `https://api.weather.gov/stations/${station}/observations/latest`,
      );
      return (await response.json()) as Weather;
    },
    refetchInterval: 1000 * 60 * 5,
  });
};
