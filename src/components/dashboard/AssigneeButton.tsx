import { Button } from "@mui/material";
import { MouseEventHandler, useMemo, useState } from "react";
import useTicketAssignPost from "../../hooks/useTicketAssignPost";
import { IStaff } from "../../types/staff.type";

export default function AssigneeButton({
  ticketId,
  assignee,
}: {
  ticketId: string;
  assignee: IStaff | null;
}) {
  const { isLoading, mutate } = useTicketAssignPost();
  const [assigned, setAssigned] = useState<boolean>(false);

  const handleAssignUpdate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!isLoading) {
      mutate({
        ticketId,
      });
      setAssigned(true);
    }
  };

  const isAssignedToMe = useMemo(() => {
    const userId = localStorage.getItem("userId");
    return userId && assignee ? assignee?.id === userId : false;
  }, [assignee]);

  return (
    <>
      {isAssignedToMe || assigned ? (
        "No actions available"
      ) : (
        <Button variant="outlined" onClick={handleAssignUpdate}>
          Assign To myself
        </Button>
      )}
    </>
  );
}
