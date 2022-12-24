import {
  TableBody,
  TableFooter,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import useTicketsGet from "../../hooks/useTicketsGet";
import GeneralTable from "../general/GeneralTable";
import TicketsTableRow from "./TicketsTableRow";

export default function TicketsTable() {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useTicketsGet({
    page,
  });

  const handlePageChange = (p: number) => {
    if (p + 1 < 1) return;
    setPage(p + 1);
  };
  return (
    <GeneralTable
      headers={[
        "Decription",
        "Status",
        "Product",
        "Time",
        "Assigned to",
        "Actions",
      ]}
    >
      {!isLoading && data && (
        <>
          <TableBody>
            {data.items.map((ticket) => (
              <TicketsTableRow key={ticket.id} ticket={ticket} />
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[data.itemsPerPage]}
                colSpan={5}
                count={data.totalItems}
                rowsPerPage={data.itemsPerPage}
                page={page - 1}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={(_, page) => handlePageChange(page)}
              />
            </TableRow>
          </TableFooter>
        </>
      )}
    </GeneralTable>
  );
}
