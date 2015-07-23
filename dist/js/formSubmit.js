var form = document.getElementById('contactForm');

form.onsubmit = function() {

  var email = document.getElementById('inputEmail').value;
  var industry = document.getElementById('industrySelect').value;
  var message = document.getElementById('message').value;

  console.log('Email:', email);
  console.log('Industry:', industry);
  console.log('Message', message);
  console.log('Timestamp:', new Date().toISOString());

};
