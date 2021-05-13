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

let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
    searchModal.style.marginTop = '-40px';
    mobile.style.position = 'fixed';
    mobile.style.marginTop = '-40px';
    dropdownSelect.classList.remove('opened');
  } else {
    navbar.classList.remove('sticky');
    mobile.classList.remove('sticky');
    mobile.style.marginTop = '0';
    mobile.style.position = 'absolute';
    searchModal.style.marginTop = '0';
  }
}

let currentLocationPath = window.location.pathname;
let titlebarPath = document.querySelector('.titlebar-path')

let pathNames = currentLocationPath.split('/');

for (let i = 0; i < pathNames.length; i++) {
  let a = document.createElement('a');
  let span = document.createElement('span');
  span.textContent = `›`;
  a.textContent = pathNames[i + 1];
  a.href = currentLocationPath;
  if (a.textContent !== '') {
    titlebarPath.appendChild(a);
    titlebarPath.appendChild(span);
  }
}
