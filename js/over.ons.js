let variants = {
  "over-ons" : [
    ["images/scaffolding-workers.jpg"], { 
    "nl" :
    [
      ["Over ons"],
      ["<strong>GG Floors&Construct</strong> bouwt aan een duurzame partnerschip.<br>Al meer dan <strong>15 jaar</strong> ervaring in vloerbekledingen, maar ook daken hebben voor ons geen geheimen meer.<br>Onze specialiteit blijft nog steeds allerhande vloeren, harde als zachte. Van grote renovaties tot kleinere herstellingen alsook volledige nieuwbouw woningen.<br> Door een nauwe samenwerking met de opdrachtgevers, medewerkers en partners gaan we voor de hoogst haalbare topkwaliteit. Telkens weer in een open en respectvolle sfeer.<br><strong>GG Flors&Construct</strong> brengt uw bouwproject tot een goed einde. Zo maken we het leven van de klant makkelijk doordat wij het totaalconcept kunnen aanbieden.<br>Ons grootste kapitaal, zijn onze vakmannen, hun veiligheid en welzijn is voor GG Floors&Construct topprioriteit, want alleen zo kan je ook topkwaliteit afleveren op de werf. Heeft u bouw of verbouwplannen:"],
      ["We doen het samen met u. Volg ons ook op de social media voor de verschillende realisaties:"],
      ],
    "en" :
    [
      ["Who we are"],
      ["<strong>GG Floors&Construct</strong> is building a sustainable partnership.<br>More than <strong>15 years</strong> of experience in floor coverings, but roofs no longer hold any secrets for us.<br>Our specialty is still all kinds of floors, hard and soft.<br>From major renovations to smaller repairs as well as completely new homes.<br>Through close collaboration with clients, employees and partners, we aim for the highest achievable top quality. Again and again in an open and respectful atmosphere.<br><strong>GG Flors&Construct</strong> brings your construction project to a successful conclusion.<br>In this way we make the customer's life easy because we can offer the total concept.<br>Our greatest capital is our craftsmen, their safety and well-being is top priority for GG Floors&Construct, because this is the only way you can deliver top quality on site.<br>Do you have construction or renovation plans:"],
      ["We do it together with you. Follow us on social media for the different realizations:"],
    ],
     "de" :
    [
      ["Über uns"],
      ["<strong>GG Floors&Construct</strong> baut eine nachhaltige Partnerschaft auf. Über <strong>15 Jahre</strong> Erfahrung mit Bodenbelägen, aber auch Dächern bergen für uns keine Geheimnisse mehr.<br>Unsere Spezialität sind nach wie vor alle Arten von Böden, hart und weich.<br>Von großen Renovierungen über kleinere Reparaturen bis hin zu komplett neuen Häusern.<br>Durch eine enge Zusammenarbeit mit Kunden, Mitarbeitern und Partnern streben wir die höchstmögliche Spitzenqualität an. Immer wieder in einer offenen und respektvollen Atmosphäre.<br><strong>GG Flors&Construct</strong> bringt Ihr Bauvorhaben zu einem erfolgreichen Abschluss.<br>Auf diese Weise machen wir dem Kunden das Leben leicht, weil wir das Gesamtkonzept anbieten können.<br>Unser größtes Kapital sind unsere Handwerker, deren Sicherheit und Wohlbefinden für GG Floors&Construct oberste Priorität haben, denn nur so können Sie vor Ort Top-Qualität liefern.<br>Sie haben Bau- oder Renovierungspläne:"],
      ["Wir machen es gemeinsam mit Ihnen. Folgen Sie uns in den sozialen Medien für die verschiedenen Erkenntnisse:"],
    ],
     "fr" :
    [
      ["À propos de nous"],
      ["<strong>GG Floors&Construct</strong> construit un partenariat durable. Plus de <strong>15 ans</strong> d'expérience dans les revêtements de sol, mais aussi les toitures n'ont plus de secrets pour nous.<br>Notre spécialité reste toutes sortes de sols, durs et mous.<br>Des rénovations majeures aux petites réparations en passant par les maisons entièrement neuves.<br>Grâce à une étroite collaboration avec les clients, les employés et les partenaires, nous visons la meilleure qualité possible. Encore et encore dans une atmosphère ouverte et respectueuse.<br><strong>GG Flors&Construct</strong> mène à bien votre projet de construction.<br>De cette façon, nous facilitons la vie du client car nous pouvons offrir le concept total.<br>Notre plus grand capital est nos artisans, leur sécurité et leur bien-être sont la priorité absolue pour GG Floors&Construct, car ce n'est qu'alors que vous pouvez livrer une qualité supérieure sur place.<br>Vous avez des projets de construction ou de rénovation:"],
      ["Nous le faisons avec vous. Suivez-nous sur les réseaux sociaux pour les différentes réalisations :"],
    ],
  },
  [
    ["images/gallery/over-ons/img-sm-1.jpg"],
    ["images/gallery/over-ons/img-sm-2.jpg"],
    ["images/gallery/over-ons/img-sm-3.jpg"],
    ["images/gallery/over-ons/img-sm-4.jpg"],
    ["images/gallery/over-ons/img-sm-5.jpg"],
    ["images/gallery/over-ons/img-sm-6.jpg"],
  ]
  ],
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
