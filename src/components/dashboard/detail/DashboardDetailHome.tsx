import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { mq } from "../../../config/responsive.config";
import useSingleTicketGet from "../../../hooks/useSingleTicketGet";
import { ContentWrapper, WideContentWrapper } from "../../general/GeneralSyles";
import AssigneeButton from "../AssigneeButton";
import TicketStatusSelect from "../TicketStatusSelect";
import { DetailComments } from "./DetailComments";

const DetailHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  div {
    display: grid;
    gap: 20px;
  }
  @media ${mq("md")} {
    grid-template-columns: 1fr 0.5fr;
  }
`;

export default function DashboardDetailHome() {
  const { ticketId } = useParams();
  const { data, isLoading, refetch } = useSingleTicketGet({
    id: ticketId ?? "",
  });
  const navigate = useNavigate();
  return (
    <>
      {!isLoading && data && (
        <ContentWrapper>
          <WideContentWrapper>
            <div>
              <Button
                variant="contained"
                onClick={() => navigate("/dashboard")}
              >
                Go Back
              </Button>
            </div>
            <DetailHeader>
              <Typography
                sx={{
                  textAlign: "left",
                  typography: {
                    xs: "h4",
                    sm: "h4",
                    md: "h2",
                  },
                }}
              >
                Ticket
              </Typography>
              <AssigneeButton ticketId={data.id} assignee={data.assignee} />
            </DetailHeader>

            <DetailHeader>
              <div>
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
                  User Email
                </Typography>

                <Typography
                  sx={{
                    textAlign: "left",
                    typography: "body1",
                  }}
                >
                  {data.userEmail}
                </Typography>
              </div>
              <div>
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
                  Date
                </Typography>

                <Typography
                  sx={{
                    textAlign: "left",
                    typography: "body1",
                  }}
                >
                  {new Date(data.createdAt).toLocaleString()}
                </Typography>
              </div>
            </DetailHeader>

            <DetailHeader>
              <div>
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
                  Description
                </Typography>
                <TicketStatusSelect
                  initialStatus={data.statusIndex}
                  ticketId={data.id}
                />
              </div>
            </DetailHeader>

            <Typography
              sx={{
                textAlign: "left",
                typography: "body1",
              }}
            >
              {data.description}
            </Typography>
            <DetailComments comments={data.comments} refetch={refetch} />
          </WideContentWrapper>
        </ContentWrapper>
      )}
    </>
  );
}
