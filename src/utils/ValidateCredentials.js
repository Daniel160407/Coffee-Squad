const validateCredentials = (fields) => {
  const {
    email = "",
    name = "",
    password = "",
    confirmPassword = "",
  } = fields;

  const errors = {};

  if (!email.trim()) {
    errors.email = "The email field is required.";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length < 3) {
      errors.email = "The email field must be at least 3 characters.";
    } else if (!emailRegex.test(email)) {
      errors.email =
        "The email must have a valid format like: example@example.com";
    }
  }

  if (!name.trim()) {
    errors.name = "The name field is required.";
  } else if (name.length < 3) {
    errors.name = "The name field must be at least 3 characters.";
  }

  if (!password.trim()) {
    errors.password = "The password field is required.";
  } else if (password.length < 6) {
    errors.password = "The password must be at least 6 characters.";
  }

  if (!confirmPassword.trim()) {
    errors.confirmPassword = "The confirm password field is required.";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
};

export const isValid = (errors) => {
  return Object.keys(errors).length === 0;
};

export default validateCredentials;
