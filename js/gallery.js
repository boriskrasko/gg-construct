const modal = document.getElementById('myModal');
let galleryImage;
let gallery = document.querySelector('.gallery_items');
let arrowBtn = document.querySelectorAll('.arrow-btn');
let modalImageDescription = document.querySelector('.modal-image-description');
let img = document.querySelector('.gallery_inner');
let modalImg = document.getElementById('img');

function getGallery () {
  galleryImage = document.querySelectorAll('.gallery_inner img');
  for (let i = 0; i < galleryImage.length; i++) {
    n = i;
    galleryImage[i].onclick = function () {
      gallery.style.display = 'none';
      modal.style.display = 'flex';
      console.log(galleryImage[i].src);
      modalImg.src = galleryImage[i].src.replace(`sm`, `lg`);
      // modalImageDescription.textContent = galleryImage[i].alt;
  }
  for (let i = 0; i <= arrowBtn.length; i++) {
    arrowBtn[0].onclick = function () {
      n = (n >= 1) ? n - 1 : galleryImage.length - 1;
      modalImg.src = galleryImage[n].src.replace(`sm`, `lg`);
      // modalImageDescription.textContent = galleryImage[n].alt;
    }
    arrowBtn[1].onclick = function () {
      n = (n < galleryImage.length - 1) ? n + 1 : 0;
      modalImg.src = galleryImage[n].src.replace(`sm`, `lg`);
      // modalImageDescription.textContent = galleryImage[n].alt;
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
  // modalImg.style.transform = 'scale(1.7)';
  // modalImg.style.overflow = 'visible';
}

getGallery();
