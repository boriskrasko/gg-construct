data = {
  "nl": [

    [
      "Projecten", [
        "Vloerbekleding",
        "Schilderwerk",
        "Gyproc werk",
        "Terras werk",
        "Hellend dakwerk",
        "Renovatie"
      ],
    ],
    [
      "Galerie", [

      ],
    ],
    [
      "Contactgegevens", [

      ],
    ],
  ],

  "en": [

    [
      "Projects", [
        "Floor covering",
        "Paintwork",
        "Gyproc work",
        "Terrace work",
        "Pitched roofing",
        "Renovation"
      ],
    ],
    [
      "Gallery", [

      ],
    ],
    [
      "Contact details", [

      ],
    ],
  ]
}

let currentLang = document.querySelector('.current-lang span');
let lang = currentLang.textContent;
let optionLang = document.querySelectorAll('.options-lang span');

const topNav = document.querySelector('.topnav');
const ul_ztFNV = document.createElement('ul');

function getContent() {

  for (let i = 0; i < data.nl.length; i++) {
    topNav.appendChild(ul_ztFNV);
    const li_CIdHm = document.createElement('li');
    li_CIdHm.classList.add('topnav-item');
    ul_ztFNV.appendChild(li_CIdHm);
    const a_ezoFd = document.createElement('a');
    a_ezoFd.classList.add('parent-link');
    // a_ezoFd.href = `${data.nl[i][0].toLowerCase()}.html`;
    li_CIdHm.appendChild(a_ezoFd);
    a_ezoFd.textContent += (lang === 'NL') ? data.nl[i][0] : data.en[i][0];
    const ul_QenSy = document.createElement('ul');
    if (data.nl[i][1].length >= 1) {
      ul_QenSy.classList.add('topnav-dropdown-column');
      li_CIdHm.appendChild(ul_QenSy);
    }

    for (let j = 0; j < data.nl[i][1].length; j++) {
      const li_VmhAh = document.createElement('li');
      ul_QenSy.appendChild(li_VmhAh);
      const a_uuiRj = document.createElement('a');
      a_uuiRj.href = `${data.nl[i][1][j].toLowerCase()}.html`;
      li_VmhAh.appendChild(a_uuiRj);
      a_uuiRj.textContent += data.nl[i][1][j];
    }
  }
}

for (let i = 0; i < optionLang.length; i++) {
  optionLang[i].addEventListener('click', () => {
    ul_ztFNV.innerHTML = ``;
    lang = optionLang[i].textContent;
    console.log(lang);
    getContent();
  })
}

getContent();
