document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var userType = document.getElementById('usertype').value;
  
    var data = {
      username: username,
      password: password,
      userType: userType
    };
  
    fetch('http://localhost:3000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      if (response.ok) {
        if (userType === 'doctor') {
          window.location.href = 'doctor_dashboard.html';
        } else if (userType === 'patient') {
          window.location.href = 'patient_dashboard.html';
        }
      } else {
        alert('Invalid username or password. Please try again.');
      }
    })
    .catch(function(error) {
      console.log(error);
      alert('An error occurred. Please try again later.');
    });
  });
  