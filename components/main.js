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

let contactWidgetContainer = document.querySelector('.contact-widget-container');
let contactWidgetBtn = document.querySelector('.contact-widget-btn');

contactWidgetBtn.addEventListener('click', () => {
  contactWidgetContainer.classList.toggle('visibility');
  contactWidgetBtn.classList.toggle('x');
})

window.addEventListener('click', function (e) {
    if (!contactWidgetBtn.contains(e.target)) {
    contactWidgetContainer.classList.remove('visibility');
    contactWidgetBtn.classList.remove('x');
  }
})
