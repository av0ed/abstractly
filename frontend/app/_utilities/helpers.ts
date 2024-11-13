export const generateIds = (arr: string[], type: string) => {
  return arr.map((el) => {
    return `${el.toLowerCase().replaceAll(" ", "_")}_${type}`;
  });
};

export const makeLink = (title: string): string => {
  return title.toLowerCase().replaceAll(" ", "-");
};

export const validateEmail = (email: string) => {
  // https://mailtrap.io/blog/javascript-email-validation/
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const IS_FORMATTED = EMAIL_REGEX.test(email);
  let errorText = "";

  if (!email) {
    errorText = "Email address is required.";
  } else if (!IS_FORMATTED) {
    errorText = "Please enter a valid email address.";
  }

  return { isValid: !errorText, errorText: errorText };
};
