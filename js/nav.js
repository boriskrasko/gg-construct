let topNavItem = document.querySelectorAll('.parent-link');
let currentLang = document.querySelector('.current-lang span');
currentLang.textContent = localStorage.getItem('currentLang') || 'NL';
let lang = (window.location.href.indexOf('#') !== -1) ? window.location.href.slice(window.location.href.length - 2) : currentLang.textContent.toLowerCase();
const footNavColumn = document.querySelectorAll('.footnav-column ul');
const mobileDropdownColumn = document.querySelector('.mobile-dropdown-column');
const topNavDropdownColumnLink = document.querySelectorAll('.topnav-dropdown-column a');
const searchIntro = document.querySelector('.search_intro');
const partners = document.querySelector('.partners span');
const topbarContactLink = document.querySelector('.topbar-contact-link');
const searchLink = document.querySelectorAll('.search_link');
const searchBox = document.querySelector('.search-box');
const footNavColumnTitle = document.querySelectorAll('.footnav-column h4')


let getNav = () => {
  for (let i = 0; i < topNavItem.length; i++) {
    topNavItem[i].textContent = data[lang][0][i][0];
    topNavItem[i].href = `${data.nl[0][i][0].replace(/ /g, '-').toLowerCase()}.html`;

    const li_HVtWm = document.createElement('li');
    li_HVtWm.classList.add('footnav-link-item');
    footNavColumn[0].appendChild(li_HVtWm);
    const a_mLBgC = document.createElement('a');
    a_mLBgC.href = `${data.nl[0][i][0].replace(/ /g, '-').toLowerCase()}.html`;
    li_HVtWm.appendChild(a_mLBgC);
    a_mLBgC.textContent += data[lang][0][i][0];

    const li_UwhqJ = document.createElement('li');
    mobileDropdownColumn.appendChild(li_UwhqJ);
    const a_Zgcgk = document.createElement('a');
    li_UwhqJ.appendChild(a_Zgcgk);
    a_Zgcgk.href = `${data.nl[0][i][0].replace(/ /g, '-').toLowerCase()}.html`;
    a_Zgcgk.textContent += data[lang][0][i][0];
  }

  for (let i = 0; i < data[lang][0][2][1].length; i++) {
    const li_HVtW = document.createElement('li');
    li_HVtW.classList.add('footnav-link-item');
    footNavColumn[1].appendChild(li_HVtW);
    const a_mLBg = document.createElement('a');
    a_mLBg.href = `${data.nl[0][2][1][i][0].replace(/ /g, '-').toLowerCase()}.html`;
    li_HVtW.appendChild(a_mLBg);
    a_mLBg.textContent += data[lang][0][2][1][i][0];
  }

  for (let j = 0; j < data[lang][0][2][1].length; j++) {
    topNavDropdownColumnLink[j].textContent = data[lang][0][2][1][j][0];
    topNavDropdownColumnLink[j].href = `${data.nl[0][2][1][j][0].replace(/ /g, '-').toLowerCase()}.html`;
  }

  for (let i = 0; i < searchLink.length; i++) {
    searchLink[i].textContent = data[lang][6][i + 1];
  }

  searchIntro.textContent = data[lang][6][0];
  searchBox.setAttribute('placeholder', data[lang][6][1])
  partners.textContent = data[lang][1];
  topbarContactLink.textContent = data[lang][2];
  footNavColumnTitle[0].textContent = data[lang][8];
  footNavColumnTitle[1].textContent = data[lang][0][2][0];
  footNavColumnTitle[3].textContent = data[lang][9];

}

window.addEventListener('hashchange', function (e) {
  mobileDropdownColumn.innerHTML = ``;
  footNavColumn[0].innerHTML = ``;
  footNavColumn[1].innerHTML = ``;
  setTimeout(() => {
    lang = window.location.href.slice(window.location.href.length - 2);
    getNav();
  }, 0)
});

getNav();


// let currentLang = document.querySelector('.current-lang span');
//     currentLang.textContent = localStorage.getItem('currentLang') || 'EN';
// let lang = (window.location.href.indexOf('#') !== -1) ? window.location.href.slice(window.location.href.length - 2) : currentLang.textContent.toLowerCase();
// const optionLang = document.querySelectorAll('.options-lang a');
// const partners = document.querySelector('.partners span');
// const mobileDropdownColumn = document.querySelector('.mobile-dropdown-column')
// const topbarContactLink = document.querySelector('.topbar-contact-link');
// const footNavColumnTitle = document.querySelectorAll('.footnav-column h4');
// const footNavColumn = document.querySelectorAll('.footnav-column ul');
// const topNav = document.querySelector('.topnav');
// const topNavUl = document.createElement('ul');
// const searchIntro = document.querySelector('.search_intro');
// // const logo = document.querySelector('.header-logo-image img');

