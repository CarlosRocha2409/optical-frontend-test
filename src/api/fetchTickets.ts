import { api } from "../config/api.config";

export default async function fetchTickets(page = 1) {
  return api
    .get("/ticket", {
      params: {
        page,
      },
    })
    .then(({ data }) => {
      return data;
    });
}
