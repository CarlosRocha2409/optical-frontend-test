import { useMutation } from "react-query";
import { toast } from "react-toastify";
import postComment from "../api/postComment";
import { TRefecthType } from "../types/query.type";

export default function usetTicketCommentPost({
  refetch,
}: {
  refetch: TRefecthType;
}) {
  const { data, mutate, isLoading } = useMutation(postComment, {
    onSuccess: () => {
      toast.success("Successfully posted comment");
      refetch();
    },
  });
  return {
    data,
    mutate,
    isLoading,
  };
}
