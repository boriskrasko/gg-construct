let contact = {
  "nl" :
  [
    ["Contact"],
    ["Contactgegevens"],
    ["Contactcenter",
      ["Met al uw vragen kunt u bij ons terecht."],
      ["Maandag t / m vrijdag: 7.00 uur tot 21.00 uur"],
      ["Ook via het <a href=\"form.html\">contactformulier</a> staan ​​wij overal voor u klaar."],
    ],

    ["Contacteer ons",
      ["Contactformulier"],
      ["Bel ons"],
      ["Bedrijfsgegevens"],
    ]
  ],
  "en" :
  [
    ["Contact"],
    ["Contact details"],
    ["Contact Center",
       ["You can contact us with all your questions."],
       ["Monday to Friday: 7:00 AM to 9:00 PM"],
       ["We are also available for you everywhere via <a href=\"form.html\">the contact form</a>"],
     ],
    
     ["Contact us",
       ["Contact Form"],
       ["Call us"],
       ["Company details"],
     ]
   ],
   "de" :
  [
      ["Kontakt"],
     ["Kontaktdetails"],
     ["Kontaktcenter",
       ["Sie können uns mit all Ihren Fragen kontaktieren."],
       ["Montag bis Freitag: 7:00 bis 21:00 Uhr"],
       ["Wir sind auch über das  <a href=\"form.html\">Kontaktformular</a> überall für Sie erreichbar."],
     ],
    
     ["Kontaktiere uns",
       ["Kontakt Formular"],
       ["Rufen Sie uns an"],
       ["Unternehmens-Details"],
     ]
   ],
   "fr" :
  [
    ["Contacter"],
     ["Détails du contact"],
     ["Centre d'appels",
       ["Vous pouvez nous contacter pour toutes vos questions."],
       ["Du lundi au vendredi : de 7 h 00 à 21 h 00"],
       ["Nous sommes également disponibles pour vous partout via  <a href=\"form.html\">le formulaire de contact</a>."],
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
  let title = document.querySelector('.title');
  title.textContent = contact[lang][1][0];
  let paragraphTitle = document.querySelector('.paragraph span');
  paragraphTitle.textContent = contact[lang][2][0];
  let dataList = document.querySelectorAll('.data');
  for (let i = 0; i < dataList.length; i++) {
    dataList[i].innerHTML = contact[lang][2][i + 1];
  }
  let sidenavTitle = document.querySelector('.sidenav span');
  sidenavTitle.textContent = contact[lang][3][0];
  let sidenavItem = document.querySelectorAll('.sidenav-file-list a');
  for (let i = 0; i < sidenavItem.length; i++) {
    sidenavItem[i].innerHTML = contact[lang][3][i + 1];
  }
}

window.addEventListener('hashchange', function(e) {
  setTimeout(() => {
   getContactContent();
  }, 12)
});

getContactContent();
