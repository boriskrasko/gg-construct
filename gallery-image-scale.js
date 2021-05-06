// Get the modal
const modal = document.getElementById('myModal');
let currentImage = document.querySelectorAll('.gallery_iner img');
let thumbs = document.querySelectorAll('.gallery_items div');
let gallery = document.querySelector('.gallery_items');
let arrowBtn = document.querySelectorAll('.arrow-btn');
let modalImageDescription = document.querySelector('.modal-image-description');


// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.querySelector('.gallery_iner');
let modalImg = document.getElementById('img');

[].forEach.call(thumbs, function (thumb, n) {
  thumb.index = n;
  thumb.addEventListener('click', function () {
    modal.style.display = 'flex';
    modalImg.src = `${currentImage[n].src}`;
    gallery.style.display = 'none';
    modalImageDescription.textContent = currentImage[n].alt;
  })

for (let i = 0; i <= arrowBtn.length; i++) {
  arrowBtn[0].onclick = function () {
  n = (n >= 1) ? n - 1 : currentImage.length - 1;
    modalImg.src = currentImage[n].src;
    modalImageDescription.textContent = currentImage[n].alt;
    }
  arrowBtn[1].onclick = function () {
    n = (n < currentImage.length - 1) ? n + 1 : 0;
    modalImg.src = currentImage[n].src;
    modalImageDescription.textContent = currentImage[n].alt;
  }
}
});

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close-modal')[0];
let modalContent = document.getElementsByClassName('modal-content')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  gallery.style.display = 'flex';
};

modalContent.onclick = function () {
  modal.style.display = "none";
  gallery.style.display = 'flex';
}

