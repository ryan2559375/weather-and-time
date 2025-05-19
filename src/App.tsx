import { Weather } from "./weather/components/Weather.tsx";
import { lazy, Suspense, useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import pvd from "./assets/weather/background/pvd.png";
import { GlobalStyles, StyledApp } from "./StyledApp.tsx";
import { Locale } from "@js-joda/locale_en-us";

function App() {
  const queryClient = useMemo(() => new QueryClient(), []);
  const CurrentTime = useMemo(
    () => lazy(() => import("./time/components/CurrentTime.tsx")),
    [],
  );
  return (
    <QueryClientProvider client={queryClient}>
      <StyledApp>
        <GlobalStyles />
        <Weather location="Providence, RI" station="KPVD" background={pvd}>
          <Suspense fallback={<></>}>
            <CurrentTime timezone="America/New_York" locale={Locale.US} />
          </Suspense>
        </Weather>
      </StyledApp>
    </QueryClientProvider>
  );
}

export default App;
