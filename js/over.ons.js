let variants = {
  "over-ons": [
    [
      "images/scaffolding-workers.jpg"
    ],
    {
      "nl": [
        [
          "Over ons"
        ],
        [
          "<strong>GG Floors&Construct<\/strong> bouwt aan een duurzame partnerschip.<br>Al meer dan <strong>15 jaar<\/strong> ervaring in vloerbekledingen, maar ook daken hebben voor ons geen geheimen meer.<br>Onze specialiteit blijft nog steeds allerhande vloeren, harde als zachte. Van grote renovaties tot kleinere herstellingen alsook volledige nieuwbouw woningen.<br> Door een nauwe samenwerking met de opdrachtgevers, medewerkers en partners gaan we voor de hoogst haalbare topkwaliteit. Telkens weer in een open en respectvolle sfeer.<br><strong>GG Flors&Construct<\/strong> brengt uw bouwproject tot een goed einde. Zo maken we het leven van de klant makkelijk doordat wij het totaalconcept kunnen aanbieden.<br>Ons grootste kapitaal, zijn onze vakmannen, hun veiligheid en welzijn is voor GG Floors&Construct topprioriteit, want alleen zo kan je ook topkwaliteit afleveren op de werf. Heeft u bouw of verbouwplannen:"
        ],
        [
          "We doen het samen met u. Volg ons ook op de social media voor de verschillende realisaties:"
        ]
      ],
      "en": [
        [
          "Who we are"
        ],
        [
          "<strong>GG Floors&Construct<\/strong> is building a sustainable partnership.<br>More than <strong>15 years<\/strong> of experience in floor coverings, but roofs no longer hold any secrets for us.<br>Our specialty is still all kinds of floors, hard and soft.<br>From major renovations to smaller repairs as well as completely new homes.<br>Through close collaboration with clients, employees and partners, we aim for the highest achievable top quality. Again and again in an open and respectful atmosphere.<br><strong>GG Flors&Construct<\/strong> brings your construction project to a successful conclusion.<br>In this way we make the customer's life easy because we can offer the total concept.<br>Our greatest capital is our craftsmen, their safety and well-being is top priority for GG Floors&Construct, because this is the only way you can deliver top quality on site.<br>Do you have construction or renovation plans:"
        ],
        [
          "We do it together with you. Follow us on social media for the different realizations:"
        ]
      ],
      "de": [
        [
          "??ber uns"
        ],
        [
          "<strong>GG Floors&Construct<\/strong> baut eine nachhaltige Partnerschaft auf. ??ber <strong>15 Jahre<\/strong> Erfahrung mit Bodenbel??gen, aber auch D??chern bergen f??r uns keine Geheimnisse mehr.<br>Unsere Spezialit??t sind nach wie vor alle Arten von B??den, hart und weich.<br>Von gro??en Renovierungen ??ber kleinere Reparaturen bis hin zu komplett neuen H??usern.<br>Durch eine enge Zusammenarbeit mit Kunden, Mitarbeitern und Partnern streben wir die h??chstm??gliche Spitzenqualit??t an. Immer wieder in einer offenen und respektvollen Atmosph??re.<br><strong>GG Flors&Construct<\/strong> bringt Ihr Bauvorhaben zu einem erfolgreichen Abschluss.<br>Auf diese Weise machen wir dem Kunden das Leben leicht, weil wir das Gesamtkonzept anbieten k??nnen.<br>Unser gr????tes Kapital sind unsere Handwerker, deren Sicherheit und Wohlbefinden f??r GG Floors&Construct oberste Priorit??t haben, denn nur so k??nnen Sie vor Ort Top-Qualit??t liefern.<br>Sie haben Bau- oder Renovierungspl??ne:"
        ],
        [
          "Wir machen es gemeinsam mit Ihnen. Folgen Sie uns in den sozialen Medien f??r die verschiedenen Erkenntnisse:"
        ]
      ],
      "fr": [
        [
          "?? propos de nous"
        ],
        [
          "<strong>GG Floors&Construct<\/strong> construit un partenariat durable. Plus de <strong>15 ans<\/strong> d'exp??rience dans les rev??tements de sol, mais aussi les toitures n'ont plus de secrets pour nous.<br>Notre sp??cialit?? reste toutes sortes de sols, durs et mous.<br>Des r??novations majeures aux petites r??parations en passant par les maisons enti??rement neuves.<br>Gr??ce ?? une ??troite collaboration avec les clients, les employ??s et les partenaires, nous visons la meilleure qualit?? possible. Encore et encore dans une atmosph??re ouverte et respectueuse.<br><strong>GG Flors&Construct<\/strong> m??ne ?? bien votre projet de construction.<br>De cette fa??on, nous facilitons la vie du client car nous pouvons offrir le concept total.<br>Notre plus grand capital est nos artisans, leur s??curit?? et leur bien-??tre sont la priorit?? absolue pour GG Floors&Construct, car ce n'est qu'alors que vous pouvez livrer une qualit?? sup??rieure sur place.<br>Vous avez des projets de construction ou de r??novation:"
        ],
        [
          "Nous le faisons avec vous. Suivez-nous sur les r??seaux sociaux pour les diff??rentes r??alisations :"
        ]
      ]
    },
    [
      [
        "images/gallery/over-ons/img-sm-1.jpg"
      ],
      [
        "images/gallery/over-ons/img-sm-2.jpg"
      ],
      [
        "images/gallery/over-ons/img-sm-3.jpg"
      ],
      [
        "images/gallery/over-ons/img-sm-4.jpg"
      ],
      [
        "images/gallery/over-ons/img-sm-5.jpg"
      ],
      [
        "images/gallery/over-ons/img-sm-6.jpg"
      ],
      [
        "images/gallery/over-ons/img-sm-7.jpg"
      ],
      [
        "images/gallery/over-ons/img-sm-8.jpg"
      ],
      [
        "images/gallery/over-ons/img-sm-9.jpg"
      ],
      [
        "images/gallery/over-ons/img-sm-10.jpg"
      ],
      [
        "images/gallery/over-ons/img-sm-11.jpg"
      ],
      [
        "images/gallery/over-ons/img-sm-12.jpg"
      ]
    ]
  ]
}

let activitiesListItem = document.querySelectorAll('.activities-list a');

function getActivitiesList() {
  for (let i = 0; i < activitiesListItem.length - 1; i++) {
    activitiesListItem[i].textContent = data[lang][0][2][1][i][0];
    activitiesListItem[i].href = `${data.nl[0][2][1][i][0].replace(/ /g, '-').toLowerCase()}.html`;
  }
}

window.addEventListener('hashchange', () => {
  setTimeout(() => {
    getActivitiesList()
  }, 10)
});

getActivitiesList();
