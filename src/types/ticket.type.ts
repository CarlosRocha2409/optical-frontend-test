import { IPaginationResponse } from "./pagination.type";
import { IStaff } from "./staff.type";

export const productTypes = [
  {
    value: 1,
    label: "Website",
  },
  {
    value: 2,
    label: "Mobile App",
  },
  {
    value: 3,
    label: "Suscriptions",
  },
  {
    value: 4,
    label: "General",
  },
  {
    value: 5,
    label: "Other",
  },
];

export const statusValues = [
  {
    value: 1,
    label: "For Review",
  },
  {
    value: 2,
    label: "In Progress",
  },
  {
    value: 3,
    label: "Fixed",
  },
];

export interface ITicketInput {
  userEmail: string;
  description: string;
  product: number;
}

export interface IComment {
  staffMember: IStaff;
  description: string;
  active: boolean;
  createdAt: Date;
}

export interface ITicket {
  id: string;
  description: string;
  userEmail: string;
  statusIndex: number;
  status: string;
  assignee: IStaff | null;
  comments: IComment[];
  product: string;
  createdAt: Date;
}

export type TTicketsResponse = IPaginationResponse<ITicket>;
