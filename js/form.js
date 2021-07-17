let contact = {
  "nl" :
  [
    ["Contact Formulier",
       ["Naam: *"],
       ["Tel:"],
       ["E-mail: *"],
       ["Bericht"],
       ["Je berichtje"],
       ["* = Invoer verplicht"],
       ["Verzenden"]
     ],

    ["Contacteer ons",
      ["Contactformulier"],
      ["Bel ons"],
      ["Bedrijfsgegevens"],
    ]
  ],
  "en" :
  [
    ["Contact Form",
        ["Name: *"],
        ["Phone:"],
        ["E-mail: *"],
        ["Message"],
        ["Your text"],
        ["* = Entry required"],
        ["Send"]
      ],
    
     ["Contact us",
       ["Contact Form"],
       ["Call us"],
       ["Company details"],
     ]
   ],
   "de" :
  [
      ["Kontakt Formular",
        ["Name: *"],
        ["Tel:"],
        ["Email: *"],
        ["Botschaft"],
        ["Ihre Nachricht"],
        ["* = Eingabe erforderlich"],
        ["Senden"]
      ],
    
     ["Kontaktiere uns",
       ["Kontakt Formular"],
       ["Rufen Sie uns an"],
       ["Unternehmens-Details"],
     ]
   ],
   "fr" :
  [
    ["Formulaire de contact",
        ["Nom: *"],
        ["Tél:"],
        ["E-mail: *"],
        ["Un message"],
        ["Votre message"],
        ["* = Saisie obligatoire"],
        ["Envoyer"],
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
  let dataList = document.querySelectorAll('.paragraph label span');
  for (let i = 0; i < dataList.length; i++) {
    dataList[i].textContent = contact[lang][0][i + 1];
  }
  let footnote = document.querySelector('.footnote');
  footnote.textContent = contact[lang][0][6];

  let btnSend = document.querySelector('.btn-send');
  btnSend.textContent = contact[lang][0][7];
  let sidenavTitle = document.querySelector('.sidenav span');
  sidenavTitle.textContent = contact[lang][1][0];
  let sidenavItem = document.querySelectorAll('.sidenav-file-list a');
  for (let i = 0; i < sidenavItem.length; i++) {
    sidenavItem[i].innerHTML = contact[lang][1][i + 1];
  }
}

window.addEventListener('hashchange', function(e) {
  setTimeout(() => {
   getContactContent();
  }, 12)
});

getContactContent();
