let pathNames = [];

if (window.location.href !== window.location.hostname) {
  let currentLocationPath = window.location.pathname;
  let titlebarPath = document.querySelector('.titlebar-path')

  pathNames = currentLocationPath.split('/');

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
}

let variant = pathNames[pathNames.length - 1].replace('.html', '');

let seeAlso = document.querySelectorAll('.sidenav-file-list a');
let seeAlsoTitle = document.querySelector('.sidenav-title');
let galleryTitle = document.querySelectorAll('.gallery-title');
let descriptionTitle = document.querySelector('.description');
let offer = document.querySelector('.offer a');
let modalTitle = document.querySelector('.modal-title');

const getVariantContent = () => {
  let titlebarTitle = document.querySelector('.titlebar-title h1'); 
  titlebarTitle.innerHTML = variants[variant][1][lang][0];
  if (modalTitle) modalTitle.textContent = variants[variant][1][lang][0];
  let infoBlockImage = document.querySelector('.info-block img');
  infoBlockImage.src = variants[variant][0];
  let infoBlockTitle = document.querySelector('.info-block-content h2');
  infoBlockTitle.textContent = variants[variant][1][lang][0]
  let infoBlockContent = document.querySelectorAll('.info-block-content p');
  infoBlockContent[0].innerHTML= variants[variant][1][lang][1];
  if (infoBlockContent[1]) infoBlockContent[1].innerHTML = data[lang][4][1];
  let infoBlockSpan = document.querySelector('.info-block-content span');
  if (infoBlockSpan) infoBlockSpan.textContent = variants[variant][1][lang][2];


  for (let i = 0; i < variants[variant][2].length; i++) {
    const div_KbNDA = document.createElement('div');
    div_KbNDA.classList.add('gallery_inner');
    gallery.appendChild(div_KbNDA);
    const img_IZcrL = new Image();
    img_IZcrL.classList.add('gallery_image');
    img_IZcrL.src = `${variants[variant][2][i]}`;
    console.log(variants[variant][2]);
    img_IZcrL.setAttribute(`alt`, `Test text`);
    div_KbNDA.appendChild(img_IZcrL);
  }
  if (seeAlsoTitle) seeAlsoTitle.textContent = data[lang][10];
  if (descriptionTitle) descriptionTitle.textContent = data[lang][11];
  for (let i = 0; i < galleryTitle.length; i++) {
    galleryTitle[i].textContent = data[lang][12];
  }
  offer.textContent = data[lang][13];
  let x = Math.floor(Math.random() * 8);
  for (let i = 0; i < seeAlso.length - 1; i++) {
    seeAlso[i].textContent = data[lang][0][2][1][i + x][0];
    seeAlso[i].href = `${data.nl[0][2][1][i + x][0].replace(/ /g, '-').toLowerCase()}.html`;
  }

  let variantOfFloor = document.querySelectorAll('.list-of-services a');
  for (let i = 0; i < variantOfFloor.length; i++) {
    variantOfFloor[i].textContent = variants[variant][1][lang][3][i][0];
    variantOfFloor[i].href = `${variants[variant][1].nl[3][i][0].replace(/ /g, '-').toLowerCase()}.html`;
  }
}

window.addEventListener('hashchange', function(e) {
  setTimeout(() => {
    getVariantContent();
  }, 10)
});

getVariantContent();
