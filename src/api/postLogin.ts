import { api } from "../config/api.config";
import { IStaffLoginInput } from "../types/staff.type";

export default async function postLogin(input: IStaffLoginInput) {
  return api.post("/staff/login", input).then(({ data }) => {
    return data;
  });
}
