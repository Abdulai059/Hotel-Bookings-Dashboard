import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Welcome back!");
      navigate("/dashboard", { replace: true });
    },

    onError: (error) => {
      console.error("Login failed:", error.message);
      toast.error("Provided email or password is incorrect. Please try again.");
    },
  });

  return { login, isLoading: isPending };
}
