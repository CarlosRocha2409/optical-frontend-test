import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import usetTicketCommentPost from "../../../hooks/useTicketCommentPost";
import { TRefecthType } from "../../../types/query.type";

const CommentInputWrapper = styled.div`
  div {
    margin-top: 20px;
  }
`;

export default function CommentInput({
  refetch,
  ticketId,
}: {
  refetch: TRefecthType;
  ticketId: string;
}) {
  const [description, setDescription] = useState<string>("");
  const { mutate, isLoading } = usetTicketCommentPost({
    refetch,
  });

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handlePostComment = () => {
    if (isLoading) return;
    mutate({
      ticketId,
      description,
    });
  };

  return (
    <CommentInputWrapper>
      <TextField
        variant="outlined"
        label="Comment"
        value={description}
        onChange={handleDescriptionChange}
        multiline
        rows={4}
        fullWidth
      />
      <div>
        <Button variant="contained" onClick={handlePostComment}>
          Comment
        </Button>
      </div>
    </CommentInputWrapper>
  );
}
