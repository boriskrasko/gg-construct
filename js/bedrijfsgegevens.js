let contact = {
  "nl" :
  [
    ["Bedrijfsgegevens"],
    ["Gegevens",
      ["Adres:"],
      ["Tel:"],
      ["E-mail:"],
      ["Bank:"],
    ],

    ["Contacteer ons",
      ["Contactformulier"],
      ["Bel ons"],
      ["Bedrijfsgegevens"],
    ]
  ],
  "en" :
  [
    ["Company details"],
     ["Data",
       ["Address:"],
       ["Phone:"],
       ["E-mail:"],
       ["Bank:"],
     ],
    
     ["Contact us",
       ["Contact Form"],
       ["Call us"],
       ["Company details"],
     ]
   ],
   "de" :
  [
      ["Unternehmens-Details"],
      ["Termine",
        ["Adresse:"],
        ["Tel:"],
        ["Email:"],
        ["Bank:"],
      ],
    
     ["Kontaktiere uns",
       ["Kontakt Formular"],
       ["Rufen Sie uns an"],
       ["Unternehmens-Details"],
     ]
   ],
   "fr" :
  [
    ["Détails de l'entreprise"],
      ["Rendez-vous",
        ["Adresse:"],
        ["Tél:"],
        ["E-mail:"],
        ["Banque:"],
      ],
    
     ["Contactez-nous",
       ["Formulaire de contact"],
       ["Appelez-nous"],
       ["Détails de l'entreprise"],
     ],
  ],
}

function getContactContent() {
  let titlebarTitle = document.querySelector('.titlebar-title h1'); 
  titlebarTitle.textContent = contact[lang][0][0];
  let paragraphTitle = document.querySelector('.paragraph-title');
  paragraphTitle.textContent = contact[lang][1][0];
  let dataList = document.querySelectorAll('.data');
  for (let i = 0; i < dataList.length; i++) {
    dataList[i].innerHTML = contact[lang][1][i + 1];
  }
  let sidenavTitle = document.querySelector('.sidenav span');
  sidenavTitle.textContent = contact[lang][2][0];
  let sidenavItem = document.querySelectorAll('.sidenav-file-list a');
  for (let i = 0; i < sidenavItem.length; i++) {
    sidenavItem[i].innerHTML = contact[lang][2][i + 1];
  }
}

window.addEventListener('hashchange', function(e) {
  setTimeout(() => {
   getContactContent();
  }, 12)
});

getContactContent();
