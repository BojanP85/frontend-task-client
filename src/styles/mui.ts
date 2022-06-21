import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

/* SignIn Container styles */

export const SignInContainerStyle: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  display: "flex",
  paddingLeft: 0,
  paddingRight: 0,
  background: "#E5E5E5",
};

export const SignInGridStyle: SxProps<Theme> = {
  background: "#E5E5E5",
  margin: "auto",
  width: "80%",
};

/* SignIn Image styles */

export const SignInBoxImgStyle: SxProps<Theme> = {
  background: "#F9F9ED",
  borderRadius: "50px 0 0 50px",
  height: "90vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "@media screen and (max-width: 900px)": {
    borderRadius: "50px 50px 0 0",
    height: "100vh",
  },
};

/* SignIn Form styles */

export const SignInBoxFormStyle: SxProps<Theme> = {
  background: "#FFFFFF",
  borderRadius: "0 50px 50px 0",
  height: "90vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  "@media screen and (max-width: 900px)": {
    borderRadius: "0 0 50px 50px",
    height: "100vh",
  },
};

export const FormCheckboxStyle: SxProps<Theme> = {
  padding: "0 8px 0 0",
};

export const FormControlStyle: SxProps<Theme> = {
  marginBottom: 4,
};

export const EmailIconStyle: SxProps<Theme> = {
  paddingRight: "8px",
};

export const SignInButtonStyle: SxProps<Theme> = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: "0.8rem",
  textTransform: "none",
  backgroundColor: "#045450",
  borderRadius: "10px",
  padding: "15px 0",

  "&:hover": { backgroundColor: "#0AA370" },
};

/* SideDrawer styles */

export const DrawerOptionButtonStyle: SxProps<Theme> = {
  paddingLeft: 0,
};

export const DrawerIconStyle: SxProps<Theme> = {
  justifyContent: "space-around",
};

export const LogoutIconStyle: SxProps<Theme> = {
  color: "#92929D",
};

/* AppBar styles */

export const AppBarStyle: SxProps<Theme> = {
  borderBottom: 0,
  boxShadow: "none",
};

/* Input Fields Container styles */

export const InputFieldsBoxStyle: SxProps<Theme> = {
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
  verticalAlign: "middle",
  width: "80%",

  "@media screen and (max-width: 900px)": {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },

  "& .MuiFormControl-root": {
    marginRight: "10px",

    "@media screen and (max-width: 900px)": {
      marginRight: 0,
      marginBottom: "15px",
      width: "100%",
    },
  },
};

export const SelectDisplayStyle: SxProps<Theme> = {
  borderRadius: "12px",
};

/* Table styles */

export const TableWrapperStyle: SxProps<Theme> = {
  flexGrow: 1,
  p: 3,
  marginTop: "50px",
};

export const TableTitleStyle: SxProps<Theme> = {
  fontFamily: "'Manrope', sans-serif",
  fontWeight: "800",
  fontSize: "28px",
  lineHeight: "130%",
  color: "#1A202C",
  marginBottom: "50px",
};

export const TableContainerStyle: SxProps<Theme> = {
  borderBottom: 0,
  borderRadius: 0,
  boxShadow: "none",
};

export const TableStyle: SxProps<Theme> = {
  minWidth: 650,
  width: "90%",
};

export const TableHeadStyle: SxProps<Theme> = {
  border: "1px solid #EDF2F7",
  borderRight: 0,
  borderLeft: 0,
};

export const TableHeadCellStyle: SxProps<Theme> = {
  fontFamily: "'Manrope', sans-serif",
  fontWight: "800",
  fontSize: "1rem",
  lineHeight: "150%",
  letterSpacing: "0.2px",
  color: "#718096",
  padding: "24px",
};

export const TableBodyCellStyle: SxProps<Theme> = {
  fontFamily: "'Manrope', sans-serif",
  fontWeight: 600,
  fontSize: "1rem",
  lineHeight: "150%",
  letterSpacing: "0.2px",
  color: "#1A202C",
  padding: "24px",
};

export const TableCellSkeletonStyle: SxProps<Theme> = {
  paddingLeft: 0,
  paddingRight: 0,
};

export const SkeletonStyle: SxProps<Theme> = {
  borderRadius: "4px",
};

export const EmptyTableMsgStyle: SxProps<Theme> = {
  fontFamily: "'Manrope', sans-serif",
  fontWeight: 600,
  fontSize: "1rem",
  paddingLeft: 0,
};

/* Pagination styles */

export const SelectNumberOfRowsStyle: SxProps<Theme> = {
  "& #demo-simple-select": {
    paddingTop: "10px",
    paddingBottom: "10px",
    marginRight: "15px",
  },
};

export const PaginationStyle: SxProps<Theme> = {
  paddingRight: "24px",
};

/* Tooltip styles */

export const DotsTooltipIconStyle: SxProps<Theme> = {
  width: "20px",
  height: "20px",
  marginRight: "10px",
};

/* Modal styles */

export const ModalStyle: SxProps<Theme> = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ModalButtonGroupStyle: SxProps<Theme> = {
  marginTop: "24px",
};
