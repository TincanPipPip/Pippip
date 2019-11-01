# Pippip v3

Contents:

- [About](#About)
- [Browser support](#browser-support)
- [Setup](#setup)
- [Laravel Mix](#laravel-mix)
- [CSS](#css)
- [Included helper classes](#included-helper-classes)
- [SASS file structure](#sass-file-structure)
- [Grid](#grid)
- [JS](#js)
- [Included JS files](#included-js-files)
- [Included plugins](#included-plugins)

## About

Pippip v3 is a Drupal 8 base theme, utilising Laravel Mix, Browsersync, ES6 & SASS.

#### Browser support

- Edge
- Chrome
- FF
- Safari

## Setup

- Place all provided image assets in `./assets/img`
- Place all fonts in `./dist/fonts`
- From the root pippip folder:
  - Run `npm install`
  - Update `localUrl` in `webpack.mix.js` with local site domain
  - Run `npm start` to start compiling & watching the files

## Laravel Mix

Pippip v3 runs [Laravel Mix](https://laravel.com/docs/5.7/mix). Run `npm start` to begin development.

### Tasks

1. `npm start` standard task, used for watching files. Spins up an instance of Browser Sync for cross device testing.
2. `npm run dev` builds all assets and optimises icon svgs.
3. `npm run production` builds all assets and optimises for production.

List of Laravel Mix options:

```
mix.js(src, output);
mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
mix.extract(vendorLibs);
mix.sass(src, output);
mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
mix.less(src, output);
mix.stylus(src, output);
mix.postCss(src, output, [require('postcss-some-plugin')()]);
mix.browserSync('my-site.dev');
mix.combine(files, destination);
mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
mix.copy(from, to);
mix.copyDirectory(fromDir, toDir);
mix.minify(file);
mix.sourceMaps(); // Enable sourcemaps
mix.version(); // Enable versioning.
mix.disableNotifications();
mix.setPublicPath('path/to/public');
mix.setResourceRoot('prefix/for/resource/locators');
mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
mix.options({
  extractVueStyles: false, Extract .vue component styling to file, rather than inline.
  processCssUrls: true, Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
  purifyCss: false, Remove unused CSS selectors.
  uglify: {}, Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
  postCss: [] Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
});
```

## CSS

Pippip v3 is [SASS](https://sass-lang.com) based. Folder structure loosely follows the [Patterlab methodology](https://patternlab.io/)

#### Included helper classes

- `.hidden` - forcibly hides element from view & screen readers

#### SASS file structure

- `./assets/sass/global.scss` contains all imports to generate single `dist/css/style.css`
- `./config/*` contains global variables
- `./helpers/*` contains animations, breakpoints & global mixins
- `./base/*` contains D8 specific, global and typography stylesheets
- `./templates/*` contains template level stylesheets (e.g. CT level)
- `./organisms/*` contains organism level stylesheets (e.g. header, footer)
- `./molecules/*` contains molecule level stylesheets (e.g. entities, nav)
- `./atoms/*` contains atom level stylesheets (e.g. buttons)

#### Grid

Pippip utilises [Reflex grid](http://reflexgrid.com/docs/) for grid layouts. Reflex grid is a lightweight flexbox based mobile-first grid system.

See [documentation](http://reflexgrid.com/docs/) for details & usage.

## JS

Pippip v3 is ES6 based (rather than jQuery) by default, and gets converted to ES5 on compile for better browser support.

#### Included JS files

- `assets/js/defaults.js` contains all the default plugins & global functions
- `assets/js/global.js` is a blank file for global project specific JS
- `assets/js/emmsg.js` contains emergency message js

#### Included plugins

Usage notes for each plugin can be found in `assets/js/defaults.js`

- [BaugetteBox](https://www.npmjs.com/package/baguettebox.js)
  - Image lightbox
- [Zenscroll](https://github.com/zengabor/zenscroll)
  - Anchor scroll animation
- [VanillaModal](https://www.npmjs.com/package/vanilla-modal)
  - Custom modal overlays
- [Van11y accessible accordion](https://github.com/nico3333fr/van11y-accessible-accordion-aria)
  - Accessible vanilla JS accordion
