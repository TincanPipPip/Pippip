import baguetteBox from "baguettebox.js";
import Choices from "choices.js";
import SmoothScroll from "smooth-scroll";
import VanillaModal from "vanilla-modal";
//import Flickity from "flickity";

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
    const multipleDefault = new Choices("select");
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
        Achor scroll
        url: https://www.npmjs.com/package/smooth-scroll
        -----------------------------------------------
    
        Usage:
        <a href="#target-id" class="scroll"></a>
    */
if (document.querySelectorAll("a.scroll")) {
    const scroll = new SmoothScroll("a.scroll", {
        updateURL: false,
        popstate: false
    });
}

/*
        Modal links
        url: https://www.npmjs.com/package/vanilla-modal
        -----------------------------------------------
    
        Usage:
        <a href="#target-id" data-modal-open></a>
    
        <div id="target-id" data-modal-content class="modal-content"></div>

        Note: If not using, remove @import "modules/modal"; from `assets/sass/global.scss`
    */
const modal = new VanillaModal({ clickOutside: true, closeKeys: [27] });

/*
        Menu burger
    */
const navToggle = document.getElementById("js-navToggle");
if (navToggle) {
    navToggle.addEventListener("click", function(e) {
        document.body.classList.toggle("nav-open");
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
