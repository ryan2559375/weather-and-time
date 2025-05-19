import { Weather } from "./weather/components/Weather.tsx";
import { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import pvd from "./assets/weather/background/pvd.png";
import { GlobalStyles, StyledApp } from "./StyledApp.tsx";

function App() {
  const queryClient = useMemo(() => new QueryClient(), []);
  return (
    <QueryClientProvider client={queryClient}>
      <StyledApp>
        <GlobalStyles />
        <Weather location="Providence, RI" station="KPVD" background={pvd} />
      </StyledApp>
    </QueryClientProvider>
  );
}

export default App;
