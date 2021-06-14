const modal = document.getElementById('myModal');
let galleryImage;
let gallery = document.querySelector('.gallery_items');
let arrowBtn = document.querySelectorAll('.arrow-btn');
let modalImageDescription = document.querySelector('.modal-image-description');
let img = document.querySelector('.gallery_inner');
let modalImg = document.getElementById('img');
modalImg.classList.add('swipeme');

function getGallery () {
  galleryImage = document.querySelectorAll('.gallery_inner img');
  for (let i = 0; i < galleryImage.length; i++) {
    n = i;
    galleryImage[i].onclick = function () {
      gallery.style.display = 'none';
      modal.style.display = 'flex';
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

function detectswipe(el,func) {
      swipe_det = new Object();
      swipe_det.sX = 0;
      swipe_det.sY = 0;
      swipe_det.eX = 0;
      swipe_det.eY = 0;
      var min_x = 20;  //min x swipe for horizontal swipe
      var max_x = 40;  //max x difference for vertical swipe
      var min_y = 40;  //min y swipe for vertical swipe
      var max_y = 50;  //max y difference for horizontal swipe
      var direc = "";
      ele = document.querySelector(el);
      ele.addEventListener('touchstart',function(e){
        var t = e.touches[0];
        swipe_det.sX = t.screenX; 
        swipe_det.sY = t.screenY;
      },false);
      ele.addEventListener('touchmove',function(e){
        e.preventDefault();
        var t = e.touches[0];
        swipe_det.eX = t.screenX; 
        swipe_det.eY = t.screenY;    
      },false);
      ele.addEventListener('touchend',function(e){
        //horizontal detection
        if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y)))) {
          if(swipe_det.eX > swipe_det.sX) direc = "r";
          else direc = "l";
        }
        //vertical detection
        if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x)))) {
          if(swipe_det.eY > swipe_det.sY) direc = "d";
          else direc = "u";
        }
    
        if (direc != "") {
          if(typeof func == 'function') func(el,direc);
        }
        direc = "";
      },false);  
    }

    function myfunction(el,d) {
      alert("you swiped on element with id '"+el+"' to "+d+" direction");
    }


    detectswipe('.swipeme',myfunction);

getGallery();
