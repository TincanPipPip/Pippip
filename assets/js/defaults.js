//import MatchHeight from "matchheight";
import baguetteBox from "baguettebox.js";
import Choices from "choices.js";
import Flickity from "flickity";
import SmoothScroll from "smooth-scroll";
import VanillaModal from "vanilla-modal";

/*
        Matchheight
        url: https://www.npmjs.com/package/matchheight
    
        Usage:
        <div data-mh></div>
    
        Runs by default
    */
console.log("hi");
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

        Note: If not using, remove @import "modules/baguette"; from `assets/sass/global.scss`
    */
baguetteBox.run(".gallery");

/*
        Better <select> elements
        url: https://www.npmjs.com/package/choices.js
        -----------------------------------------------
    
        Usage:
        Selects all <select> elements by default

        Note: If not using, remove @import "modules/choices"; from `assets/sass/global.scss`
    */
const multipleDefault = new Choices("select");

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

        Note: If not using, remove @import "modules/flickity"; from `assets/sass/global.scss`
    */

const flickity = new Flickity(".carousel", {
    cellAlign: "left",
    cellSelector: ".carousel-cell",
    contain: true,
    imagesLoaded: true
});

/*
        Achor scroll
        url: https://www.npmjs.com/package/smooth-scroll
        -----------------------------------------------
    
        Usage:
        <a href="#target-id" data-scroll></a>
    */
const scroll = new SmoothScroll("a[data-scroll]", {
    offset: function() {
        return -90;
    },
    updateURL: false,
    popstate: false
});

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

navToggle.addEventListener("click", function(e) {
    this.classList.toggle("active");

    document.body.classList.toggle("nav-open");
});

/*
        Automatically open external links in new tab
    */
const links = document.links;

for (let i = 0, linksLength = links.length; i < linksLength; i++) {
    if (links[i].hostname != window.location.hostname) {
        links[i].target = "_blank";
    }
}