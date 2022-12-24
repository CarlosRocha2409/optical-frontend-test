import { useMutation } from "react-query";
import { toast } from "react-toastify";
import postTicket from "../api/postTicket";

export default function useTicketPost({
  handleSuccess,
}: {
  handleSuccess: () => void;
}) {
  const { data, mutate, isLoading } = useMutation(postTicket, {
    onSuccess: () => {
      toast.success("Successfully created ticket");
      handleSuccess();
    },
  });
  return {
    data,
    mutate,
    isLoading,
  };
}
