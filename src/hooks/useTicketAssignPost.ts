import { useMutation } from "react-query";
import { toast } from "react-toastify";
import postAssignTicket from "../api/postAssignTicket";

export default function useTicketAssignPost() {
  const { data, mutate, isLoading } = useMutation(postAssignTicket, {
    onSuccess: () => {
      toast.success("Successfully assigned ticket");
    },
  });
  return {
    data,
    mutate,
    isLoading,
  };
}
