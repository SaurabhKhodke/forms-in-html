function validateForm() {
  // Get input values
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var gender = document.getElementById("gender").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Validation checks
  if (!firstName || !lastName || !gender || !email || !phone || !address || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return false;
  }

  // Validate email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return false;
  }

  // Validate phone number format (you can customize the regex based on your requirements)
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
      alert("Invalid phone number format");
      return false;
  }

  // Validate password length (you can add more complex password requirements)
  if (password.length < 8) {
      alert("Password should be at least 8 characters long");
      return false;
  }

  // Confirm password match
  if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
  }

  // If all validations pass, you can submit the form or perform other actions
  // For example, you might want to submit the form to a server using AJAX.

  alert("Form submitted successfully!");
  return true;
}
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
splitLetters(words[i]);
}

function changeWord() {
var cw = wordArray[currentWord];
var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
for (var i = 0; i < cw.length; i++) {
  animateLetterOut(cw, i);
}

for (var i = 0; i < nw.length; i++) {
  nw[i].className = 'letter behind';
  nw[0].parentElement.style.opacity = 1;
  animateLetterIn(nw, i);
}

currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
setTimeout(function() {
  cw[i].className = 'letter out';
}, i*80);
}

function animateLetterIn(nw, i) {
setTimeout(function() {
  nw[i].className = 'letter in';
}, 340+(i*80));
}

function splitLetters(word) {
var content = word.innerHTML;
word.innerHTML = '';
var letters = [];
for (var i = 0; i < content.length; i++) {
  var letter = document.createElement('span');
  letter.className = 'letter';
  letter.innerHTML = content.charAt(i);
  word.appendChild(letter);
  letters.push(letter);
}

wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 3000);