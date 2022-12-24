import { api } from "../config/api.config";

export default async function postAssignTicket({
  ticketId,
}: {
  ticketId: string;
}) {
  return api.post(`/ticket/${ticketId}/assign`, null).then(({ data }) => {
    return data;
  });
}
