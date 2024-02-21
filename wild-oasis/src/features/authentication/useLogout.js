import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutAPI } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
export function useLogout() {
  const navigate = useNavigate();
  const client = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      navigate("/login", { replace: true });
      client.removeQueries();
    },
  });
  return { logout, isLoading };
}
