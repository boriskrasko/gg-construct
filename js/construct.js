let teasers = document.querySelector('.teasers');
let titlebarTitle = document.querySelector('.titlebar-title h1');


function getCards() {
  teasers.innerHTML = ``;
  titlebarTitle.textContent = data[lang][0][2][0];
    for (let i = 0; i < data[lang][0][2][1].length; i++) {
        const div_GmBfj = document.createElement('div');
        div_GmBfj.classList.add('teaser-small');
        teasers.appendChild(div_GmBfj);
        const div_sUwXk = document.createElement('div');
        div_sUwXk.classList.add('teaser-small_image');
        div_GmBfj.appendChild(div_sUwXk);
        const a_sUwXk = document.createElement('a');
        div_sUwXk.appendChild(a_sUwXk);
        a_sUwXk.href = `${data.nl[0][2][1][i][0].replace(/ /g, '-').toLowerCase()}.html`;
        const img_MDfUj = new Image();
        img_MDfUj.src = `images/${data.nl[0][2][1][i][0].replace(/ /g, '-').toLowerCase()}.jpg` || 'images/logo.svg';
        img_MDfUj.setAttribute(`alt`, '');
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
        a_FZoyA.href = `${data.nl[0][2][1][i][0].replace(/ /g, '-').toLowerCase()}.html`;
        h2_qunjJ.appendChild(a_FZoyA);
        a_FZoyA.textContent += data[lang][0][2][1][i][0];
        const p_Wzyfz = document.createElement('p');
        div_HFbUm.appendChild(p_Wzyfz);
        p_Wzyfz.textContent = (data[lang][0][2][1][i][1] !== undefined) ? `${data[lang][0][2][1][i][1].slice(0, 1).toString().substring(0, 200)} ... ` : `...`;
        const p_Kdnxl = document.createElement('p');
        p_Kdnxl.classList.add('m-teaser-small_readmore');
        div_HFbUm.appendChild(p_Kdnxl);
        const a_piRos = document.createElement('a');
        a_piRos.classList.add('btn-default');
        a_piRos.href = `${data.nl[0][2][1][i][0].replace(/ /g, '-').toLowerCase()}.html`;
        p_Kdnxl.appendChild(a_piRos);
        a_piRos.textContent += data[lang][7];
      }
    }
    window.addEventListener('hashchange', function (e) {
  setTimeout(() => {
    getCards();
  }, 0)
});

getCards();
