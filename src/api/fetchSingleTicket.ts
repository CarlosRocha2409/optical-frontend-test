import { api } from "../config/api.config";

export default async function fetchSingleTicket({ id }: { id: string }) {
  return api.get(`/ticket/${id}`).then(({ data }) => {
    return data;
  });
}
