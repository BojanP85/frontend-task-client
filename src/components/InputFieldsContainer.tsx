import { useState } from "react";
import date from "date-and-time";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { InputFieldsBoxStyle, SelectDisplayStyle } from "../styles/mui";

const InputFieldsContainer = () => {
  const now = new Date();

  const [dateValue, setDateValue] = useState<Date | null | string>(
    date.format(now, "MMM DD, YYYY")
  );

  const handleDateChange = (newValue: Date | null | string) => {
    setDateValue(newValue);
  };

  return (
    <Box
      component="form"
      sx={InputFieldsBoxStyle}
      noValidate
      autoComplete="off"
    >
      {/* SEARCH INPUT */}
      <FormControl sx={{ width: "305px" }}>
        <TextField
          variant="outlined"
          placeholder="Pretraga"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={require("../assets/icons/search.png")} alt="Search" />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

      {/* DATE INPUT */}
      <FormControl sx={{ width: "307px" }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            disableMaskedInput
            label="Filtriraj po datumu"
            inputFormat="MMM dd, yyyy"
            value={dateValue}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </FormControl>

      {/* DISPLAY SELECT */}
      <FormControl sx={{ width: "222px" }}>
        <InputLabel id="display-select-label">Prikaz</InputLabel>
        <Select
          labelId="display-select-label"
          id="display-select"
          label="Prikaz"
          sx={SelectDisplayStyle}
          value="all"
        >
          <MenuItem value="all">
            <span className="select-display-option">Sve</span>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default InputFieldsContainer;
