const companyName = `GGFloors & Construct`;

let currentLang = document.querySelector('.current-lang span');
currentLang.textContent = localStorage.getItem('currentLang') || 'EN';
let lang = currentLang.textContent.toLowerCase();
let optionLang = document.querySelectorAll('.options-lang span');
let partners = document.querySelector('.partners span');
const topbarContactLink = document.querySelector('.topbar-contact-link');
const footNavColumnTitle = document.querySelectorAll('.footnav-column h4');
const ul_MHAmj = document.querySelectorAll('.footnav-column ul');

const topNav = document.querySelector('.topnav');
const ul_ztFNV = document.createElement('ul');
let infoBlockContent;
const mobileDropdownColumn = document.querySelector('.mobile-dropdown-column');
if (pathNames[pathNames.length - 1].indexOf('index') !== -1) {
  const typeInfoText = document.querySelector('.type-info-text');
  const typeTitle = document.querySelector('.type-title');
  typeTitle.textContent = companyName;
  infoBlockContent = document.querySelector('.info-block-content p');
}
let teasers = document.querySelector('.teasers');
let titlebarTitle = document.querySelector('.titlebar-title h1');


function getContent() {
  partners.textContent = data[lang][1];
  topbarContactLink.textContent = data[lang][2];
  footNavColumnTitle[0].textContent = data[lang][0][0][0];
  titlebarTitle.textContent = data[lang][0][0][0];
  // typeInfoText.textContent = data[lang][3];
  if (pathNames[pathNames.length - 1].indexOf('index') !== -1) {
    infoBlockContent.innerHTML = data[lang][4];
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

      if (pathNames[pathNames.length - 1].indexOf('index') === -1) {
        const div_GmBfj = document.createElement('div');
        div_GmBfj.classList.add('teaser-small');
        teasers.appendChild(div_GmBfj);
        const div_sUwXk = document.createElement('div');
        div_sUwXk.classList.add('teaser-small_image');
        div_GmBfj.appendChild(div_sUwXk);
        const img_MDfUj = new Image();
        img_MDfUj.src = (data[lang][0][i][1][j][2]) ? data[lang][0][i][1][j][2] : 'images/logo.svg';
        img_MDfUj.setAttribute(`alt`, data[lang][0][i][1][j][0]);
        div_sUwXk.appendChild(img_MDfUj);
        const div_HFbUm = document.createElement('div');
        div_HFbUm.classList.add('teaser-small_content');
        div_GmBfj.appendChild(div_HFbUm);
        const div_OFpOG = document.createElement('div');
        div_OFpOG.classList.add('teaser-small_title');
        div_HFbUm.appendChild(div_OFpOG);
        const h2_qunjJ = document.createElement('h2');
        h2_qunjJ.classList.add('title');
        div_OFpOG.appendChild(h2_qunjJ);
        const a_FZoyA = document.createElement('a');
        a_FZoyA.href = 'vloerbekleding.html';
        h2_qunjJ.appendChild(a_FZoyA);
        a_FZoyA.textContent += data[lang][0][i][1][j][0];
        const p_Wzyfz = document.createElement('p');
        div_HFbUm.appendChild(p_Wzyfz);
        p_Wzyfz.textContent = (data[lang][0][i][1][j][1] != ``) ? data[lang][0][i][1][j][1] : `...`;
        const p_Kdnxl = document.createElement('p');
        p_Kdnxl.classList.add('m-teaser-small_readmore');
        div_HFbUm.appendChild(p_Kdnxl);
        const a_piRos = document.createElement('a');
        a_piRos.classList.add('btn-default');
        a_piRos.href = 'vloerbekleding.html';
        p_Kdnxl.appendChild(a_piRos);
        a_piRos.textContent += `Lees meer`;

        img_MDfUj.addEventListener('click', () => {
          teasers.innerHTML = ``;
          titlebarTitle.textContent = data[lang][0][i][1][j][0];
          for (let z = 0; z < data[lang][0][i][1][j][1].length; z++) {
            const div_GmBfj = document.createElement('div');
            div_GmBfj.classList.add('teaser-small');
            teasers.appendChild(div_GmBfj);
            const div_sUwXk = document.createElement('div');
            div_sUwXk.classList.add('teaser-small_image');
            div_GmBfj.appendChild(div_sUwXk);
            const img_MDfUj = new Image();
            img_MDfUj.src = (data[lang][0][i][1][j][1][z][2]) ? data[lang][0][i][1][j][1][z][2] : 'images/logo.svg';
            img_MDfUj.setAttribute(`alt`, data[lang][0][i][1][j][0]);
            div_sUwXk.appendChild(img_MDfUj);
            const div_HFbUm = document.createElement('div');
            div_HFbUm.classList.add('teaser-small_content');
            div_GmBfj.appendChild(div_HFbUm);
            const div_OFpOG = document.createElement('div');
            div_OFpOG.classList.add('teaser-small_title');
            div_HFbUm.appendChild(div_OFpOG);
            const h2_qunjJ = document.createElement('h2');
            h2_qunjJ.classList.add('title');
            div_OFpOG.appendChild(h2_qunjJ);
            const a_FZoyA = document.createElement('a');
            a_FZoyA.href = 'vloerbekleding.html';
            h2_qunjJ.appendChild(a_FZoyA);
            a_FZoyA.textContent += data[lang][0][i][1][j][1][z][0];
            const p_Wzyfz = document.createElement('p');
            div_HFbUm.appendChild(p_Wzyfz);
            p_Wzyfz.textContent = (data[lang][0][i][1][j][1][z][1] != ``) ? data[lang][0][i][1][j][1][z][1] : `...`;
            const p_Kdnxl = document.createElement('p');
            p_Kdnxl.classList.add('m-teaser-small_readmore');
            div_HFbUm.appendChild(p_Kdnxl);
            const a_piRos = document.createElement('a');
            a_piRos.classList.add('btn-default');
            a_piRos.href = 'vloerbekleding.html';
            p_Kdnxl.appendChild(a_piRos);
            a_piRos.textContent += `Lees meer`;
          }
        })
      }
    }
  }
}

for (let i = 0; i < optionLang.length; i++) {
  optionLang[i].addEventListener('click', () => {
    ul_ztFNV.innerHTML = ``;
    mobileDropdownColumn.innerHTML = ``;
    ul_MHAmj[0].innerHTML = ``;
    teasers.innerHTML = ``;
    lang = optionLang[i].textContent.toLowerCase();
    getContent();
  })
}

getContent();
