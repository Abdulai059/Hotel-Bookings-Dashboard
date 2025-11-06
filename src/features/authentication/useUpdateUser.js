import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { UpdateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updatedUser, isLoading: isUpdating } = useMutation({
    mutationFn: UpdateCurrentUser,

    onSuccess: ({ user }) => {
      toast.success("user successfully updated");
      queryClient.setQueriesData(["user"], user);

    //   queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updatedUser, isUpdating };
}
