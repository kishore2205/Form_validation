document.getElementById("sportsForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  // Clear old errors
  document.querySelectorAll(".error").forEach(e => e.textContent = "");

  // Get values
  let schoolName = document.getElementById("schoolName").value.trim();
  let gender = document.getElementById("gender").value;
  let sport = document.getElementById("sport").value;
  let captainName = document.getElementById("captainName").value.trim();
  let captainNo = document.getElementById("captainNo").value.trim();
  let ptSir = document.getElementById("ptSir").value.trim();
  let teamSize = document.getElementById("teamSize").value;
  let registrationDate = document.getElementById("registrationDate").value;
  let remarks = document.getElementById("remarks").value.trim();

  // Patterns
  let namePattern = /^[A-Za-z\s]{2,50}$/;
  let phonePattern = /^[0-9]{10}$/;
  let today = new Date().toISOString().split("T")[0];

  // Validation
  if (!schoolName) {
    document.getElementById("schoolNameError").textContent = "School Name is required.";
    isValid = false;
  } else if (!namePattern.test(schoolName)) {
    document.getElementById("schoolNameError").textContent = "Only letters allowed (min 2 characters).";
    isValid = false;
  }

  if (!gender) {
    document.getElementById("genderError").textContent = "Please select team gender.";
    isValid = false;
  }

  if (!sport) {
    document.getElementById("sportError").textContent = "Please select a sport.";
    isValid = false;
  }

  if (!captainName) {
    document.getElementById("captainNameError").textContent = "Captain Name is required.";
    isValid = false;
  } else if (!namePattern.test(captainName)) {
    document.getElementById("captainNameError").textContent = "Only letters allowed.";
    isValid = false;
  }

  if (!captainNo) {
    document.getElementById("captainNoError").textContent = "Phone number is required.";
    isValid = false;
  } else if (!phonePattern.test(captainNo)) {
    document.getElementById("captainNoError").textContent = "Must be exactly 10 digits.";
    isValid = false;
  }

  if (!ptSir) {
    document.getElementById("ptSirError").textContent = "PT Sir/Coach Name is required.";
    isValid = false;
  } else if (!namePattern.test(ptSir)) {
    document.getElementById("ptSirError").textContent = "Only letters allowed.";
    isValid = false;
  }

  if (!teamSize) {
    document.getElementById("teamSizeError").textContent = "Team size is required.";
    isValid = false;
  } else if (teamSize <= 0 || teamSize > 20) {
    document.getElementById("teamSizeError").textContent = "Team size must be between 1 and 20.";
    isValid = false;
  }

  if (!registrationDate) {
    document.getElementById("registrationDateError").textContent = "Registration date is required.";
    isValid = false;
  } else if (registrationDate < today) {
    document.getElementById("registrationDateError").textContent = "Date cannot be in the past.";
    isValid = false;
  }

  if (remarks && remarks.length < 5) {
    document.getElementById("remarksError").textContent = "Remarks should be at least 5 characters.";
    isValid = false;
  }

  // Success
  if (isValid) {
    alert("✅ Registration Successful for " + sport + "!");
    document.getElementById("sportsForm").reset();
  }
});
