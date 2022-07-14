import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import '@popperjs/core/dist/umd/popper.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import WOW from 'wow.js';
import 'wow.js/dist/wow.min.js';
import 'animate.css/animate.min.css';
import '../sass/style.scss';

console.log('Hello World!');

// Wow.js
new WOW().init();

// Footer Date
function getFullYear() {
  let fullYear = new Date().getFullYear();
  const footerDate = document.querySelector('.date');
  footerDate.innerHTML = fullYear;
}
getFullYear();
