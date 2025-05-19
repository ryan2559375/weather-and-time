import { useWeather } from "../hooks/useWeather.ts";
import { Temperature } from "./Temperature.tsx";
import {
  StyledWeather,
  StyledWeatherBackground,
  StyledWeatherContainer,
  StyledWeatherDataContainer,
  StyledWeatherLabel,
  StyledWeatherLocation,
  StyledWeatherObservation,
  StyledWeatherTemperature,
} from "./StyledWeather.tsx";
import type { ReactNode } from "react";

export interface WeatherProps {
  location: "Providence, RI";
  station: "KPVD";
  background: string;
  children?: ReactNode;
}

export const Weather = ({
  location,
  station,
  background,
  children,
}: WeatherProps) => {
  const { data: weather } = useWeather(station);
  return (
    <StyledWeatherContainer>
      <StyledWeather>
        <StyledWeatherBackground background={background} />
        <StyledWeatherLocation>{location}</StyledWeatherLocation>
        {weather && (
          <>
            <StyledWeatherDataContainer>
              <StyledWeatherLabel>Observation</StyledWeatherLabel>
              <StyledWeatherObservation>
                {weather.properties.textDescription}
              </StyledWeatherObservation>
              <StyledWeatherLabel>Temperature</StyledWeatherLabel>
              <StyledWeatherTemperature>
                <Temperature temperature={weather.properties.temperature} />
              </StyledWeatherTemperature>
              {children}
            </StyledWeatherDataContainer>
          </>
        )}
      </StyledWeather>
    </StyledWeatherContainer>
  );
};