// function getContent() {

//   for (let i = 0; i < optionLang.length; i++) {
//     optionLang[i].href = optionLang[i].href;
//   }

//   partners.textContent = data[lang][1];
//   topbarContactLink.textContent = data[lang][2];
//   footNavColumnTitle[0].textContent = data[lang][0][0][0];
//   footNavColumnTitle[1].textContent = data[lang][0][1][0];
//   for (let i = 0; i < data[lang][0].length; i++) {
//     topNav.appendChild(topNavUl);
//     const li_CIdHm = document.createElement('li');
//     li_CIdHm.classList.add('topnav-item');
//     topNavUl.appendChild(li_CIdHm);
//     const a_ezoFd = document.createElement('a');
//     a_ezoFd.classList.add('parent-link');
//     a_ezoFd.href = `${data.en[0][i][0].replace(' ', '-').toLowerCase()}.html`;
//     li_CIdHm.appendChild(a_ezoFd);
//     a_ezoFd.textContent += data[lang][0][i][0];
//     const ul_QenSy = document.createElement('ul');
//     const li_UwhqJ = document.createElement('li');
//     mobileDropdownColumn.appendChild(li_UwhqJ);
//     const a_Zgcgk = document.createElement('a');
//     li_UwhqJ.appendChild(a_Zgcgk);
//     a_Zgcgk.href = `${data.en[0][i][0].replace(' ', '-').toLowerCase()}.html`;
//     a_Zgcgk.textContent += data[lang][0][i][0];

//     if (data[lang][0][i][1].length >= 1) {
//       ul_QenSy.classList.add('topnav-dropdown-column');
//       li_CIdHm.appendChild(ul_QenSy);
//     }
//   }
//   let ul_QenSy = document.querySelectorAll('.topnav-dropdown-column');
//   for (let j = 0; j < data[lang][0][0][1].length; j++) {
//       const li_VmhAh = document.createElement('li');
//       ul_QenSy[0].appendChild(li_VmhAh);
//       const a_uuiRj = document.createElement('a');
//       a_uuiRj.href = `${data[lang][0][0][1][j][0].replace(' ', '-').toLowerCase()}.html`;
//       li_VmhAh.appendChild(a_uuiRj);
//       a_uuiRj.textContent += data[lang][0][0][1][j][0];

//       const li_HVtWm = document.createElement('li');
//       li_HVtWm.classList.add('footnav-link-item');
//       footNavColumn[0].appendChild(li_HVtWm);
//       const a_mLBgC = document.createElement('a');
//       a_mLBgC.href = `${data[lang][0][0][1][j][0].replace(' ', '-').toLowerCase()}.html`;
//       li_HVtWm.appendChild(a_mLBgC);
//       a_mLBgC.textContent += data[lang][0][0][1][j][0];
//     }
//     for (let j = 0; j < data[lang][0][1][1].length; j++) {
//       const li_VmhAh = document.createElement('li');
//       ul_QenSy[1].appendChild(li_VmhAh);
//       const a_uuiRj = document.createElement('a');
//       a_uuiRj.href = `${data[lang][0][1][1][j][0].toLowerCase()}.html`;
//       li_VmhAh.appendChild(a_uuiRj);
//       a_uuiRj.textContent += data[lang][0][1][1][j][0];

//       const li_HVtWm = document.createElement('li');
//       li_HVtWm.classList.add('footnav-link-item');
//       footNavColumn[1].appendChild(li_HVtWm);
//       const a_mLBgC = document.createElement('a');
//       a_mLBgC.href = `${data.en[0][1][0].toLowerCase()}.html`;
//       li_HVtWm.appendChild(a_mLBgC);
//       a_mLBgC.textContent += data[lang][0][1][1][j][0];
//     }
//   searchIntro.textContent = data[lang][6];
// }

// window.addEventListener('hashchange', function(e) {
//   topNavUl.innerHTML = ``;
//   mobileDropdownColumn.innerHTML = ``;
//   footNavColumn[0].innerHTML = ``;
//   footNavColumn[1].innerHTML = ``;
//   setTimeout(() => {
//   lang = window.location.href.slice(window.location.href.length - 2);
//   getContent();
//   getGallery();
//   }, 0)
// });

// getContent();
