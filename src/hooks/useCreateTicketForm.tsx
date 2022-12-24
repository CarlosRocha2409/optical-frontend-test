import { useCallback, useState } from "react";
import useTicketPost from "./useTicketPost";

export function useCreateTicketForm({
  handleSuccess,
}: {
  handleSuccess: () => void;
}) {
  const { mutate, isLoading } = useTicketPost({
    handleSuccess,
  });

  const [email, setEmail] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [product, setProduct] = useState<number>(1);

  const [emailError, setEmailError] = useState<boolean>(false);
  const [descError, setDescError] = useState<boolean>(false);

  const handleEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
      if (emailError) {
        setEmailError(false);
      }
    },
    [email]
  );
  const handleDescriptionChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(event.target.value);
      if (descError) {
        setDescError(false);
      }
    },
    [description]
  );

  const handleProductChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setProduct(+event.target.value);
    },
    [product]
  );

  const handleEmailError = () => {
    if (email === "") setEmailError(true);
  };

  const handleDescriptionError = () => {
    if (description === "") setDescError(true);
  };

  function handleSubmit() {
    if (email === "") {
      handleEmailError();
      return;
    }
    if (description === "") {
      handleDescriptionError();
      return;
    }

    if (isLoading) {
      return;
    }
    mutate({
      userEmail: email,
      description,
      product,
    });
  }

  return {
    email,
    description,
    product,
    emailError,
    descError,
    handleDescriptionChange,
    handleDescriptionError,
    handleEmailChange,
    handleEmailError,
    handleProductChange,
    handleSubmit,
    isLoading,
  };
}
