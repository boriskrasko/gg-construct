const companyName = `GGFloors & Construct`;

let currentLang = document.querySelector('.current-lang span');
currentLang.textContent = localStorage.getItem('currentLang') || 'EN';
let lang = (window.location.href.indexOf('#') !== -1) ? window.location.href[ window.location.href.length - 2] + window.location.href[ window.location.href.length - 1] : currentLang.textContent.toLowerCase();
let optionLang = document.querySelectorAll('.options-lang a');
let partners = document.querySelector('.partners span');
const topbarContactLink = document.querySelector('.topbar-contact-link');
const footNavColumnTitle = document.querySelectorAll('.footnav-column h4');
const ul_MHAmj = document.querySelectorAll('.footnav-column ul');

const topNav = document.querySelector('.topnav');
const ul_ztFNV = document.createElement('ul');
let infoBlockContent;
const mobileDropdownColumn = document.querySelector('.mobile-dropdown-column');

const typeInfoText = document.querySelector('.type-info-text');
const typeTitle = document.querySelector('.type-title');
typeTitle.textContent = companyName;
infoBlockContent = document.querySelector('.info-block-content p');

let cardTitle = document.querySelectorAll('.card-title');
let cardImage = document.querySelectorAll('.card-image img');
let startscreen = document.querySelector('.startscreen');

function getContent() {
  startscreen.style.background = `url('${data[lang][5]}')`;
  startscreen.style.backgroundRepeat = `no-repeat`;
  startscreen.style.backgroundSize = `cover`;


  partners.textContent = data[lang][1];
  topbarContactLink.textContent = data[lang][2];
  footNavColumnTitle[0].textContent = data[lang][0][0][0];
  typeInfoText.textContent = data[lang][3];
  if (pathNames[pathNames.length - 1].indexOf('index') !== -1) {
    infoBlockContent.innerHTML = data[lang][4];
  }

  for (let i = 0; i < cardTitle.length; i++) {
    cardTitle[i].textContent = data[lang][0][0][1][i + 2][0];
    cardImage[i].src = (data[lang][0][0][1][i][2]) ? data[lang][0][0][1][i + 2][2] : 'images/logo.svg';

  }

  for (let i = 0; i < data[lang][0].length; i++) {
    topNav.appendChild(ul_ztFNV);
    const li_CIdHm = document.createElement('li');
    li_CIdHm.classList.add('topnav-item');
    ul_ztFNV.appendChild(li_CIdHm);
    const a_ezoFd = document.createElement('a');
    a_ezoFd.classList.add('parent-link');
    a_ezoFd.href = `${data.en[0][i][0].toLowerCase()}.html`;
    li_CIdHm.appendChild(a_ezoFd);
    a_ezoFd.textContent += data[lang][0][i][0];
    const ul_QenSy = document.createElement('ul');
    const li_UwhqJ = document.createElement('li');
    mobileDropdownColumn.appendChild(li_UwhqJ);
    const a_Zgcgk = document.createElement('a');
    li_UwhqJ.appendChild(a_Zgcgk);
    a_Zgcgk.textContent += data[lang][0][i][0];


    if (data[lang][0][i][1].length >= 1) {
      ul_QenSy.classList.add('topnav-dropdown-column');
      li_CIdHm.appendChild(ul_QenSy);
    }

    for (let j = 0; j < data[lang][0][i][1].length; j++) {
      const li_VmhAh = document.createElement('li');
      ul_QenSy.appendChild(li_VmhAh);
      const a_uuiRj = document.createElement('a');
      a_uuiRj.href = `${data[lang][0][i][1][j][0].toLowerCase()}.html`;
      li_VmhAh.appendChild(a_uuiRj);
      a_uuiRj.textContent += data[lang][0][i][1][j][0];

      const li_HVtWm = document.createElement('li');
      li_HVtWm.classList.add('footnav-link-item');
      ul_MHAmj[0].appendChild(li_HVtWm);
      const a_mLBgC = document.createElement('a');
      // a_mLBgC.href = 'nohome.html';
      li_HVtWm.appendChild(a_mLBgC);
      a_mLBgC.textContent += data[lang][0][i][1][j][0];
    }
  }
}

for (let i = 0; i < optionLang.length; i++) {
  optionLang[i].addEventListener('click', () => {
    ul_ztFNV.innerHTML = ``;
    mobileDropdownColumn.innerHTML = ``;
    ul_MHAmj[0].innerHTML = ``;
    setTimeout(() => {
    lang = window.location.href[ window.location.href.length - 2] + window.location.href[ window.location.href.length - 1];
    getContent();
  }, 0)
  })
}

getContent();
