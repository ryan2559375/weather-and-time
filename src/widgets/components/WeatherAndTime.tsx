import pvd from "../../assets/weather/background/pvd.png";
import { lazy, Suspense, useMemo } from "react";
import { Weather } from "../../weather/components/Weather.tsx";
import { useLocales } from "../../time/hooks/useLocales.ts";

export const WeatherAndTime = () => {
  const { data: locales } = useLocales();
  const CurrentTime = useMemo(
    () => lazy(() => import("../../time/components/CurrentTime.tsx")),
    [],
  );
  return (
    <Weather location="Providence, RI" station="KPVD" background={pvd}>
      <Suspense fallback={<></>}>
        {locales && (
          <CurrentTime timezone="America/New_York" locale={locales.US} />
        )}
      </Suspense>
    </Weather>
  );
};
