import { useQuery } from "react-query";
import fetchSingleTicket from "../api/fetchSingleTicket";
import { TRefecthType } from "../types/query.type";
import { ITicket } from "../types/ticket.type";

export default function useSingleTicketGet({ id }: { id: string }): {
  data: ITicket;
  isLoading: boolean;
  refetch: TRefecthType;
} {
  const { data, isLoading, refetch } = useQuery(["ticket", id], () =>
    fetchSingleTicket({ id })
  );
  return {
    isLoading,
    data,
    refetch,
  };
}
