
// Navbar Section
const navbarToggler = document.getElementById('navbar-toggler');
const navbarLinks = document.getElementById('navbar-links');

navbarToggler.addEventListener('click', function () {
  navbarLinks.classList.toggle('collapse');
});



// Form Section
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission for demonstration purposes

  // Perform email validation
  var emailInput = document.getElementById('email');
  var emailError = document.getElementById('email-error');

  if (!emailInput.checkValidity()) {
    emailError.style.display = 'block';
    emailInput.classList.add('error');
    emailInput.classList.remove('success');
  } else {
    emailError.style.display = 'none';
    emailInput.classList.add('success');
    emailInput.classList.remove('error');
    // Proceed with form submission or other actions
    showSuccessMessage();
  }
});

function showSuccessMessage() {
  var successMessage = document.createElement('p');
  successMessage.className = 'success-message';
  successMessage.textContent = 'Form submitted successfully!';
  document.querySelector('form').appendChild(successMessage);
}
