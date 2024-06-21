document.querySelector("button"), addEventListener("click", calculateAge);
function calculateAge() {
  // Get input values
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  // Validate inputs
  const dayError = document.querySelector("#day ~ .error-msg");
  const monthError = document.querySelector("#month ~ .error-msg");
  const yearError = document.querySelector("#year ~ .error-msg");

  let isValid = true;

  if (isNaN(day) || day < 1 || day > 31) {
    dayError.style.display = "block";
    isValid = false;
  } else {
    dayError.style.display = "none";
  }

  if (isNaN(month) || month < 1 || month > 12) {
    monthError.style.display = "block";
    isValid = false;
  } else {
    monthError.style.display = "none";
  }

  if (isNaN(year) || year < 1) {
    yearError.style.display = "block";
    isValid = false;
  } else {
    yearError.style.display = "none";
  }

  if (!isValid) {
    return;
  }

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  // Calculate age
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += daysInMonth(today.getMonth() - 1, today.getFullYear());
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  // Update the results
  document.querySelector(".result-box div:nth-child(1) .result").textContent =
    ageYears;
  document.querySelector(".result-box div:nth-child(2) .result").textContent =
    ageMonths;
  document.querySelector(".result-box div:nth-child(3) .result").textContent =
    ageDays;
}

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}
