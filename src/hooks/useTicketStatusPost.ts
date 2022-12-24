import { useMutation } from "react-query";
import { toast } from "react-toastify";
import postTicketStatus from "../api/postTicketStatuts";

export default function useTicketStatusPost() {
  const { data, mutate, isLoading } = useMutation(postTicketStatus, {
    onSuccess: () => {
      toast.success("Successfully updated ticket status");
    },
  });
  return {
    data,
    mutate,
    isLoading,
  };
}
