Vue.component('footnav', {
  template: `
  <nav class="footnav">
        <div class="footnav-column">
          <h4 class="column-title">Column 1</h4>
          <hr class="title-underline">
          <ul>
            
          </ul>
        </div>
        <div class="footnav-column">
          <h4 class="column-title">Column 2</h4>
          <hr class="title-underline">
          <ul>
            <li class="footnav-link-item">
              <a href="nohome.html">
              Link1
              </a>
            </li>
            <li class="footnav-link-item">
              <a href="nohome.html">
              Link2
              </a>
            </li>
            <li class="footnav-link-item">
              <a href="nohome.html">
              Link3
              </a>
            </li>
            <li class="footnav-link-item">
              <a href="nohome.html">
              Link4
              </a>
            </li>
            <li class="footnav-link-item">
              <a href="nohome.html">
              Link5
              </a>
            </li>
            <li class="footnav-link-item">
              <a href="nohome.html">
              Link6
              </a>
            </li>
            <li class="footnav-link-item">
              <a href="nohome.html">
              Link7
              </a>
            </li>
          </ul>
        </div>
        <div class="footnav-column">
          <h4 class="column-title">Column 3</h4>
          <hr class="title-underline">
          <ul>
            <li class="footnav-link-item">
              <a href="nohome.html">
              Link1
              </a>
            </li>
            <li class="footnav-link-item">
              <a href="nohome.html">
              Link2
              </a>
            </li>
            <li class="footnav-link-item">
              <a href="nohome.html">
              Link3
              </a>
            </li>
            <li class="footnav-link-item">
              <a href="nohome.html">
              Link4
              </a>
            </li>
            <li class="footnav-link-item">
              <a href="nohome.html">
              Link5
              </a>
            </li>
            <li class="footnav-link-item">
              <a href="nohome.html">
              Link6
              </a>
            </li>
            <li class="footnav-link-item">
              <a href="nohome.html">
              Link7
              </a>
            </li>
          </ul>
        </div>
         <div class="footnav-column gegevens">
          <h4 class="column-title">Gegevens:</h4>
          <hr class="title-underline">
          <ul>
            <li class="gegevens-link-item">
              <a href="" target="_self">
              GGVloerbekleding  bv
              </a>
            </li>
            <li class="gegevens-link-item">
              <a href="" target="_self">
              BTW: BE 0704678967
              </a>
            </li>
            <li class="gegevens-link-item footnav-link-item">
              <a href="tel:+32472815575" target="_self">
              +32472815575
              </a>
            </li>
            <li class="gegevens-link-item footnav-link-item">
              <a href="https://www.google.com/maps/place/GGVloerbekleding+bvba/@51.0532724,5.7378526,15z/data=!4m5!3m4!1s0x0:0xa831bc10b126f764!8m2!3d51.0532724!4d5.7378526" target="_self">
              Kloosterpark 3, B 3650 Dilsen-Stokkem
              </a>
            </li>
            <li class="gegevens-link-item footnav-link-item">
              <a href="mailto:info.admin@ggvloerbekleding.be" target="_self">
              info.admin@ggvloerbekleding.be
              </a>
            </li>
            <li class="gegevens-link-item">
              <a href="" target="_self">
              BNP PARIBAS/Fortis
              </a>
            </li>
            <li class="gegevens-link-item">
              <a href="" target="_self">
              BE71 0019 0088 6869
              </a>
            </li>
          </ul>
        </div>
      </nav>
  `
});

Vue.component('basement', {
  template: `
  <div class="basement">
        <div class="copyright">
          <span class="copyright-title">GGVloerbekleding 2021 ©</span>
          <ul class="items-list-inline">
            <li>
              <a target="blink" href="files/maatschappelijke-zetel.pdf">
              <span>Maatschappelijke Zetel</span>
              </a>
            </li>
            <li>
              <a target="blink" href="files/rubriek-oprichting.pdf">
              <span>Rubriek Oprichting</span>
              </a>
            </li>
            <li>
              <a target="blink" href="files/financiele-gegevens.pdf">
              <span>Financiële Gegevens</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="socials">
          <ul>
            <li><a class="ti-facebook" href="https://www.facebook.com/ggvloerbekleding.vloerbekleding"></a></li>
            <li><a class="ti-linkedin" href="https://linkedin.com"></a></li>
            <li><a class="ti-instagram" href="https://www.instagram.com/ggvloerbekleding"></a></li>
          </ul>
        </div>
      </div>
  `
});

Vue.component('contact-widget', {
  template: `
  <div class="contact-widget">
    <input type="checkbox" class="contact-widget-input">
    <button class="contact-widget-btn"></button>
    <div class="contact-widget-container">
      <ul class="items-of-contact">
        <li class="item-phone">
          <a href="contact.html">
          <img src="images/icons/call.svg" alt="phone call us">
          </a>
        </li>
        <li class="item-mail">
          <a href="mailto:gg-construct@live.nl">
          <img src="images/icons/envelope.svg" alt="send a mail">
          </a>
        </li>
        <li class="item-form">
          <a href="form.html">
          <img src="images/icons/bullet-form.svg" alt="fill in the form">
          </a>
        </li>
      </ul>
    </div>
    <div class="chat-to">
      <p>Contact us</p>
    </div>
  </div>
  `
});

var app = new   Vue({
el: '#footer'
})

