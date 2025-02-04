// Function to handle subscribe form submission
function sendWhatsApp() {
  let name = 
  document.getElementById("name").value;
  let phone = 
  document.getElementById("phone").value;
  let email = 
  document.getElementById("email").value;
  let message = 
  document.getElementById("message").value;

  if (!name||!phone||!email||!message){
    alert("please fll in all fields before sending.");
    return;
  }

  let formattedMessage = 'Name:${name}%0APhone:${phone}%0AEmail:${email}%0AMessage:${message}';
  let whatsappURL = 
  'https://wa.me/0814588898?text=${formattedMessage}';

  let userConfirmed = confirm("You are about to be redirected to send your message via WhatsApp. Proceed?");
  if (userConfirmed){
    window.open(whatsappURL, "_blank");
  }
}



$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  navText: [],
  center: true,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    1000: {
      items: 3
    }
  }
});
