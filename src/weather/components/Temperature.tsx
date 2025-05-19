import type { Weather } from "../objects/Weather.ts";
import { useMemo } from "react";

export interface TemperatureProps {
  temperature: Weather["properties"]["temperature"];
}

export const Temperature = ({ temperature }: TemperatureProps) => {
  const fahrenheit = useMemo(() => {
    return Math.ceil((temperature.value * 9) / 5 + 32);
  }, [temperature.value]);
  return <>{fahrenheit}°</>;
};
