import styled from "@emotion/styled";
import {
  styled as muiStyled,
  TableCell,
  tableCellClasses,
  TableRow,
} from "@mui/material";
import { mq } from "../../config/responsive.config";

export const FormWrapper = styled.form`
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

export const ContentWrapper = styled.main`
  display: flex;
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

export const WideContentWrapper = styled.main`
  margin: 20px 0;
  width: 80%;
  display: grid;
  gap: 25px;

  @media ${mq("md")} {
    width: 70%;
  }

  @media ${mq("lg")} {
    width: 60%;
  }
`;

export const StyledTableCell = muiStyled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = muiStyled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
