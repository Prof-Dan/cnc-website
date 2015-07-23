var form = document.getElementById('contactForm');

form.onsubmit = function() {

  var email = document.getElementById('inputEmail').value;
  var industry = document.getElementById('industrySelect').value;

  console.log('Email:', email);
  console.log('Industry:', industry);

  window.location.replace('./thankyou.html');
  return;

};
