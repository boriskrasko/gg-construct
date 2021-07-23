const companyName = `GG Floors & Construct`;
let infoBlockContent = document.querySelectorAll('.info-block-content p');
let infoBlockContentTitle = document.querySelector('.info-block-content h2');
const typeInfoText = document.querySelector('.type-info-text');
const typeTitle = document.querySelector('.type-title');
typeTitle.textContent = companyName;
let cardTitle = document.querySelectorAll('.card-title');
let cardImage = document.querySelectorAll('.card-image img');
let startscreen = document.querySelector('.startscreen');
let serviseCardLink = document.querySelectorAll('.servise-cards a');
let articleHeadingTitle = document.querySelectorAll('.article-heading h2');
let activitiesListItem = document.querySelectorAll('.activities-list a');
let more = document.querySelector('.link-to-floors a');


function getContent() {
  startscreen.style.background = `url('${data[lang][5]}')`;
  startscreen.style.backgroundRepeat = `no-repeat`;
  startscreen.style.backgroundSize = `cover`;
  startscreen.style.backgroundPosition = `center center`;
  typeInfoText.textContent = data[lang][3];
  infoBlockContent[0].innerHTML = data[lang][4][0];
  infoBlockContent[1].innerHTML = data[lang][4][1];
  for (let i = 0; i < cardTitle.length; i++) {
    cardTitle[i].textContent = data[lang][0][2][1][i + 1][0];
    cardImage[i].src = `images/${data.nl[0][2][1][i + 1][0].replace(/ /g, '-').toLowerCase()}.jpg` || 'images/logo.svg';
    cardImage[i].setAttribute('alt', data[lang][0][2][1][i + 1][0]);
    serviseCardLink[i].href = `${data.nl[0][2][1][i + 1][0].replace(/ /g, '-').toLowerCase()}.html`;
  }
  for (let i = 0; i < activitiesListItem.length - 1; i++) {
    activitiesListItem[i].textContent = data[lang][0][2][1][i][0];
    activitiesListItem[i].href = `${data.nl[0][2][1][i][0].replace(/ /g, '-').toLowerCase()}.html`;
  }
  activitiesListItem[0].textContent += `(${data[lang][0][2][1][0][1][0][0].toString().replace(/,/g, ', ').toLowerCase()}, ... )`;
  articleHeadingTitle[0].textContent = data[lang][0][2][0];
  infoBlockContentTitle.textContent = data[lang][0][2][1][0][0];
  infoBlockContent[2].innerHTML =  data[lang][0][2][1][0][1];
  more.textContent = data[lang][7];

}

window.addEventListener('hashchange', () => {
  setTimeout(() => {
  getContent();
  }, 0)
});

getContent();
