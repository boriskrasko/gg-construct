Vue.component('topbar', {
  template: `
  <div class="topbar">
      <div class="flex-container">
        <div class="dropdown-list partners-list">
          <div class="dropdown-select">
            <div class="dropdown-title partners">
              <span></span>
              <div class="arrow"></div>
            </div>
            <div class="options">
              <a class="option" href="https://www.uzin.com" target="blink">
                <img src="images/logos/partners/uzin-logo.png" alt="uzin utz" title="Uzin Utz">
              </a>
              <a class="option" href="https://nl.wolf.eu" target="blink">
                <img src="images/logos/partners/wolf-logo.png" alt="wolf" title="Wolf">
              </a>
              <a class="option" href="https://www.knauf.com" target="blink">
                <img src="images/logos/partners/knauf-logo.png" alt="knauf" title="Knauf">
              </a>
              <a class="option" href="https://www.forbo.com" target="blink">
                <img src="images/logos/partners/forbo-logo.png" alt="forbo" title="Forbo">
              </a>
            </div>
          </div>
        </div>
        <span class="separator"></span>
        <a class="topbar-contact-link" href="form.html"></a>
      </div>
      <div class="flex-container">
        <div class="dropdown-list available-languages">
          <div class="dropdown-select">
            <div class="dropdown-title current-lang">
              <span>EN</span>
              <div class="arrow"></div>
            </div>
            <ul class="options options-lang">
              <li class="option selected"><a href="#en">EN</a></li>
              <li class="option"><a href="#nl">NL</a></li>
              <li class="option"><a href="#de">DE</a></li>
              <li class="option"><a href="#fr">FR</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
});

Vue.component('navbar', {
  template: `
  <div class="navbar">
      <div class="header-logo">
        <a class="link-to-home" href="index.html" title="GG-construst | Home page">
          <div class="header-logo-image">
            <img src="images/logos/logo.svg" alt="gg-construct logo">
          </div>
          <span class="logo-title">GG VLOERBEKLEDING</span>
        </a>
      </div>
      <nav class="topnav">
        <!-- <ul>
         <li class="topnav-item">
            <a class="parent-link" href="">Home</a>
          </li>
        <li class="topnav-item">
          <a class="parent-link" href="">Over ons</a>
          <ul class="topnav-dropdown-column">
            <li><a href="">Long child link for testing</a></li>
            <li><a href="">Child link</a></li>
            <li><a href="">Child link</a></li>
            <li><a href="">Child link</a></li>
            <li><a href="">Child link</a></li>
            <li><a href="">Child link</a></li>
            <li><a class="more" href="">More...</a></li>
          </ul>
        </li>
        <li class="topnav-item parent">
          <a class="parent-link" href="">Activiteiten</a>
          <ul class="topnav-dropdown-column">
            <li><a href="">Link link link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a class="more" href="">More...</a></li>
          </ul>
        </li>
        <li class="topnav-item">
          <a class="parent-link" href="">Referenties</a>
          <ul class="topnav-dropdown-column">
            <li><a href="">Link link link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a class="more" href="">More...</a></li>
          </ul>
        </li>
        <li class="topnav-item">
          <a class="parent-link" href="">Nieuws</a>
          <ul class="topnav-dropdown-column">
            <li><a href="">Link link link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a class="more" href="">More...</a></li>
          </ul>
        </li>
        <li class="topnav-item">
          <a class="parent-link" href="">Vacatures</a>
          <ul class="topnav-dropdown-column">
            <li><a href="">Link link link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a class="more" href="">More...</a></li>
          </ul>
        <li class="topnav-item">
          <a class="parent-link" href="">Contact</a>
        </li>
      </ul> -->
        <div class="topnav-btns">
          <a class="btn btn-default btn-call" href="tel:+32472815575">
            <img src="images/icons/phone-call.svg" alt="phone">
            <img src="images/icons/dial-pad.svg" alt="dial-pad">
          </a>
          <button class="btn btn-search">
            <img src="images/icons/search.svg" alt="search button">
          </button>
        </div>
      </nav>
    </div>
  `
});

Vue.component('toggle-menu', {
  template: `
  <div id="menuToggle">
      <input type="checkbox">
      <span></span>
      <span></span>
      <span></span>
      <ul class="mobile-dropdown-column">
      </ul>
    </div>
  `
});

Vue.component('search', {
  template: `
  <div class="search">
      <div class="search-modal">
        <div class="search_container">
          <div class="search_intro-placeholder">
            <div class="search_intro">
              What are you looking for?
            </div>
          </div>
          <form id="formMenuSearch" name="query" action="" method="GET">
            <div class="search_input">
              <div class="search-wrapper">
                <input type="search" class="search-box" placeholder="Plaster" autofocus>
              </div>
              <div class="search_submit">
                <button class="btn-default" type="submit">
                <img src="images/icons/loupe.svg" alt="search">
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="search_placeholder-suggestions">
          <div class="search_wrapper-suggestions">
            <span></span>
            <ul class="search_list-suggestions">
              <li>
                <a class="search_link" href="nohome.html">Plaster</a>
                <span>|</span>
              </li>
              <li>
                <a class="search_link" href="nohome.html">Ground</a>
                <span>|</span>
              </li>
              <li>
                <a class="search_link" href="nohome.html">Walls</a>
                <span>|</span>
              </li>
              <li>
                <a class="search_link" href="nohome.html">Paint</a>
                <span>|</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
});

var app = new   Vue({
el: '#header'
})
