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
