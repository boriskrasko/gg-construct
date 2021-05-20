data = {
  "en": [

    [
      [
        "Projects", [
          ["Floor covering", ["Vinyl, tapijt, linoleum, PVC, LVT, rubber, egaliseren, ..."], ["images/vloerbekleding.jpg"]],
          ["Paintwork"],
          ["Gyproc work"],
          ["Terrace work", [], ["images/terrace.jpg"]],
          ["Pitched roofing"],
          ["Renovation"],
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
    ],
    ["Our partners"],
    ["Contact"],
    ["Let's build with GG"],
    [`<strong>GGFloors & Construct</strong> is building a sustainable partnership.
More than 15 years of experience in floor coverings, but roofs no longer hold any secrets for us.
From major renovations to smaller repairs as well as completely new homes.<br>
Through close cooperation with clients, employees and partners, we aim for the highest achievable top quality. Again and again in an open and respectful atmosphere.
GGFloors & Construct brings your construction project to a successful conclusion.<br>
In this way we make life easy for the customer because we can offer the total concept.<br>
Our greatest asset is our craftsmen, their safety and well-being is a top priority for GG construct, because this is the only way to deliver top quality to the construction site.
Do you have construction or renovation plans:`],

  ],
  "nl": [

    [
      [
        "Projecten", [
          ["Vloerbekleding"],
          ["Schilderwerk"],
          ["Gyproc werk"],
          ["Terras werk"],
          ["Hellend dakwerk"],
          ["Renovatie"]
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
    ["Onze partners"],
    ["Contact"],
    ["Laten we bouwen met GG"],
    [`<strong>GGFloors & Construct</strong> bouwt aan een duurzame partnership.<br>Al meer dan <strong>15 jaar</strong> ervaring in vloerbekledingen, maar ook daken hebben voor ons geen geheimen meer.<br> 
          Van grote renovaties tot kleinere herstellingen alsook volledige nieuwbouw woningen.<br>
          Door een nauwe samenwerking met de opdrachtgevers, medewerkers en partners gaan we voor de hoogst haalbare topkwaliteit. Telkens weer in een open en respectvolle sfeer.<br>
          <strong>GGFloors & Construct</strong> brengt uw bouwproject tot een goed einde.<br>
          Zo maken we het leven van de klant makkelijk doordat wij het totaalconcept kunnen aanbieden.<br>
          Ons grootste kapitaal, zijn onze vakmannen, hun veiligheid en welzijn is voor GG construct topprioriteit, want alleen zo kan je ook topkwaliteit afleveren op de werf.<br>
          Heeft u bouw of verbouwplannen:`]
  ],
  "de": [

    [
      [
        "Projekte", [
          ["Bodenbelag"],
          ["Lackierung"],
          ["Gyproc Arbeit"],
          ["Terrassenarbeit"],
          ["Pitched roofing"],
          ["Schrägdach"]
        ],
      ],
      [
        "Galerie", [

        ],
      ],
      [
        "Kontaktdetails", [

        ],
      ],
    ],
    ["Unsere Partner"],
    ["Kontakt"],
    ["Lass uns mit GG bauen"],
    [`GGFloors & Construct baut eine nachhaltige Partnerschaft auf.
Mehr als 15 Jahre Erfahrung mit Bodenbelägen, aber Dächer bergen für uns keine Geheimnisse mehr.
Von größeren Renovierungsarbeiten über kleinere Reparaturen bis hin zu komplett neuen Häusern.
Durch die enge Zusammenarbeit mit Kunden, Mitarbeitern und Partnern streben wir die höchstmögliche Spitzenqualität an. Immer wieder in einer offenen und respektvollen Atmosphäre.
GGFloors & Construct bringt Ihr Bauprojekt zu einem erfolgreichen Abschluss.
Auf diese Weise machen wir dem Kunden das Leben leichter, weil wir das Gesamtkonzept anbieten können.
Unser größtes Kapital sind unsere Handwerker. Ihre Sicherheit und ihr Wohlbefinden haben für GG konstruieren oberste Priorität, da dies der einzige Weg ist, um der Baustelle höchste Qualität zu liefern.
Haben Sie Bau- oder Renovierungspläne:`],
  ],
  "fr": [

    [
      [
        "Projets", [
          ["Revêtement de sol"],
          ["Ouvrage"],
          ["Travail Gyproc"],
          ["Travaux de terrasse"],
          ["Toiture en pente"],
          ["Rénovation"]
        ],
      ],
      [
        "Galerie", [

        ],
      ],
      [
        "Détails du contact", [

        ],
      ],
    ],
    ["Nos partenaires"],
    ["Contacter"],
    ["Construisons avec GG"],
    [`GGFloors & Construct construit un partenariat durable.
Plus de 15 ans d'expérience dans les revêtements de sol, mais les toitures n'ont plus de secret pour nous.
Des rénovations majeures aux petites réparations en passant par les maisons complètement neuves.
En travaillant en étroite collaboration avec les clients, les employés et les partenaires, nous visons la meilleure qualité possible. Encore et encore dans une ambiance ouverte et respectueuse.
GGFloors & Construct mène votre projet de construction à bonne fin.
De cette façon, nous facilitons la vie du client car nous pouvons offrir le concept global.
Notre plus grande capitale est nos artisans, leur sécurité et leur bien-être sont une priorité absolue pour GG construct, car c'est le seul moyen de fournir la meilleure qualité sur le chantier.
Avez-vous des plans de construction ou de rénovation:`],
  ], 
}

const companyName = `GGFloors & Construct`;

let currentLang = document.querySelector('.current-lang span');
let lang = currentLang.textContent.toLowerCase();
let optionLang = document.querySelectorAll('.options-lang span');
let partners = document.querySelector('.partners span');
const topbarContactLink = document.querySelector('.topbar-contact-link');
const footNavColumnTitle = document.querySelectorAll('.footnav-column h4');
const ul_MHAmj = document.querySelectorAll('.footnav-column ul');

const topNav = document.querySelector('.topnav');
const ul_ztFNV = document.createElement('ul');
const mobileDropdownColumn = document.querySelector('.mobile-dropdown-column');
// const typeInfoText = document.querySelector('.type-info-text');
// const typeTitle = document.querySelector('.type-title');
// typeTitle.textContent = companyName;
// const infoBlockContent = document.querySelector('.info-block-content p');
  let teasers = document.querySelector('.teasers');


function getContent() {
  partners.textContent = data[lang][1];
  topbarContactLink.textContent = data[lang][2];
  footNavColumnTitle[0].textContent = data[lang][0][0][0];
  // typeInfoText.textContent = data[lang][3];
  // infoBlockContent.innerHTML = data[lang][4];

  for (let i = 0; i < data[lang][0].length; i++) {
    console.log(lang);
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

      const div_GmBfj = document.createElement('div');
      div_GmBfj.classList.add('teaser-small');
      teasers.appendChild(div_GmBfj);
      const a_iEHDp = document.createElement('a');
      a_iEHDp.classList.add('capture');
      a_iEHDp.href = 'vloerbekleding.html';
      div_GmBfj.appendChild(a_iEHDp);
      const div_sUwXk = document.createElement('div');
      div_sUwXk.classList.add('teaser-small_image');
      a_iEHDp.appendChild(div_sUwXk);
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
      p_Wzyfz.textContent = (data[lang][0][i][1][j][1]) ? data[lang][0][i][1][j][1] : '...';
      const p_Kdnxl = document.createElement('p');
      p_Kdnxl.classList.add('m-teaser-small_readmore');
      div_HFbUm.appendChild(p_Kdnxl);
      const a_piRos = document.createElement('a');
      a_piRos.classList.add('btn-default');
      a_piRos.href = 'vloerbekleding.html';
      p_Kdnxl.appendChild(a_piRos);
      a_piRos.textContent += `Lees meer`;

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
