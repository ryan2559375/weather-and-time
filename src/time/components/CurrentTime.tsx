import { StyledWeatherLabel } from "../../weather/components/StyledWeather.tsx";
import { StyledTime } from "./StyledTime.tsx";
import {
  ChronoUnit,
  DateTimeFormatter,
  LocalTime,
  ZonedDateTime,
  ZoneId,
} from "@js-joda/core";
import "@js-joda/timezone/dist/js-joda-timezone-10-year-range";
import { useEffect, useMemo, useState } from "react";
import type { Locale } from "@js-joda/locale";

export interface CurrentTimeProps {
  timezone: string;
  locale: Locale;
}

export const CurrentTime = ({ timezone, locale }: CurrentTimeProps) => {
  const formatter = useMemo(
    () => DateTimeFormatter.ofPattern("hh:mm a").withLocale(locale),
    [locale],
  );

  const [time, setTime] = useState(() =>
    ZonedDateTime.now(ZoneId.of(timezone)).toLocalTime(),
  );
  useEffect(() => {
    const nextMinute = LocalTime.now().plusMinutes(1).withSecond(0).withNano(0);
    let timeout = ChronoUnit.MILLIS.between(LocalTime.now(), nextMinute);
    if (timeout <= 0) {
      timeout = 10;
    }

    const timeoutId = setTimeout(() => {
      setTime(nextMinute);
    }, timeout);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [time]);

  return (
    <>
      <StyledWeatherLabel>Time</StyledWeatherLabel>
      <StyledTime>{time.format(formatter)}</StyledTime>
    </>
  );
};

export default CurrentTime;
