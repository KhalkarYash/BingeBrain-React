export const checkValidData = (email, password/*, name*/) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);

  // const isNameValid = /^[A-Za-z]+(\s[A-Za-z]+)*$/.test(name);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  // if (!isNameValid) return "Name format is not valid";

  return null;
};
