import styled from "@emotion/styled";
import {
  Box,
  Button,
  CircularProgress,
  MenuItem,
  TextField,
} from "@mui/material";
import { useCallback, useState } from "react";
import { mq } from "../../config/responsive.config";
import { useCreateTicketForm } from "../../hooks/useCreateTicketForm";
import useTicketPost from "../../hooks/useTicketPost";
import { productTypes } from "../../types/ticket.type";
import { FormWrapper } from "../general/GeneralSyles";

export default function CreateTicket({
  handleSuccess,
}: {
  handleSuccess: () => void;
}) {
  const {
    email,
    description,
    product,
    emailError,
    descError,
    handleEmailChange,
    handleEmailError,
    handleDescriptionChange,
    handleDescriptionError,
    handleProductChange,
    isLoading,
    handleSubmit,
  } = useCreateTicketForm({
    handleSuccess,
  });

  return (
    <FormWrapper>
      <TextField
        variant="outlined"
        label="email"
        value={email}
        onChange={handleEmailChange}
        fullWidth
        error={emailError}
        onBlur={handleEmailError}
        helperText="field neccesary"
      />

      <TextField
        variant="outlined"
        label="description"
        value={description}
        onChange={handleDescriptionChange}
        multiline
        rows={4}
        fullWidth
        onBlur={handleDescriptionError}
        error={descError}
        helperText="field neccesary"
      />
      <TextField
        select
        label="Product"
        defaultValue={1}
        value={product}
        onChange={handleProductChange}
        helperText="Please select your product"
      >
        {productTypes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button onClick={handleSubmit} variant="contained">
        {isLoading ? <CircularProgress /> : "Send Ticket"}
      </Button>
    </FormWrapper>
  );
}
