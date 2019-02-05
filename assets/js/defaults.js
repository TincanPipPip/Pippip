import baguetteBox from "baguettebox.js";
import Choices from "choices.js";
import MicroModal from 'micromodal';
import zenscroll from 'zenscroll';
import LazyLoad from "vanilla-lazyload";
//import Flickity from "flickity";
//require('flickity-imagesloaded');

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
    Modals
    url: https://micromodal.now.sh/
    -----------------------------------------------

    Usage:
    <a href="#" data-micromodal-trigger="modalID" title="Open "></a>

    <div id="modalID" class="modal" aria-hidden="true">
        <div tabindex="-1" data-micromodal-close>
            <div role="dialog" aria-modal="true">
                <a href="#close" aria-label="Close modal" class="modal-close">close</a>  
                ** content **
            </div>
        </div>
    </div>
*/

MicroModal.init();

// Fake close buttons because fuck IE
const closeBtns = document.querySelectorAll('a.modal-close');

function closeModal(thisBtn){
    thisBtn.addEventListener('click', function(e) {
        const thisModal = document.querySelectorAll('div.modal.is-open');
        
        thisModal[0].classList.remove('is-open');
        thisModal[0].setAttribute('aria-hidden',true);
    
        e.preventDefault();
    });
}

closeBtns.forEach(thisBtn => closeModal(thisBtn));

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

// LazyLoad
const myLazyLoad = new LazyLoad();