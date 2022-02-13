import React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      backgroundColor: theme.palette.background.paper
    },
  },
}));

export default function SortBY({selectValue}) {
  const [id, setId] = React.useState("");



  const handleChange = (event) => {
    setId(event.target.value);
    selectValue(event.target.value);
    
  };
  return (
    <div>
      <FormControl sx={{ m: 1, marginTop: 10 }} variant="standard">
        <InputLabel htmlFor="demo-customized-select-native" sx={{color: 'white'}}>Sort By</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={id}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option value={'to_rated'}>Rating</option>
          <option value={'popular'}>Popular</option>
          <option value={'upcoming'}>Upcoming</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
