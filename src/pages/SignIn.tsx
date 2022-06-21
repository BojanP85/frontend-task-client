import { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CustomModal from "../components/CustomModal";
import SignInForm from "../components/SignInForm";
import "../styles/main.css";
import {
  ModalStyle,
  SignInBoxImgStyle,
  SignInContainerStyle,
  SignInGridStyle,
} from "../styles/mui";

const SignIn = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth={false} sx={SignInContainerStyle}>
      <Grid container sx={SignInGridStyle}>
        {/* SIGNIN IMAGE */}
        <Grid item xs={12} md={6} lg={6}>
          <Box sx={SignInBoxImgStyle}>
            <img
              src={require("../assets/images/illustration.png")}
              alt="Sign In"
              className="sign-in-img"
            />
            <p className="sign-in-title">Lorem Ipsum</p>
          </Box>
        </Grid>

        {/* SIGNIN FORM */}
        <SignInForm handleOpen={handleOpen} />
      </Grid>

      {/* MODAL */}
      <CustomModal open={open} handleClose={handleClose}>
        <Box sx={ModalStyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            align="center"
          >
            Šteta. Trebalo je da zapišete.
          </Typography>
        </Box>
      </CustomModal>
    </Container>
  );
};

export default SignIn;
