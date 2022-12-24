import { useNavigate } from "react-router-dom";
import { ITicket } from "../../types/ticket.type";
import { StyledTableCell, StyledTableRow } from "../general/GeneralSyles";
import AssigneeButton from "./AssigneeButton";
import TicketStatusSelect from "./TicketStatusSelect";

interface IProps {
  ticket: ITicket;
}

export default function TicketsTableRow({ ticket }: IProps) {
  const navigate = useNavigate();
  return (
    <StyledTableRow
      sx={{
        cursor: "pointer",
      }}
      onClick={() => navigate(`/dashboard/${ticket.id}`)}
    >
      <StyledTableCell>{ticket.description.slice(0, 25)}...</StyledTableCell>
      <StyledTableCell>
        <TicketStatusSelect
          initialStatus={ticket.statusIndex}
          ticketId={ticket.id}
        />
      </StyledTableCell>
      <StyledTableCell>{ticket.product}</StyledTableCell>
      <StyledTableCell>
        {new Date(ticket.createdAt).toLocaleString()}
      </StyledTableCell>

      <StyledTableCell>
        {ticket.assignee ? ticket.assignee.fullname : "Not assigned"}
      </StyledTableCell>

      <StyledTableCell>
        <AssigneeButton ticketId={ticket.id} assignee={ticket.assignee} />
      </StyledTableCell>
    </StyledTableRow>
  );
}
