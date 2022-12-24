import { api } from "../config/api.config";
import { ITicketInput } from "../types/ticket.type";

export default async function postTicket(ticket: ITicketInput) {
  return api.post("/ticket", ticket).then(({ data }) => {
    return data;
  });
}
