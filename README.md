# Pippip v2

Contents:

1. [About](#About)
    - [Browser support](#browser-support)
1. [Setup](#setup)
1. [Gulp](#Gulp)
    - [Gulp tasks](#Gulp-tasks)
1. [CSS](#css)
    - [SASS file structure](#sass-file-structure)
    - [Grid](#grid)
1. [JS](#js)
    - [Included JS files](#included-js-files)
    - [Included plugins](#included-plugins)
1. [Todo](#todo)

## About

Pippip v2 is a revision of the original Pippip Drupal/Wordpress theme, utilising Gulp, Browsersync, ES6 & SASS.

#### Browser support

-   IE10 +
-   Edge
-   Chrome
-   FF
-   Safari

## Setup

1. Images:

    - Place all provided image assets in `./assets/img`
    - ~~If making a svg sprite, place images in `./assets/svg`~~

2. Fonts:

    - Place all fonts in `./dist/fonts`

3. From the root pippip folder:

    - Run `npm install`
    - Update `localUrl` in `gulpfile.js` with local site domain
    - Run `gulp` to start compiling & watching the files

## Gulp

Pippip v2 utilises Gulp.js for better workflow. For information on installing Gulp see [website](https://gulpjs.com/)

Also included is [BrowserSync](https://browsersync.io/). This provides synchronised browser testing, allowing the dev to see the local site on multiple devices, with real time updates.

#### Gulp tasks

-   `js` - lints, compiles to ES5 & minifies to `./dist/js` folder
-   `sass` - lints, compiles via uatoprefixer & minifies to `./dist/css` folder
-   `images` - minifies all images in `./assets/img` and moves to `./dist/img` folder
-   `default` - primary task, runs all tasks, initialises Browsersync & watches for any file changes

## CSS

Pippip v2 is [SASS](https://sass-lang.com) based.

#### SASS file structure

-   `assets/sass/global.scss` contains all imports to generate single `dist/css/style.css`
-   **TODO** Animate optional but there [site](https://github.com/tgdev/animate-sass)
-   **TODO**

#### Grid

Pippip utilises [Reflex grid](http://reflexgrid.com/docs/) for grid layouts. Reflex grid is a lightweight flexbox based mobile-first grid system.

See [documentation](http://reflexgrid.com/docs/) for details & usage.

## JS

Pippip v2 is ES6 based (rather than jQuery) by default, and gets converted to ES5 on compile for better browser support.

#### Included JS files

-   `assets/js/defaults.js` contains all the default plugins
-   `assets/js/global.js` is a blank file for global JS

#### Included plugins

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

---

#### Todo

-   this doc
-   rm, matchheight, try align-content
-   flexbox .listing?
-   new grid docu & test
