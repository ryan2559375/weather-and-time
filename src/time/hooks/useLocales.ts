import { useQuery } from "@tanstack/react-query";

export const useLocales = () => {
  return useQuery({
    queryKey: ["locale"],
    queryFn: async () => {
      return (await import("@js-joda/locale_en-us")).Locale;
    },
  });
};
