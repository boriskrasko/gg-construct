Vue.component('topbar', {
  template: `
  <div class="topbar">
      <div class="flex-container">
        <div class="dropdown-list partners-list">
          <div class="dropdown-select">
            <div class="dropdown-title partners">
              <span>Onze partners</span>
              <div class="arrow"></div>
            </div>
            <div class="options">
              <a class="option" href="https://www.uzin.com" target="blink">
                <img src="images/logos/partners/uzin-logo.png" alt="uzin utz" title="Uzin Utz">
              </a>
              <a class="option" href="https://www.knauf.com" target="blink">
                <img src="images/logos/partners/knauf-logo.png" alt="knauf" title="Knauf">
              </a>
              <a class="option" href="https://www.forbo.com" target="blink">
                <img src="images/logos/partners/forbo-logo.png" alt="forbo" title="Forbo">
              </a>
              <a class="option" href="https://www.perfecty.be" target="blink">
                <img src="images/logos/partners/perfecty-logo.png" alt="perfecty" title="Perfecty">
              </a>
               <a class="option" href="https://www.campaert.be" target="blink">
                <img src="images/logos/partners/campaert-logo.png" alt="campaert" title="Campaert">
              </a>
              <a class="option" href="https://www.exclusivedecor.nl" target="blink">
                <img src="images/logos/partners/exclusive-logo.png" alt="exclusive" title="Exclusive">
              </a>
              <a class="option" href="https://www.grupa-wolff.eu" target="blink">
                <img style="background: #ddd; border-radius: 4px;" src="images/logos/partners/wolff-logo.png" alt="wolff" title="Wolff">
              </a>
              <a class="option" href="https://https://www.pspprojects.com/" target="blink">
                <img src="images/logos/partners/psp-logo.png" alt="psp" title="PSP">
              </a>
              <a class="option" href="https://www.generalfloor.com" target="blink">
                <img src="images/logos/partners/general-floor-logo.png" alt="general-floor" title="General-floor">
              </a>
            </div>
          </div>
        </div>
        <span class="separator"></span>
        <a class="topbar-contact-link" href="form.html">Contact</a>
      </div>
      <div class="flex-container">
      <div class="socials">
          <ul>
            <li><a class="ti-facebook" href="https://www.facebook.com/GGFloorsConstruct"></a></li>
            <li><a class="ti-linkedin" href="https://www.linkedin.com/company/ggvloerbekleding"></a></li>
            <li><a class="ti-instagram" href="https://www.instagram.com/gg_floors_constructions"></a></li>
          </ul>
        </div>
        <div class="dropdown-list available-languages">
          <div class="dropdown-select">
            <div class="dropdown-title current-lang">
              <span>NL</span>
              <div class="arrow"></div>
            </div>
            <ul class="options options-lang">
              <li class="option selected"><a href="#nl">NL</a></li>
              <li class="option"><a href="#en">EN</a></li>
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
        <a class="link-to-home" href="https://ggfloors-construct.be" target="_blank" rel="noopener" title="GG FLOORS & CONSTRUCT | Home page">
          <div class="header-logo-image">
            <img src="images/logos/logo.svg" alt="gg-construct logo">
          </div>
          <span class="logo-title">GG FLOORS & CONSTRUCT</span>
        </a>
      </div>
      <nav class="topnav">
        <ul>
         <li class="topnav-item">
            <a class="parent-link" href="home.html">Home</a>
          </li>
        <li class="topnav-item">
          <a class="parent-link" href="">Over ons</a>
        </li>
        <li class="topnav-item parent">
          <a class="parent-link" href="">Activiteiten</a>
          <ul class="topnav-dropdown-column">
            <li><a href="">Vloerder</a></li>
            <li><a href="">Schilderwerken</a></li>
            <li><a href="">Gyprocwerken</a></li>
            <li><a href="">Pleisterwerken</a></li>
            <li><a href="">Terrassen en opritten</a></li>
            <li><a href="">Dakwerken</a></li>
            <li><a href="">Gevels</a></li>
            <li><a href="">Renovatie</a></li>
            <li><a href="">Nieuwbouw</a></li>
            <li><a class="more topnav-dropdown-item" href="activiteiten.html">...</a></li>
          </ul>
        </li>
        <li class="topnav-item">
          <a class="parent-link" href="">Referenties</a>
        </li>
        <li class="topnav-item">
          <a class="parent-link" href="">Nieuws</a>
        </li>
        <li class="topnav-item">
          <a class="parent-link" href="">Vacatures</a>
        <li class="topnav-item">
          <a class="parent-link" href="contact.html">Contact</a>
          <!--<ul class="topnav-dropdown-column">
            <li><a href="">Contactformulier</a></li>
            <li><a href="">Bel ons</a></li>
            <li><a href="">Bedrijfsgegevens</a></li>
          </ul>-->
        </li>
      </ul>
        <div class="topnav-btns">
          <a class="btn btn-default btn-call" href="tel:+32472815575">
            <img src="images/icons/phone-call.svg" alt="phone">
            <img src="images/icons/dial-pad.svg" alt="dial-pad">
          </a>
          <button class="btn btn-search ti-search">
            <!-- <img src="images/icons/search.svg" alt="search button"> -->
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
                <a class="search_link" href="activiteiten.html">Plaster</a>
                <span>|</span>
              </li>
              <li>
                <a class="search_link" href="activiteiten.html">Ground</a>
                <span>|</span>
              </li>
              <li>
                <a class="search_link" href="activiteiten.html">Walls</a>
                <span>|</span>
              </li>
              <li>
                <a class="search_link" href="activiteiten.html">Paint</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
});

var app = new Vue({
  el: '#header'
})
