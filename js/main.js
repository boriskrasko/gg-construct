for (const dropdown of document.querySelectorAll('.dropdown-list')) {
  dropdown.addEventListener('click', function () {
    this.querySelector('.dropdown-select').classList.toggle('opened');
  })
}
for (const option of document.querySelectorAll('.option')) {
  option.addEventListener('click', function () {
    if (!this.classList.contains('selected')) {
      this.parentNode.querySelector('.option.selected').classList.remove('selected');
      this.classList.add('selected');
      localStorage.setItem('currentLang', this.textContent);
      this.closest('.dropdown-select').querySelector('.dropdown-title span').textContent = this.textContent;
    }
  })
}
window.addEventListener('click', function (e) {
  for (const select of document.querySelectorAll('.dropdown-select')) {
    if (!select.contains(e.target)) {
      select.classList.remove('opened');
    }
  }
});

let searchBtn = document.querySelector('.btn-search');
let searchModal = document.querySelector('.search');
// let backlink = document.querySelector('.backlink');
// backlink.href = localStorage.getItem('backlink') || 'activiteiten.html';

// window.addEventListener('beforeunload', function () {
//  localStorage.setItem('backlink', `${window.location.pathname}`);
// });

window.addEventListener('click', function (e) {
  if (!searchBtn.contains(e.target) && !searchModal.contains(e.target)) {
    searchModal.classList.remove('flex');
  }
})

searchBtn.addEventListener('click', () => {
  searchModal.classList.toggle('flex');
})

window.onscroll = function () {
  myFunction()
};

let navbar = document.querySelector('.navbar');
let main = document.querySelector('.main');
let mobile = document.getElementById('menuToggle');
let dropdownSelect = document.querySelector('.dropdown-select');
let widgetBtn = document.querySelector('.contact-widget-btn');
let widgetInput = document.querySelector('.contact-widget-input');

widgetInput.addEventListener('change', () => {
  widgetBtn.classList.toggle('ti-comment');
  widgetBtn.classList.toggle('ti-close');
})

let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
    searchModal.style.marginTop = '-40px';
    mobile.style.position = 'fixed';
    mobile.style.marginTop = '-40px';
  } else {
    navbar.classList.remove('sticky');
    mobile.classList.remove('sticky');
    mobile.style.marginTop = '0';
    mobile.style.position = 'absolute';
    searchModal.style.marginTop = '0';
  }
  if (window.pageYOffset >= 600) {
    dropdownSelect.classList.remove('opened');
  }
}
