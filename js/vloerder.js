let teasers = document.querySelector('.teasers');
let titlebarTitle = document.querySelector('.titlebar-title h1');
let infoBlockSpan = document.querySelectorAll('.info-block-content span');


let variants = {
  "vloerder" : [
    ["images/vloerder.jpg"], {
    "nl" :
    [
      ["Vloerbekleding"],
      ["<strong>GG Floors&Construct</strong> is gestart in de bouwsector met het plaatsen van allerhanden vloerafwerking.<br>Zachte of harde vloeren, hetm aakt weinig uit we plaatsen het allemaal. <br> Door onze jarenlange expertise in vloeren hebben we ook contacten met de betere materiaal leverancier. <br> Zo geniet u van een snelle en vlotte plaatsing en dit volgens u wensen. Oppervlakte afwerking kent voor ons geen geheimen meer, de verschillende manieren van opbouwen is voor ons dagdagelijkse bezigheid. <br>Door deze ervaring komt u in uw renovatie project ook niet voor verrassingen te staan. <br>Voor een nieuwe vloer moet u bij GG-Floors&Construct zijn. Wij plaatsten alle soorten duurzame en decoratieve tegels voor vloeren en wanden, zowel voor leefruimtes als voor keukens, badkamers en bergruimtes, waaronder:"],
      ["Voor een nieuwe vloer moet u bij GG Floors&Construct zijn."],
      [
        ["Natuursteen"],
        ["Keramiek"],
        ["Mozaïek"],
        ["Exclusieve tegels"],
        ["Parket"],
        ["Laminaat"],
        ["Linoleum"],
      ],
    ],
    "en" :
    [
      ["Floor Covering"],
      ["<strong>GG Floors&Construct</strong> started in the construction sector by installing all kinds of floor finishes.<br>Soft or hard floors, it doesn't matter we install it all. <br> Thanks to our years of expertise in floors, we also have contacts with the better material supplier. <br> This way you can enjoy a quick and smooth installation according to your wishes. Surface finishing has no more secrets for us, the different ways of building up are part of our daily business. <br>Because of this experience, you will not be faced with surprises in your renovation project. <br>For a new floor you have to go to GG-Floors&Construct. <br>We installed all types of durable and decorative tiles for floors and walls, for living spaces as well as for kitchens, bathrooms and storage areas, including:"],
      ["For a new floor you should contact GG Floors&Construct."],
      [
         ["Natural stone"],
         ["Ceramics"],
         ["Mosaic"],
         ["Exclusive Tiles"],
         ["Parquet"],
         ["Laminate flooring"],
         ["Linoleum"],
       ],

    ],
     "de" :
    [
      ["Bodenbelag"],
      ["<strong>GG Floors&Construct</strong> begann im Bausektor mit der Verlegung aller Arten von Bodenbelägen.<br>Weiche oder harte Böden, egal, wir verlegen alles. <br> Dank unserer langjährigen Bodenkompetenz haben wir auch Kontakte zum besseren Materiallieferanten. <br> So genießen Sie eine schnelle und reibungslose Installation nach Ihren Wünschen. Die Oberflächenveredelung hat für uns keine Geheimnisse mehr, die unterschiedlichen Aufbaumethoden sind unsere tägliche Tätigkeit. <br>Aufgrund dieser Erfahrung werden Sie bei Ihrem Renovierungsprojekt nicht mit Überraschungen konfrontiert. <br>Für einen neuen Boden müssen Sie zu GG-Floors&Construct gehen. Wir haben alle Arten von langlebigen und dekorativen Fliesen für Böden und Wände, für den Wohnbereich sowie für Küchen, Bäder und Lagerräume verlegt, darunter:"],
      ["Sie müssen zu GG Floors&Construct gehen, um einen neuen Boden zu bekommen."],
      [
         ["Naturstein"],
         ["Keramik"],
         ["Mosaik"],
         ["Exklusive Kacheln"],
         ["Parkett"],
         ["Laminatboden"],
         ["Linoleum"],
       ],
    ],
     "fr" :
    [
      ["Revêtement de sol"],
      ["<strong>GG Floors&Construct</strong> a commencé dans le secteur de la construction en installant toutes sortes de revêtements de sol.<br>Planchers souples ou durs, peu importe nous installons tout. <br> Grâce à nos nombreuses années d'expertise dans les sols, nous avons également des contacts avec le meilleur fournisseur de matériaux. <br> De cette façon, vous pouvez profiter d'une installation rapide et fluide selon vos souhaits. La finition de surface n'a plus de secret pour nous, les différentes manières de construire sont notre activité quotidienne. <br>Grâce à cette expérience, vous n'aurez pas de surprises dans votre projet de rénovation. <br>Pour un nouveau sol, vous devez vous rendre chez GG-Floors&Construct. Nous avons installé tous types de carreaux durables et décoratifs pour les sols et les murs, pour les espaces de vie ainsi que pour les cuisines, les salles de bain et les espaces de stockage, notamment:"],
      ["Vous devez vous rendre chez GG Floors&Construct pour un nouveau sol."],
      [
         ["Pierre naturelle"],
         ["Céramique"],
         ["Mosaïque"],
         ["Tuiles exclusives"],
         ["Parquet"],
         ["Revêtstratifié"],
         ["Linoléum"],
       ],
    ]
  },
  [
    ["images/gallery/vloerder/img-sm-1.jpg"],
    ["images/gallery/vloerder/img-sm-2.jpg"],
    ["images/gallery/vloerder/img-sm-3.jpg"],
    ["images/gallery/vloerder/img-sm-4.jpg"],
    ["images/gallery/vloerder/img-sm-5.jpg"],
    ["images/gallery/vloerder/img-sm-6.jpg"],
    ["images/gallery/vloerder/img-sm-7.jpg"],
    ["images/gallery/vloerder/img-sm-8.jpg"],
  ]
  ],
}

