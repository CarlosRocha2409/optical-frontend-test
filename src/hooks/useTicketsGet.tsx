import { useQuery } from "react-query";
import fetchTickets from "../api/fetchTickets";
import { TTicketsResponse } from "../types/ticket.type";

export default function useTicketsGet({ page }: { page: number }): {
  data: TTicketsResponse;
  isLoading: boolean;
} {
  const { data, isLoading } = useQuery(["tickets", page], () =>
    fetchTickets(page)
  );
  return {
    isLoading,
    data,
  };
}
