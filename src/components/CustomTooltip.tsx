import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import date from "date-and-time";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import SimCardDownloadOutlinedIcon from "@mui/icons-material/SimCardDownloadOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { getCompanyState } from "../redux/selectors/company";
import {
  getCompany,
  getInputData,
  submitInputData,
} from "../redux/slice/company";
import {
  DotsTooltipIconStyle,
  ModalButtonGroupStyle,
  ModalStyle,
} from "../styles/mui";
import { CustomTooltipProps } from "../types";
import { validateEditCompanyInput } from "../utils/validateInputs";
import CustomModal from "./CustomModal";
import ModalContent from "./ModalContent";

const DotsTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "#718096",
    width: 180,
    boxShadow: "8px 12px 24px rgba(93, 106, 131, 0.39)",
    borderRadius: "12px",
  },
}));

const CustomTooltip = ({
  children,
  company,
  handleDeleteCompany,
}: CustomTooltipProps) => {
  const dispatch = useDispatch();
  const { company: companyObject } = useSelector(getCompanyState);

  const [dateValue, setDateValue] = useState<string>(
    date.format(new Date(company.date), "DD MMM YYYY, hh:mm A")
  );

  const [open, setOpen] = useState({
    isOpen: false,
    tooltipOption: "",
  });

  const { isValid } = validateEditCompanyInput(companyObject, dateValue);

  const handleOpen = (tooltipOption: string) => {
    setOpen((open) => ({
      ...open,
      isOpen: true,
      tooltipOption,
    }));

    setDateValue(date.format(new Date(company.date), "DD MMM YYYY, hh:mm A"));
  };

  const handleClose = () => {
    setOpen((open) => ({
      ...open,
      isOpen: false,
      tooltipOption: "",
    }));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.currentTarget;
    dispatch(getInputData({ ...companyObject, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (open.tooltipOption === "edit") {
      dispatch(submitInputData({ ...companyObject, date: dateValue }));
    } else if (open.tooltipOption === "delete") {
      handleDeleteCompany();
    }
    handleClose();
  };

  return (
    <>
      {/* TOOLTIP */}
      <DotsTooltip
        title={
          <ul className="dots-tooltip-list">
            <li
              className="dots-tooltip-list__item"
              onClick={() => {
                handleOpen("edit");
                dispatch(getCompany(company));
              }}
            >
              <ContentCopyIcon sx={DotsTooltipIconStyle} />
              Edituj
            </li>
            <li className="dots-tooltip-list__item">
              <PrintOutlinedIcon sx={DotsTooltipIconStyle} />
              Štampaj
            </li>
            <li className="dots-tooltip-list__item">
              <SimCardDownloadOutlinedIcon sx={DotsTooltipIconStyle} />
              Skini PDF
            </li>
            <li
              className="dots-tooltip-list__item"
              onClick={() => handleOpen("delete")}
            >
              <DeleteOutlineOutlinedIcon sx={DotsTooltipIconStyle} />
              Brisanje
            </li>
          </ul>
        }
      >
        {children}
      </DotsTooltip>

      {/* MODAL */}
      <CustomModal open={open.isOpen} handleClose={handleClose}>
        <Box sx={ModalStyle}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <ModalContent
              tooltipOption={open.tooltipOption}
              handleChange={(e) => handleChange(e)}
              companyObject={companyObject}
              dateValue={dateValue}
              setDateValue={setDateValue}
            />
            <ButtonGroup
              size="large"
              aria-label="large button group"
              fullWidth
              variant="contained"
              sx={ModalButtonGroupStyle}
            >
              <Button
                color="error"
                type="submit"
                disabled={!isValid && open.tooltipOption === "edit"}
              >
                {open.tooltipOption === "edit" ? "Izmeni" : "Obriši"}
              </Button>
              <Button onClick={handleClose}>Otkaži</Button>
            </ButtonGroup>
          </form>
        </Box>
      </CustomModal>
    </>
  );
};

export default CustomTooltip;
