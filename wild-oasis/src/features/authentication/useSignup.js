import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupAPI,
    onSuccess: (data) => {
      toast.success("Account created successfully! Please verify the email address.");
    },
    onError: () => {
      toast.error("Failed to create account!");
    },
  });
  return { signup, isLoading };
}
