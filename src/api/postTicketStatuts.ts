import { api } from "../config/api.config";

export default async function postTicketStatus({
  status,
  ticketId,
}: {
  status: number;
  ticketId: string;
}) {
  return api
    .post(`/ticket/${ticketId}/status`, {
      status,
    })
    .then(({ data }) => {
      return data;
    });
}
