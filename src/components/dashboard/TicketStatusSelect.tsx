import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import useTicketStatusPost from "../../hooks/useTicketStatusPost";
import { statusValues } from "../../types/ticket.type";

export default function TicketStatusSelect({
  initialStatus,
  ticketId,
}: {
  initialStatus: number;
  ticketId: string;
}) {
  const [status, setStatus] = useState<number>(initialStatus);
  const { mutate, isLoading } = useTicketStatusPost();

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const newStatus = +event.target.value;
    setStatus(newStatus);
    if (!isLoading) {
      mutate({ status: newStatus, ticketId });
    }
  };

  return (
    <TextField
      select
      label="Status"
      defaultValue={1}
      value={status}
      onChange={handleStatusChange}
    >
      {statusValues.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          onClick={(e) => e.stopPropagation()}
        >
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
