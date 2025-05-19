import { Weather } from "./weather/components/Weather.tsx";
import { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import pvd from "./assets/weather/background/pvd.png";
import { GlobalStyles, StyledApp } from "./StyledApp.tsx";
import { CurrentTime } from "./time/components/CurrentTime.tsx";
import { Locale } from "@js-joda/locale_en-us";

function App() {
  const queryClient = useMemo(() => new QueryClient(), []);
  return (
    <QueryClientProvider client={queryClient}>
      <StyledApp>
        <GlobalStyles />
        <Weather location="Providence, RI" station="KPVD" background={pvd}>
          <CurrentTime timezone="America/New_York" locale={Locale.US} />
        </Weather>
      </StyledApp>
    </QueryClientProvider>
  );
}

export default App;
