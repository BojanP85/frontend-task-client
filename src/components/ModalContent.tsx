import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import { ModalContentProps } from "../types";
import { validateEditCompanyInput } from "../utils/validateInputs";

const ModalContent = ({
  tooltipOption,
  handleChange,
  companyObject,
  dateValue,
  setDateValue,
}: ModalContentProps) => {
  const { errors } = validateEditCompanyInput(companyObject, dateValue);

  // Conditional rendering of Modal content
  switch (tooltipOption) {
    case "edit":
      return (
        <>
          <FormControl fullWidth>
            {/* NAME */}
            <TextField
              onChange={handleChange}
              label="Preduzeće"
              name="name"
              value={companyObject.name}
              fullWidth
              required
              error={errors.name !== ""}
            />
            <span className="edit-input-error">{errors.name}</span>

            {/* EMAIL */}
            <TextField
              onChange={(e) => handleChange(e)}
              label="Email"
              name="email"
              value={companyObject.email}
              fullWidth
              required
              error={errors.email !== ""}
            />
            <span className="edit-input-error">{errors.email}</span>

            {/* CREATED BY */}
            <TextField
              onChange={(e) => handleChange(e)}
              label="Kreirao"
              name="createdBy"
              value={companyObject.createdBy}
              fullWidth
              required
              error={errors.createdBy !== ""}
            />
            <span className="edit-input-error">{errors.createdBy}</span>

            {/* UPDATED BY */}
            <TextField
              onChange={(e) => handleChange(e)}
              label="Ažurirao"
              name="updatedBy"
              value={companyObject.updatedBy}
              fullWidth
              required
              error={errors.updatedBy !== ""}
            />
            <span className="edit-input-error">{errors.updatedBy}</span>

            {/* DATE */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} required />}
                disableMaskedInput
                inputFormat="dd MMM yyyy, hh:mm a"
                label="Datum"
                value={dateValue}
                onChange={(newValue) => {
                  newValue && setDateValue(newValue);
                }}
              />
            </LocalizationProvider>
            <span className="edit-input-error date">{errors.date}</span>
          </FormControl>
          <Divider sx={{ mt: 3 }} />
        </>
      );

    case "delete":
      return (
        <>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Da li ste sigurni?
          </Typography>
          <Divider />
        </>
      );

    default:
      return (
        <Typography id="modal-modal-title" variant="h6" component="h2">
          No content
        </Typography>
      );
  }
};

export default ModalContent;
