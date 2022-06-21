import { CompanyModel, InputErrorModel, UserModel } from "../types";

/* Validating user input on SignIn page */

export const validateSignInInput = (
  users: UserModel[],
  email: string,
  password: string
) => {
  const errors: InputErrorModel = { email: "", password: "" };

  if (email.trim() === "") {
    errors.email = "Obavezno polje";
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

    if (!email.match(regEx)) {
      errors.email = "Nepravilan format";
    } else {
      if (!users.find((user) => user.email === email)) {
        errors.email = "Korisnik ne postoji";
      } else if (
        users.find((user) => user.email === email && user.password !== password)
      ) {
        errors.password = "Netačna lozinka";
      }
    }
  }

  if (password === "") {
    errors.password = "Obavezno polje";
  }

  const isValid = Object.values(errors).every((error: string) => error === "");

  return {
    errors,
    isValid,
  };
};

/* Validating user input on Home page (Edit Company) */

export const validateEditCompanyInput = (
  company: CompanyModel,
  dateValue: string
) => {
  const { name, email, createdBy, updatedBy } = company;

  const errors = {
    name: "",
    email: "",
    createdBy: "",
    updatedBy: "",
    date: "",
  };

  if (name.trim() === "") {
    errors.name = "Obavezno polje";
  }

  if (email.trim() === "") {
    errors.email = "Obavezno polje";
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

    if (!email.match(regEx)) {
      errors.email = "Nepravilan format";
    }
  }

  if (createdBy.trim() === "") {
    errors.createdBy = "Obavezno polje";
  }

  if (updatedBy.trim() === "") {
    errors.updatedBy = "Obavezno polje";
  }

  if (isNaN(new Date(dateValue).valueOf())) {
    errors.date = "Nepravilan format";
  }

  const isValid = Object.values(errors).every((error: string) => error === "");

  return {
    errors,
    isValid,
  };
};
