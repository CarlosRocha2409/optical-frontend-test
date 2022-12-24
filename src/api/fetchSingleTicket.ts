import { api } from "../config/api.config";

export default async function fetchSingleTicket({ id }: { id: string }) {
  return api
    .get(`/ticket/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(({ data }) => {
      return data;
    });
}
