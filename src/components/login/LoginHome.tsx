import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import { mq } from "../../config/responsive.config";
import LoginForm from "../forms/LoginForm";

const HomeWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  max-width: 100%;
  img {
    width: 200px;
    @media ${mq("md")} {
      width: 400px;
    }
  }
`;
export default function LoginHome() {
  return (
    <HomeWrapper>
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
        Login to Dashboard
      </Typography>
      <LoginForm />
    </HomeWrapper>
  );
}
