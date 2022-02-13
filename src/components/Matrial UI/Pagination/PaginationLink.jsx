import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationLink = ({ change }) => {
  const [page, setPage] = React.useState(1);
  
  
  const handleChange = (event, value) => {
    setPage(value);
    change(value)
  };

  
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        color="secondary"
      />
    </Stack>
  );
};

export default PaginationLink;
