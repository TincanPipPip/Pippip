import baguetteBox from "baguettebox.js";
import Choices from "choices.js";
import zenscroll from "zenscroll";
import LazyLoad from "vanilla-lazyload";
//import Flickity from "flickity";
//require('flickity-imagesloaded');
import Accordions from "van11y-accessible-accordion-aria";

// Global function to toggle states
window.toggleState = function(el, on, off) {
  el.setAttribute(
    "data-state",
    el.getAttribute("data-state") === on ? off : on
  );
};

/*
        Image galleries
        url: https://www.npmjs.com/package/flickity
        -----------------------------------------------
    
        Usage:
        <div class="gallery">
            <a href="path-to-large-image" data-caption="">
                <img src="path-to-thumbnail" alt="" />
            </a>
        </div>

        Note: If not using, remove @import "../../node_modules/baguettebox.js/src/baguetteBox"; from `assets/sass/global.scss`
    */

if (document.querySelectorAll(".gallery")) {
  baguetteBox.run(".gallery");
}

/*
        Better <select> elements
        url: https://www.npmjs.com/package/choices.js
        -----------------------------------------------
    
        Usage:
        Selects all <select> elements by default

        Note: If not using, remove @import "../../node_modules/choices.js/assets/styles/scss/choices"; from `assets/sass/global.scss`
    */
if (document.querySelectorAll("select").length > 0) {
  const selectElements = new Choices("select");
}

/*
        Carousel
        url: https://www.npmjs.com/package/flickity
        -----------------------------------------------
    
        Usage:
        <div class="carousel">
            <div class="carousel-cell">
                <!-- slide content -->
            </div>
        </div>

        Note: Disabled by default. To enable uncomment import above and code below and uncoment @import "../../node_modules/flickity/css/flickity.css"; from `assets/sass/global.scss`

        const flickity = new Flickity(".carousel", {
            cellAlign: "left",
            cellSelector: ".carousel-cell",
            contain: true,
            imagesLoaded: true
        });
    */

/*
        Menu burger
    */
const menuBurgerBtn = document.getElementById("js-navToggle");

if (menuBurgerBtn) {
  menuBurgerBtn.addEventListener("click", function(e) {
    toggleState(document.body, "nav-open", "nav-closed");
  });
}

/*
        Automatically open external links in new tab
    */
const links = document.links;

for (let i = 0, linksLength = links.length; i < linksLength; i++) {
  if (links[i].hostname != window.location.hostname) {
    links[i].target = "_blank";
  }
}

// LazyLoad
const lazyLoadImages = new LazyLoad();
