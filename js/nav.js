let topNavItem = document.querySelectorAll('.parent-link');
let currentLang = document.querySelector('.current-lang span');
currentLang.textContent = localStorage.getItem('currentLang') || 'NL';
let lang = currentLang.textContent.toLowerCase();
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

  for (let i = 0; i < data[lang][0][2][1].length - 1; i++) {
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

  topNavDropdownColumnLink[topNavDropdownColumnLink.length - 1].href = 'activiteiten.html';

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
    lang = currentLang.textContent.toLowerCase();
    getNav();
  }, 0)
});

getNav();

function getSearchFilter() {
  let inputSearch, filterSearch, ulSearch, liSearch, aSearch, i;
  inputSearch = document.getElementById("inputSearch");
  filterSearch = inputSearch.value.toUpperCase();
  ulSearch = document.getElementById("searchMenu");
  liSearch = ulSearch.getElementsByTagName("li");

  for (i = 0; i < liSearch.length; i++) {
    aSearch = liSearch[i].getElementsByTagName("a")[0];
    if (aSearch.innerHTML.toUpperCase().indexOf(filterSearch) > -1) {
      liSearch[i].style.display = "block";
    } else {
      liSearch[i].style.display = "none";
    }
  }
}
