var email = 'scastillogpr@gmail.com';
var subject = 'Contact';

$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault();
    var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + $('#contact-email').val() + $('#contact-name').val();
    win = window.open(mailto_link, 'emailWindow');
    if (win && win.open && !win.closed) win.close();
  });
});

const menu = document.querySelector('.menu');
const link = document.querySelectorAll('.link');
const burguerButton = document.querySelector('#burger-menu');

const ipad = window.matchMedia('screen and (max-width: 767px)');

console.log(document.querySelector('.link'));

ipad.addListener(validation);

function validation(event) {
  if (event.matches) {
    burguerButton.addEventListener('click', hideShow);
    link[0].addEventListener('click', hideShow);
    link[1].addEventListener('click', hideShow);
    link[2].addEventListener('click', hideShow);
  } else {
    burguerButton.removeEventListener('click', hideShow);
  }
}

function hideShow() {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
  } else {
    menu.classList.add('is-active');
  }
}

validation(ipad);
