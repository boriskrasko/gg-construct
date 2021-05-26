const companyName = `GGFloors & Construct`;
let infoBlockContent = document.querySelector('.info-block-content p');
const typeInfoText = document.querySelector('.type-info-text');
const typeTitle = document.querySelector('.type-title');
typeTitle.textContent = companyName;
let cardTitle = document.querySelectorAll('.card-title');
let cardImage = document.querySelectorAll('.card-image img');
let startscreen = document.querySelector('.startscreen');

function getConten() {
  startscreen.style.background = `url('${data[lang][5]}')`;
  startscreen.style.backgroundRepeat = `no-repeat`;
  startscreen.style.backgroundSize = `cover`;
  typeInfoText.textContent = data[lang][3];
  infoBlockContent.innerHTML = data[lang][4];
  for (let i = 0; i < cardTitle.length; i++) {
    cardTitle[i].textContent = data[lang][0][1][1][i + 1][0];
    cardImage[i].src = (data[lang][0][1][1][i][2]) ? data[lang][0][1][1][i + 1][2] : 'images/logo.svg';
  }
}

window.addEventListener('hashchange', () => {
  setTimeout(() => {
  getConten();
  }, 0)
});

getConten();
