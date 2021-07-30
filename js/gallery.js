const modal = document.getElementById('galleryModal');
let galleryImage;
let gallery = document.querySelector('.gallery_items');
let arrowBtn = document.querySelectorAll('.arrow-btn');
let img = document.querySelector('.gallery_inner');
let miniatures = document.querySelector('.miniatures');
let modalImg = document.getElementById('img');
modalImg.classList.add('swipeme');
let miniaturesImg;
let min;

function getGallery() {
  galleryImage = document.querySelectorAll('.gallery_inner img');
  for (let i = 0; i < galleryImage.length; i++) {
    const img_IZcr = new Image();
    img_IZcr.src = `${variants[variant][2][i]}`;
    miniatures.appendChild(img_IZcr);
    miniaturesImg = document.querySelectorAll('.miniatures img');
    n = i;
    min = miniaturesImg[n];
    miniaturesImg[n].onclick = function () {
      gallery.style.display = 'none';
      modal.style.display = 'flex';
      modalImg.src = galleryImage[i].src.replace(`sm`, `lg`);
      min.style.width = '40px';
      miniaturesImg[i].style.width = '50px';
      min = miniaturesImg[i];
    }
    galleryImage[i].onclick = function () {
      gallery.style.display = 'none';
      modal.style.display = 'flex';
      modalImg.src = galleryImage[i].src.replace(`sm`, `lg`);
      min.style.width = '40px';
      miniaturesImg[i].style.width = '50px';
      min = miniaturesImg[i];
    }
    min = miniaturesImg[n];
    for (let i = 0; i <= arrowBtn.length; i++) {
      arrowBtn[0].onclick = function () {
        n = (n >= 1) ? n - 1 : galleryImage.length - 1;
        modalImg.src = galleryImage[n].src.replace(`sm`, `lg`);
        min.style.width = '40px';
        miniaturesImg[n].style.width = '50px';
        min = miniaturesImg[n];
      }
      arrowBtn[1].onclick = function () {
        n = (n < galleryImage.length - 1) ? n + 1 : 0;
        modalImg.src = galleryImage[n].src.replace(`sm`, `lg`);
        min.style.width = '40px';
        miniaturesImg[n].style.width = '50px';
        min = miniaturesImg[n];
      }
    }
  }
}

let span = document.getElementsByClassName('close-modal')[0];
let modalContent = document.getElementsByClassName('modal-content')[0];

span.onclick = function () {
  modal.style.display = "none";
  gallery.style.display = 'flex';
  modalImg.classList.remove('zoom');
};

modalContent.onclick = function () {
  modalImg.classList.toggle('zoom');
}

let min_x = 20; //min x swipe for horizontal swipe
let max_x = 40; //max x difference for vertical swipe
let min_y = 40; //min y swipe for vertical swipe
let max_y = 50; //max y difference for horizontal swipe
let direc = "";

function detectswipe(el) {
  swipe_det = new Object();
  swipe_det.sX = 0;
  swipe_det.sY = 0;
  swipe_det.eX = 0;
  swipe_det.eY = 0;
  ele = document.querySelector(el);
  ele.addEventListener('touchstart', function (e) {
    let t = e.touches[0];
    swipe_det.sX = t.screenX;
    swipe_det.sY = t.screenY;
  }, false);
  ele.addEventListener('touchmove', function (e) {
    e.preventDefault();
    t = e.touches[0];
    swipe_det.eX = t.screenX;
    swipe_det.eY = t.screenY;
  }, false);
  ele.addEventListener('touchend', function (e) {
    if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y)))) {
      if (swipe_det.eX > swipe_det.sX) {
        n = (n >= 1) ? n - 1 : galleryImage.length - 1;
        modalImg.src = galleryImage[n].src.replace(`sm`, `lg`);
        min.style.width = '40px';
        miniaturesImg[n].style.width = '50px';
        min = miniaturesImg[n];
      } else {
        n = (n < galleryImage.length - 1) ? n + 1 : 0;
        modalImg.src = galleryImage[n].src.replace(`sm`, `lg`);
        min.style.width = '40px';
        miniaturesImg[n].style.width = '50px';
        min = miniaturesImg[n];
      }
    }
    if (direc != "") {
      if (typeof func == 'function') func(el, direc);
    }
    direc = "";
  }, false);
}

window.addEventListener('hashchange', function (e) {
  gallery.innerHTML = ``;
  miniatures.innerHTML = ``;
  setTimeout(() => {
    getGallery();
  }, 10)
});

detectswipe('.swipeme');

getGallery();
