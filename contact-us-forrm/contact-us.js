document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".Contact-us");
  const successMessage = document.querySelector(".sucess");
  const requiredMessages = document.querySelectorAll(".required");
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const emailInput = document.getElementById("Email");
  const generalEnquiryInput = document.getElementById("genral-enquiry");
  const supportEnquiryInput = document.getElementById("support-enquiry");
  const messageInput = document.getElementById("message");
  const checkboxInput = document.getElementById("checkbox-x");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Reset the required messages visibility
    requiredMessages.forEach((msg) => (msg.style.display = "none"));

    let isValid = true;

    // Validate first name
    if (!firstNameInput.value.trim()) {
      firstNameInput.nextElementSibling.style.display = "block";
      isValid = false;
    }

    // Validate last name
    if (!lastNameInput.value.trim()) {
      lastNameInput.nextElementSibling.style.display = "block";
      isValid = false;
    }

    // Validate email
    if (!validateEmail(emailInput.value.trim())) {
      emailInput.nextElementSibling.style.display = "block";
      isValid = false;
    }

    // Validate query type
    if (!generalEnquiryInput.checked && !supportEnquiryInput.checked) {
      generalEnquiryInput.parentElement.parentElement.nextElementSibling.style.display =
        "block";
      isValid = false;
    }

    // Validate message
    if (!messageInput.value.trim()) {
      messageInput.nextElementSibling.style.display = "block";
      isValid = false;
    }

    // Validate checkbox
    if (!checkboxInput.checked) {
      checkboxInput.parentElement.nextElementSibling.style.display = "block";
      isValid = false;
    }

    if (isValid) {
      successMessage.style.display = "block";
      form.reset();

      // Hide success message after 3 seconds
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000);
    }
  });

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  }
});
