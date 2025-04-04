


document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    // Function to show and hide popup
    window.showPopup = function (show) {
      document.getElementById('popup').style.visibility = show ? 'visible' : 'hidden';
    };
  });
  
  $('#send-message-btn').click(function() {
    var formUrl = 'https://formspree.io/f/mjkyawgj'; // Replace with your actual Formspree form ID

    var message = prompt('Please enter your message:');
    var name = prompt('Your name:');
    var email = prompt('Your email:');

    if (!message || !name || !email) {
        alert('Please fill out all fields.');
        return;
    }

    var data = JSON.stringify({
        name: name,
        _replyto: email, // Corrected key for Formspree
        message: message
    });

    $.ajax({
        type: 'POST',
        url: formUrl,
        data: data,
        contentType: 'application/json', // Set content type to JSON
        dataType: 'json',
        processData: false
    })
    .done(function() {
        alert('Message sent successfully!');
    })
    .fail(function() {
        alert('Oops! Something went wrong. Please try again later.');
    });
});
