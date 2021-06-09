const companyName = `GGFloors & Construct`;
let infoBlockContent = document.querySelector('.info-block-content p');
const typeInfoText = document.querySelector('.type-info-text');
const typeTitle = document.querySelector('.type-title');
typeTitle.textContent = companyName;
let cardTitle = document.querySelectorAll('.card-title');
let cardImage = document.querySelectorAll('.card-image img');
let startscreen = document.querySelector('.startscreen');
let serviseCardLink = document.querySelectorAll('.servise-cards a');
let articleHeadingTitle = document.querySelectorAll('.article-heading h2');


function getContent() {
  startscreen.style.background = `url('${data[lang][5]}')`;
  startscreen.style.backgroundRepeat = `no-repeat`;
  startscreen.style.backgroundSize = `cover`;
  startscreen.style.backgroundPosition = `center center`;
  typeInfoText.textContent = data[lang][3];
  infoBlockContent.innerHTML = data[lang][4];
  for (let i = 0; i < cardTitle.length; i++) {
    cardTitle[i].textContent = data[lang][0][2][1][i][0];
    cardImage[i].src = `images/${data.nl[0][2][1][i][0].replace(/ /g, '-').toLowerCase()}.jpg` || 'images/logo.svg';
    cardImage[i].setAttribute('alt', data[lang][0][2][1][i][0]);
    serviseCardLink[i].href = `${data.nl[0][2][1][i][0].replace(/ /g, '-').toLowerCase()}.html`;
  }
  articleHeadingTitle[0].textContent = data[lang][0][2][0];
}

window.addEventListener('hashchange', () => {
  setTimeout(() => {
  getContent();
  }, 0)
});

getContent();
