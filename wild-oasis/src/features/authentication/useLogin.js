import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const client = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      navigate("/dashboard", { replace: true });
      client.setQueryData(["user"], user.user);
    },
    onError: (error) => {
      console.error(error);
      toast.error("Provided credentials are incorrect");
    },
  });
  return { login, isLoading };
}
