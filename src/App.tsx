import { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyles, StyledApp } from "./StyledApp.tsx";
import { WeatherAndTime } from "./widgets/components/WeatherAndTime.tsx";

function App() {
  const queryClient = useMemo(() => new QueryClient(), []);
  return (
    <QueryClientProvider client={queryClient}>
      <StyledApp>
        <GlobalStyles />
        <WeatherAndTime />
      </StyledApp>
    </QueryClientProvider>
  );
}

export default App;
