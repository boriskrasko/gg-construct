Vue.component('footnav', {
  template: `
  <nav class="footnav">
        <div class="footnav-column">
          <h4 class="column-title">Column 1</h4>
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
        <div class="footnav-column">
          <h4 class="column-title">Column 4</h4>
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
      </nav>
  `
});

Vue.component('basement', {
  template: `
  <div class="basement">
        <div class="copyright">
          <span class="copyright-title">GG-CONSTRUCT 2021 ©</span>
          <ul class="items-list-inline">
            <li>
              <a href="nohome.html">
              <span>Privacy</span>
              </a>
            </li>
            <li>
              <a href="nohome.html">
              <span>Cookies</span>
              </a>
            </li>
            <li>
              <a href="nohome.html">
              <span>Item</span>
              </a>
            </li>
            <li>
              <a href="nohome.html">
              <span>Item</span>
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

