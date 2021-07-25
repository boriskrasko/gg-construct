Vue.component('footnav', {
  template: `
    <nav class="footnav">
      <div class="footnav-column">
        <h4 class="column-title">Hoofd</h4>
        <hr class="title-underline">
        <ul>
        </ul>
      </div>
      <div class="footnav-column">
        <h4 class="column-title">Activiteiten</h4>
        <hr class="title-underline">
        <ul>
        </ul>
      </div>
      <div class="footnav-column">
        <h4 class="column-title">Socials</h4>
        <hr class="title-underline">
        <ul>
          <li class="footnav-link-item">
            <a href="https://www.facebook.com/GGFloorsConstruct">
            Facebook
            </a>
          </li>
          <li class="footnav-link-item">
            <a href="https://twitter.com">
            Twitter
            </a>
          </li>
          <li class="footnav-link-item">
            <a href="https://www.instagram.com/gg_floors_constructions">
            Instagram
            </a>
          </li>
          <li class="footnav-link-item">
            <a href="https://www.linkedin.com/company/ggvloerbekleding">
            Linkedin
            </a>
          </li>
          <li class="footnav-link-item">
            <a href="https://youtube.com">
            Youtube
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
            <span class="ti-briefcase">&#160;</span>
            GGVloerbekleding  bv <br> BTW: BE 0704678967
            </a>
          </li>
          <li class="gegevens-link-item footnav-link-item">
            <a href="https://www.google.com/maps/place/GGVloerbekleding+bvba/@51.0532724,5.7378526,15z/data=!4m5!3m4!1s0x0:0xa831bc10b126f764!8m2!3d51.0532724!4d5.7378526" target="_self">
             <span class="ti-location-arrow">&#160;</span>
            Kloosterpark 3, B 3650 Dilsen-Stokkem
            </a>
          </li>
          <li class="gegevens-link-item footnav-link-item">
          <a href="tel:+32472815575" target="_self">
            <span class="ti-mobile">&#160;</span>+32472815575
            </a>
            <a href="mailto:info.admin@ggvloerbekleding.be" target="_self">
            <span class="ti-email">&#160;</span>
            info.admin@ggvloerbekleding.be
            </a>
          </li>
          <li class="gegevens-link-item">
            <a href="" target="_self">
            <span class="ti-wallet">&#160;</span>
            BNP PARIBAS/Fortis<br>BE71 0019 0088 6869
            </a>
          </li>
        </ul>
        <img style="display: block; margin: 20px auto;" width="40" src="images/logo.svg" alt="GG Floors and Construct">
      </div>
    </nav>
  `
});

Vue.component('basement', {
  template: `
    <div class="basement">
      <div class="copyright">
        <span class="copyright-title">GG Floor & Construct 2021 ©</span>
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
          <li><a class="ti-facebook" href="https://www.facebook.com/GGFloorsConstruct"></a></li>
          <li><a class="ti-linkedin" href="https://www.linkedin.com/company/ggvloerbekleding"></a></li>
          <li><a class="ti-instagram" href="https://www.instagram.com/gg_floors_constructions"></a></li>
        </ul>
      </div>
    </div>
  `
});

Vue.component('contact-widget', {
  template: `
    <div class="contact-widget">
      <input type="checkbox" class="contact-widget-input">
      <button class="contact-widget-btn ti-comment"></button>
      <div class="contact-widget-container">
        <ul class="items-of-contact">
          <li class="item-phone">
            <a class="ti-mobile" href="contact.html" title="Contact"></a>
          </li>
          <li class="item-mail">
            <a class="ti-email" href="mailto:gg-construct@live.nl" title="E-mail"></a>
          </li>
          <li class="item-form">
            <a class="ti-view-list-alt" href="form.html" title="Form"></a>
          </li>
        </ul>
      </div>
      <div class="chat-to">
        <p>Contact us</p>
      </div>
    </div>
  `
});

var app = new Vue({
  el: '#footer'
})
