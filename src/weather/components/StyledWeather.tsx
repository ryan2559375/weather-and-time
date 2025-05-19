import styled, { createGlobalStyle } from "styled-components";

export const StyledWeatherContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10%;
`;

export const StyledWeather = styled.div`
  display: inline-grid;
  grid-template-areas:
    "location"
    "temperature"
    "observation";
  align-items: center;
  justify-content: center;
  column-gap: 2em;
  font-size: 4vw;
  color: white;
  text-shadow: 0 0 10px black;
`;

export const StyledWeatherBackground = createGlobalStyle<{
  background: string;
}>(({ background }) => ({
  body: {
    background: `url(${background}) no-repeat 100% / cover`,
  },
}));

export const StyledWeatherLocation = styled.h2`
  margin: 0;
  grid-area: location;
  font-size: 100%;
`;

export const StyledWeatherIcon = styled.img`
  grid-area: icon;
`;

export const StyledWeatherDataContainer = styled.dl`
  display: contents;
`;

export const StyledWeatherLabel = styled.dt`
  display: none;
`;

export const StyledWeatherDefinition = styled.dd`
  margin: 0;
`;

export const StyledWeatherObservation = styled(StyledWeatherDefinition)`
  grid-area: observation;
  font-size: 70%;
`;

export const StyledWeatherTemperature = styled(StyledWeatherDefinition)`
  grid-area: temperature;
  font-size: 500%;
`;
