import MatchHeight from "matchheight";
import baguetteBox from "baguettebox.js";
import Choices from "choices.js";
import Flickity from "flickity";
import SmoothScroll from "smooth-scroll";
import VanillaModal from "vanilla-modal";

if (
    "querySelector" in document &&
    "localStorage" in window &&
    "addEventListener" in window
) {
    const body = document.body;

    baguetteBox.run(".gallery");

    const multipleDefault = new Choices(
        document.getElementById("choices-multiple-groups")
    );

    const flickity = new Flickity(".carousel", {
        cellAlign: "left",
        cellSelector: ".carousel-cell",
        contain: true
    });

    const scroll = new SmoothScroll("a[data-scroll]", {
        offset: function() {
            return -90;
        },
        updateURL: false,
        popstate: false
    });

    const modal = new VanillaModal({
        clickOutside: true,
        closeKeys: [27]
    });

    const navToggle = document.getElementById("js-navToggle");

    navToggle.addEventListener("click", function(e) {
        this.classList.toggle("active");

        body.classList.toggle("nav-open");
    });

    const links = document.links;

    for (let i = 0, linksLength = links.length; i < linksLength; i++) {
        if (links[i].hostname != window.location.hostname) {
            links[i].target = "_blank";
        }
    }
}
