import { useMutation } from "@tanstack/react-query";
// No longer need to import `api` or `@shared/schema` for frontend-only submission
import { useToast } from "@/hooks/use-toast";

// Define the expected inquiry data structure for the hook
interface InsertInquiry {
  name: string;
  email: string;
  phone?: string; // Web3Forms will handle optional fields
  message: string;
}

export function useCreateInquiry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      // TODO: Replace with your actual Web3Forms Access Key
      const WEB3FORMS_ACCESS_KEY = "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p"; // THIS IS AN EXAMPLE KEY

      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      if (data.phone) {
        formData.append("phone", data.phone);
      }
      
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        // Web3Forms typically returns 200 even for some errors,
        // but we'll check res.ok defensively.
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to submit inquiry to Web3Forms");
      }

      const result = await res.json();
      if (result.success === false) {
        // Web3Forms reports logical errors in the response body
        throw new Error(result.message || "Failed to submit inquiry to Web3Forms");
      }
      
      return result; // Web3Forms success response
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Received!",
        description: "Your message has been sent successfully. We'll get back to you shortly.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Error Submitting Inquiry",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });
}
