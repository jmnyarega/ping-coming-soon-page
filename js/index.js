// get error colors from css

const colors = window.getComputedStyle(document.body);

// validate email
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const validate = () => {
  // email
  const email = document.getElementById("email");
  email.style = `1px solid}`;

  // error container
  const errorContainer = document.getElementById("error-email");
  errorContainer.style.display = "none";

  if (!email.value || !emailIsValid(email.value)) {
    errorContainer.style.display = "block";
    email.style.border = `1px solid ${colors.getPropertyValue("--light-red")}`;
    errorContainer.innerText = "Please provide a valid email address!";
  }

  return false;
};
