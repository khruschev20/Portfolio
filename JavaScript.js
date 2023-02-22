
// Scroll to top when button is clicked
scrollUpButton.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


$('.navbar-toggle').click(function() {
  $('.navbar-nav').slideToggle();
});
document.getElementById("submit-btn").addEventListener("click", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Vmamba" && password === "@khruschev2020") {
    alert("Login Successful!");
  } else {
    alert("Login Failed. Try again.");
  }
});

