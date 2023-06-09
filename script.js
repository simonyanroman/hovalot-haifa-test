// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const body = document.querySelector(".body");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnsShowModal = document.querySelectorAll(".service_card_image");

// // Function to show Modal and Overlay
// const showModal = function () {
//   overlay.classList.remove("hidden");
//   modal.classList.remove("hidden");
//   body.style.overflow = "hidden";
// };

// // Function to hide Modal and Overlay
// const closeModal = function () {
//   overlay.classList.add("hidden");
//   modal.classList.add("hidden");
//   body.style.overflow = "";
// };

// for (let i = 0; i < btnsShowModal.length; i++) {
//   btnsShowModal[i].addEventListener("click", showModal);
// }

// btnCloseModal.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape") {
//     if (!modal.classList.contains("hidden")) {
//       closeModal();
//     }
//   }
// });

////////////////////
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.querySelectorAll(".slide");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
// }

// Telegram messages block FIREBASE

// let httpRequest = "https://alert-7tnr2kgnka-uc.a.run.app?reqtype=";

// function dialResponse() {
//   console.log(this.responseText);
// }

// function request(reqType) {
//   let oReq = new XMLHttpRequest();
//   oReq.onload = dialResponse;
//   oReq.open("get", `${httpRequest}${reqType}`, true);
//   oReq.send();
// }

// let phone_link = document.querySelector("#phone-link");

// phone_link.addEventListener("click", function () {
//   request("phone");
// });

// let phone_button = document.querySelector("#phone");

// phone_button.addEventListener("click", function () {
//   request("phone");
// });

// let whatsApp_link = document.querySelector("#whatsapp-link");

// whatsApp_link.addEventListener("click", function () {
//   request("whatsapp");
// });

// let whatsApp_button = document.querySelector("#whatsapp");

// whatsApp_button.addEventListener("click", function () {
//   request("whatsapp");
// });

// let instagram_button = document.querySelector("#instagram");

// instagram_button.addEventListener("click", function () {
//   request("instagram");
// });