function getCards() {
  teasers.innerHTML = ``;
  titlebarTitle.textContent = data[lang][0][2][1][0][0];
    for (let i = 0; i < data[lang][0][2][1][0][2].length; i++) {
        const div_GmBfj = document.createElement('div');
        div_GmBfj.classList.add('teaser-small');
        teasers.appendChild(div_GmBfj);
        const div_sUwXk = document.createElement('div');
        div_sUwXk.classList.add('teaser-small_image');
        div_GmBfj.appendChild(div_sUwXk);
        const a_sUwXk = document.createElement('a');
        div_sUwXk.appendChild(a_sUwXk);
        a_sUwXk.href = `${data.nl[0][2][1][0][2][i][0].replace(/ /g, '-').replace('ï', 'i').toLowerCase()}.html`;
        const img_MDfUj = new Image();
        img_MDfUj.src = `images/${data.nl[0][2][1][0][2][i][0].replace(/ /g, '-').toLowerCase()}.jpg` || 'images/logo.svg';
        img_MDfUj.setAttribute(`alt`, data[lang][0][2][1][0][2][i][0]);
        a_sUwXk.appendChild(img_MDfUj);
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
        a_FZoyA.href = `${data.nl[0][2][1][0][2][i][0].replace(/ /g, '-').replace('ï', 'i').toLowerCase()}.html`;
        h2_qunjJ.appendChild(a_FZoyA);
        a_FZoyA.textContent += data[lang][0][2][1][0][2][i][0];
        const p_Wzyfz = document.createElement('p');
        div_HFbUm.appendChild(p_Wzyfz);
        p_Wzyfz.textContent = (data[lang][0][2][1][0][2][i][1] !== undefined) ? `${data[lang][0][2][1][0][2][i][1][0].substring(0, 200)} ... ` : `...`;
        const p_Kdnxl = document.createElement('p');
        p_Kdnxl.classList.add('m-teaser-small_readmore');
        div_HFbUm.appendChild(p_Kdnxl);
        const a_piRos = document.createElement('a');
        a_piRos.classList.add('btn-default');
        a_piRos.href = `${data.nl[0][2][1][0][2][i][0].replace(/ /g, '-').replace('ï', 'i').toLowerCase()}.html`;
        p_Kdnxl.appendChild(a_piRos);
        a_piRos.textContent += data[lang][7];
      }
    }
    window.addEventListener('hashchange', function (e) {
  setTimeout(() => {
    getCards();
    getVariantOfFloor();
  }, 0)
});

getCards();
