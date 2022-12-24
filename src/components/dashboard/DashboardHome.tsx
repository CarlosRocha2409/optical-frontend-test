import { Typography } from "@mui/material";
import { ContentWrapper, WideContentWrapper } from "../general/GeneralSyles";
import TicketsTable from "./TicketsTable";

export default function DashboardHome() {
  return (
    <ContentWrapper>
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
        Tickets
      </Typography>
      <WideContentWrapper>
        <TicketsTable />
      </WideContentWrapper>
    </ContentWrapper>
  );
}
