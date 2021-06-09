let variant = `over-ons`;

const getVariantContent = () => {
  let titlebarTitle = document.querySelector('.titlebar-title h1');
  titlebarTitle.innerHTML = variants[variant][1][lang][0];
  let infoBlockImage = document.querySelector('.info-block img');
  infoBlockImage.src = variants[variant][0];
  let infoBlockTitle = document.querySelector('.info-block-content h2');
  infoBlockTitle.textContent = variants[variant][1][lang][0]
  let infoBlockContent = document.querySelector('.info-block-content p');
  infoBlockContent.innerHTML= variants[variant][1][lang][1]

  for (let i = 0; i < variants[variant][2].length; i++) {
    const div_KbNDA = document.createElement('div');
    div_KbNDA.classList.add('gallery_inner');
    gallery.appendChild(div_KbNDA);
    const img_IZcrL = new Image();
    img_IZcrL.classList.add('gallery_image');
    img_IZcrL.src = `${variants[variant][2][i]}`;
    console.log(variants[variant][2]);
    img_IZcrL.setAttribute(`alt`, `Test text`);
    div_KbNDA.appendChild(img_IZcrL);
  }
}

if (window.location.href !== window.location.hostname) {
  let currentLocationPath = window.location.pathname;
  let titlebarPath = document.querySelector('.titlebar-path')

  let pathNames = currentLocationPath.split('/');

  for (let i = 0; i < pathNames.length; i++) {
    let a = document.createElement('a');
    let span = document.createElement('span');
    span.textContent = `›`;
    a.textContent = pathNames[i + 1];
    a.href = currentLocationPath;
    if (a.textContent !== '') {
      titlebarPath.appendChild(a);
      titlebarPath.appendChild(span);
    }
  }
}

window.addEventListener('hashchange', function(e) {
  gallery.innerHTML = ``;
  setTimeout(() => {
    getVariantContent();
  }, 10)
});

getVariantContent();
