import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import logo from "../../assets/logo.png";
import CreateTicket from "../forms/CreateTicket";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ContentWrapper } from "../general/GeneralSyles";

export default function TicketHome() {
  const [created, setCreated] = useState<boolean>(false);

  return (
    <ContentWrapper>
      <img src={logo} alt="logo" />
      <Typography
        sx={{
          typography: {
            xs: "h4",
            sm: "h4",
            md: "h3",
          },
        }}
      >
        Create a support ticket
      </Typography>
      {created ? (
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            justifyItems: "center",
            textAlign: "center",
            gap: "23px",
            marginTop: "25px",
          }}
        >
          <CheckCircleIcon
            color="success"
            sx={{
              width: "80px",
              height: "80px",
            }}
          />

          <Typography
            sx={{
              typography: {
                xs: "h4",
                sm: "h4",
                md: "h3",
              },
            }}
          >
            Successfully Created support ticket
          </Typography>
          <Button variant="contained" onClick={() => setCreated(false)}>
            New
          </Button>
        </Box>
      ) : (
        <CreateTicket
          handleSuccess={() => {
            setCreated(true);
          }}
        />
      )}
    </ContentWrapper>
  );
}
