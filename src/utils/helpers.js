export const emailValidation = (email) => {
    if (!email.length) {
      return { isValid: false, message: "Message length is not valid"};
    }
    let filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
    return filter.test(email)
      ? { isValid: true, message: "" }
      : { isValid: false, message: "Invalid email address" };
  };
  