import { api } from "../config/api.config";

export default async function postComment({
  description,
  ticketId,
}: {
  description: string;
  ticketId: string;
}) {
  return api
    .post(`/ticket/${ticketId}/comment`, { description })
    .then(({ data }) => {
      return data;
    });
}
