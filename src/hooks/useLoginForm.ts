import { useCallback, useState } from "react";
import useLogin from "./useLogin";

export default function useLoginForm() {
  const { isLoading, mutate } = useLogin();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<boolean>(false);
  const [passError, setPassError] = useState<boolean>(false);

  const handleEmailError = () => {
    if (email === "") setEmailError(true);
  };

  const handlePassError = () => {
    if (password === "") setPassError(true);
  };
  const handleEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
      if (emailError) {
        setEmailError(false);
      }
    },
    [email]
  );
  const handlePasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
      if (passError) {
        setPassError(false);
      }
    },
    [setPassword]
  );

  const handleSubmit = () => {
    if (email === "") {
      setEmailError(true);
      return;
    }

    if (password === "") {
      setPassError(true);
      return;
    }
    if (isLoading) return;
    mutate({
      email,
      password,
    });
  };
  return {
    email,
    password,
    emailError,
    passError,
    handlePasswordChange,
    handleEmailChange,
    handleEmailError,
    handlePassError,
    isLoading,
    handleSubmit,
  };
}
