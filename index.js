// template_jygyeph
// service_meetweg
// RJthz35oIiV7VG5Ey

function contact() {
  event.preventDefault(event);
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_meetweg",
      "template_jygyeph",
      event.target,
      "RJthz35oIiV7VG5Ey"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at scottslaglebusiness@gmail.com"
      );
    });
}

let isModalOpen = false;
function toggleModal() {    
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
        
    }   
    isModalOpen = true; 
  document.body.classList += " modal--open";
}
