// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Rating from "@mui/material/Rating";

// export default function CustomizedRating({ ratingStar }) {
//   console.log(ratingStar);
//   return (
//     <Box
//       sx={{
//         "& > legend": { mt: 2 },
//       }}
//     >
//       <Rating
//         precision={0.5}
//         readOnly={true}
//         name="customized-10"
//         defaultValue={ratingStar}
//         max={10}
//       />
//     </Box>
//   );
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function CustomizedRating({ratingStar}) {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >

      <StyledRating
      readOnly={true}
        name="customized-color"
        defaultValue={ratingStar}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        max={10}
      />

    </Box>
  );
}
