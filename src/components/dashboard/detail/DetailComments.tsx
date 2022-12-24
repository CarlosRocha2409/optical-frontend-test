import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { mq } from "../../../config/responsive.config";
import { TRefecthType } from "../../../types/query.type";
import { IComment } from "../../../types/ticket.type";
import CommentInput from "./CommentInput";

const ComentWrapper = styled.div``;
const CommentList = styled.div`
  margin: 20px 0;
  padding: 10px;
  display: grid;
  gap: 30px;
  height: 200px;
  overflow: auto;
`;
const Comment = styled.section`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 10px;
  border-radius: 8px;
`;

const CommentHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 15px;
  div {
    display: grid;
    gap: 20px;
  }
  p {
    &:last-child {
      justify-self: flex-start;

      @media ${mq("md")} {
        justify-self: flex-end;
      }
    }
  }
  @media ${mq("md")} {
    grid-template-columns: 1fr 1fr;
  }
`;

export function DetailComments({
  comments,
  refetch,
}: {
  comments: IComment[];
  refetch: TRefecthType;
}) {
  const { ticketId } = useParams();
  return (
    <ComentWrapper>
      <Typography
        sx={{
          textAlign: "left",
          typography: {
            xs: "h5",
            sm: "h5",
            md: "h4",
          },
        }}
      >
        Comments
      </Typography>
      <CommentInput ticketId={ticketId ?? ""} refetch={refetch} />
      <CommentList>
        {comments.map((comment) => (
          <Comment>
            <CommentHeader>
              <Typography
                sx={{
                  textAlign: "left",
                  typography: "subtitle1",
                  fontWeight: "bold",
                }}
              >
                {comment.staffMember.fullname}
              </Typography>

              <Typography
                sx={{
                  textAlign: "left",
                  typography: "subtitle1",
                }}
              >
                {new Date(comment.createdAt).toLocaleString()}
              </Typography>
            </CommentHeader>

            <Typography
              sx={{
                textAlign: "left",
                typography: "h6",
              }}
            >
              {comment.description}
            </Typography>
          </Comment>
        ))}
      </CommentList>
    </ComentWrapper>
  );
}
