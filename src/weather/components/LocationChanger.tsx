import { useCallback, type MouseEvent } from "react";

export const LocationChanger = () => {
  const handleChangeLocation = useCallback((event: MouseEvent) => {
    event.preventDefault();
  }, []);

  return (
    <a href="" onClick={handleChangeLocation}>
      Change Location
    </a>
  );
};
