const formEl = document.getElementById("form");
const emailEl = document.getElementById("email");
const emailMsgEl = document.getElementById("email-msg");

const setError = (element, msg) => {
  emailEl.classList.remove("success");
  element.classList.remove("success-visible");
  emailEl.classList.add("error");
  element.classList.add("error-visible");
  element.textContent = msg;
};
const setSuccess = (element, msg) => {
  emailEl.classList.remove("error");
  element.classList.remove("error-visible");
  emailEl.classList.add("success");
  element.classList.add("success-visible");
  emailEl.value = "";
  element.textContent = msg;
};
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailEl.value + "" == "") {
    setError(emailMsgEl, "Whoops! It looks like you forgot to add your email");
  } else if (validator.isEmail(emailEl.value + "")) {
    setSuccess(
      emailMsgEl,
      "Thanks for subscribing. We will notify you after launch."
    );
  } else {
    setError(emailMsgEl, "Please provide a valid email address");
  }
});
