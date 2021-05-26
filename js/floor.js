let teasers = document.querySelector('.teasers');
let titlebarTitle = document.querySelector('.titlebar-title h1');


function getCont() {
  teasers.innerHTML = ``;
    for (let j = 0; j < data[lang][0][1][1].length; j++) {
        const div_GmBfj = document.createElement('div');
        div_GmBfj.classList.add('teaser-small');
        teasers.appendChild(div_GmBfj);
        const div_sUwXk = document.createElement('div');
        div_sUwXk.classList.add('teaser-small_image');
        div_GmBfj.appendChild(div_sUwXk);
        const img_MDfUj = new Image();
        img_MDfUj.src = (data[lang][0][0][1][j][2]) ? data[lang][0][0][1][j][2] : 'images/logo.svg';
        img_MDfUj.setAttribute(`alt`, data[lang][0][1][1][j][0]);
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
        a_FZoyA.href = `${data.en[0][0][1][j][0].replace(' ', '-').toLowerCase()}.html`;
        h2_qunjJ.appendChild(a_FZoyA);
        a_FZoyA.textContent += data[lang][0][0][1][j][0];
        const p_Wzyfz = document.createElement('p');
        div_HFbUm.appendChild(p_Wzyfz);
        p_Wzyfz.textContent = (data[lang][0][0][1][j][1] != ``) ? data[lang][0][0][1][j][1] : `...`;
        const p_Kdnxl = document.createElement('p');
        p_Kdnxl.classList.add('m-teaser-small_readmore');
        div_HFbUm.appendChild(p_Kdnxl);
        const a_piRos = document.createElement('a');
        a_piRos.classList.add('btn-default');
        a_piRos.href = `${data.en[0][0][1][j][0].replace(' ', '-').toLowerCase()}.html`;
        p_Kdnxl.appendChild(a_piRos);
        a_piRos.textContent += `Lees meer`;
      }
    }

for (let i = 0; i < optionLang.length; i++) {
  optionLang[i].addEventListener('click', () => {
    setTimeout(() => {
      getCont()
    }, 10);
  })
}

getCont();
