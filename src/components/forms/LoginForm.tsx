import styled from "@emotion/styled";
import { Button, CircularProgress, TextField } from "@mui/material";
import { mq } from "../../config/responsive.config";
import useLoginForm from "../../hooks/useLoginForm";

const TicketFormWrapper = styled.form`
  margin: 20px 0;
  width: 90%;
  display: grid;
  gap: 25px;

  @media ${mq("md")} {
    width: 40%;
  }

  @media ${mq("lg")} {
    width: 30%;
  }
`;

export default function LoginForm() {
  const {
    email,
    emailError,
    passError,
    password,
    handleEmailChange,
    handlePasswordChange,
    handlePassError,
    handleEmailError,
    handleSubmit,
    isLoading,
  } = useLoginForm();

  return (
    <TicketFormWrapper>
      <TextField
        variant="outlined"
        label="email"
        value={email}
        onChange={handleEmailChange}
        fullWidth
        type="email"
        error={emailError}
        onBlur={handleEmailError}
        helperText="field neccesary"
      />

      <TextField
        variant="outlined"
        label="password"
        value={password}
        type="password"
        onChange={handlePasswordChange}
        fullWidth
        onBlur={handlePassError}
        error={passError}
        helperText="field neccesary"
      />
      <Button variant="contained" onClick={handleSubmit}>
        {isLoading ? <CircularProgress /> : "Login"}
      </Button>
    </TicketFormWrapper>
  );
}
