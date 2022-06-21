import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import Checkbox from "@mui/material/Checkbox";
import LoadingButton from "@mui/lab/LoadingButton";

import { getUserState } from "../redux/selectors/user";
import { getInputData, submitInputData } from "../redux/slice/user";
import "../styles/main.css";
import {
  EmailIconStyle,
  FormCheckboxStyle,
  FormControlStyle,
  SignInBoxFormStyle,
  SignInButtonStyle,
} from "../styles/mui";
import { SignInFormProps } from "../types";

const SignInForm = ({ handleOpen }: SignInFormProps) => {
  const dispatch = useDispatch();
  const { user, loading, errors } = useSelector(getUserState);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.currentTarget;
    dispatch(getInputData({ ...user, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(submitInputData({ ...user, logout: false }));
  };

  const handleClickShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Grid item xs={12} md={6} lg={6}>
      <Box sx={SignInBoxFormStyle}>
        <img
          src={require("../assets/images/Frame.png")}
          alt="Sign In"
          className="sign-in-form-background"
        />
        <form
          noValidate
          autoComplete="off"
          className="sign-in-form"
          onSubmit={handleSubmit}
        >
          <h2 className="sign-in-title form-title">
            Prijava na <br />
            sistem
          </h2>

          {/* EMAIL INPUT */}
          <FormControl variant="standard" sx={FormControlStyle}>
            <InputLabel htmlFor="standard-adornment-email">
              Korisničko ime
            </InputLabel>
            <Input
              id="standard-adornment-email"
              onChange={(e) => handleChange(e)}
              type="email"
              name="email"
              value={user.email}
              required
              error={errors.email !== ""}
              endAdornment={
                <InputAdornment position="end" sx={EmailIconStyle}>
                  <EmailIcon />
                </InputAdornment>
              }
            />
            {errors.email !== "" && (
              <span className="sign-in-input-error">{errors.email}</span>
            )}
          </FormControl>

          {/* PASSWORD INPUT */}
          <FormControl variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Lozinka
            </InputLabel>
            <Input
              id="standard-adornment-password"
              onChange={(e) => handleChange(e)}
              type={showPassword ? "text" : "password"}
              name="password"
              value={user.password}
              required
              error={errors.password !== ""}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors.password !== "" && (
              <span className="sign-in-input-error">{errors.password}</span>
            )}
          </FormControl>

          {/* REMEMBER CHECKBOX / FORGOTTEN PASSWORD */}
          <div className="sign-in-form__options">
            <div className="sign-in-form__checkbox">
              <Checkbox defaultChecked color="success" sx={FormCheckboxStyle} />
              Zapamti
            </div>
            <span className="forgotten-password" onClick={handleOpen}>
              Zaboravili šifru?
            </span>
          </div>

          {/* SIGNIN BUTTON */}
          <LoadingButton
            type="submit"
            variant="contained"
            sx={SignInButtonStyle}
            loading={loading.submitLoading}
          >
            Uloguj se
          </LoadingButton>
        </form>
      </Box>
    </Grid>
  );
};

export default SignInForm;
