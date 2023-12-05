const validateInput = (input, form) => {
  const inputHint = form.querySelector(`#${input.getAttribute("id")}-hint`);

  let isBadData = false;

  inputHint.textContent = "";

  if (input.value == "") {
    isBadData = true;
    inputHint.textContent = `${input.getAttribute(
      "placeholder"
    )} cannot be empty`;
    input.classList.add("signup__input--error");
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-describedby", inputHint.getAttribute("id"));
  } else {
    input.classList.remove("signup__input--error");
    input.removeAttribute("aria-invalid");
    input.removeAttribute("aria-describedby");
  }

  if (!isBadData && input.getAttribute("id") == "email") {
    isBadData = !/^\S+@\S+\.\S+$/.test(input.value);
    if (isBadData) {
      inputHint.textContent = "Looks like this is not an email";
      input.classList.add("signup__input--error");
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", inputHint.getAttribute("id"));
    }
  }
  return isBadData;
};

const form = document.getElementById("signup__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const liveError = document.getElementById("signup__error");

  liveError.textContent = "";

  let isBadData = false;

  const firstname = form.querySelector("#firstname");
  isBadData = validateInput(firstname, form);

  const lastname = form.querySelector("#lastname");
  isBadData = validateInput(lastname, form);

  const email = form.querySelector("#email");
  isBadData = validateInput(email, form);

  const password = form.querySelector("#password");
  isBadData = validateInput(password, form);

  if (isBadData)
    return (liveError.textContent =
      "Your form has errors. Please fix them and submit again");
});
