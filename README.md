# Pippip v2

## About

Pippip v2 is a revision of the original Pippip Drupal/Wordpress theme, utilising Gulp, Browsersync, ES6 & SASS.

### Provided plugins

Usage notes for each plugin can be found in `assets/js/defaults.js`

-   Matchheight
    -   Equalise element heights
-   BaugetteBox
    -   Image lightbox
-   Choices
    -   Better select elements
-   Flickity
    -   Carousels
-   SmoothScroll
    -   Anchor scroll animation
-   VanillaModal
    -   Custom modal overlays

## Gulp

Pippip v2 is Gulp based. For information on installing Gulp see [https://gulpjs.com/](website)

Also included is [https://browsersync.io/](BrowserSync). This provides synchronised browser testing, allowing the dev to see the local site on multiple devices, with real time updates.

## Setup

Images:

-   Place all provided image assets in `assets/img`
-   If making a svg sprite, place images in `assets/svg`

Fonts:

-   Place all fonts in `/dist/fonts`

From the root pippip folder:

-   Run `npm install`
-   Update `localUrl` in `gulpfile.js` with local site domain
-   Run `gulp` to start compiling & watching the files

Foundation:

-   Row widths & gutters can be amended at `assets/sass/vendor/foundation/_settings.scss`

## CSS

Pippip v2 is SASS based.

-   `assets/sass/global.scss` contains all imports to generate single `dist/css/style.css`
-   **_ TODO _**

## JS

Pippip v2 is ES6 based, but gets converted to ES5 on compile

-   `assets/js/defaults.js` contains all the default plugins
-   `assets/js/global.js` is a blank file for global JS

---

#### Todo

-   svg sprite
-   img sprite?
-   this doc
-   add vars to plugin sass
-   nav & front sass
-   check all sass files
