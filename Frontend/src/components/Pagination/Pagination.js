import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

 function PaginationRounded() {
  return (
    <Stack spacing={4}>
      <Pagination count={10} shape="rounded" color="error" />
    </Stack>
  );
}
export default PaginationRounded