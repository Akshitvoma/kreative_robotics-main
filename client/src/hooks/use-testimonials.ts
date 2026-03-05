import { useQuery } from "@tanstack/react-query";

export function useTestimonials() {
  return useQuery({
    queryKey: ["/api/testimonials"],
    queryFn: async () => {
      // Mocked empty data for frontend-only deployment
      return [];
    },
  });
}
