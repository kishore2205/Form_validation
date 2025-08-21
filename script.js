document.getElementById("sportsForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let errorMsg = document.getElementById("errorMsg");
  errorMsg.textContent = "";

  let captainNo = document.getElementById("captainNo").value.trim();
  let captainEmail = document.getElementById("captainEmail").value.trim();
  let teamSize = document.getElementById("teamSize").value;
  let registrationDate = document.getElementById("registrationDate").value;

  // Validation for phone number (10 digits)
  let phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(captainNo)) {
    errorMsg.textContent = "Please enter a valid 10-digit phone number.";
    return;
  }

  // Validation for email
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(captainEmail)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return;
  }

  // Validation for future date (registration cannot be in the past)
  let today = new Date().toISOString().split("T")[0];
  if (registrationDate < today) {
    errorMsg.textContent = "Registration date cannot be in the past.";
    return;
  }

  // Validation for team size
  if (teamSize <= 0) {
    errorMsg.textContent = "Team size must be at least 1.";
    return;
  }

  // Success
  alert("✅ Registration Successful for " + document.getElementById("sport").value + "!");
  document.getElementById("sportsForm").reset();
});
