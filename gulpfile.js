let localUrl = "http://lh.vanilla.com:8080",
    gulp = require("gulp"),
    webpack = require("webpack"),
    webpackStream = require("webpack-stream"),
    webpackConfig = require("./webpack.config.js"),
    browserSync = require("browser-sync").create(),
    reload = browserSync.reload,
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    sourcemaps = require("gulp-sourcemaps"),
    plumber = require("gulp-plumber"),
    imagemin = require("gulp-imagemin"),
    paths = {
        assets: ["./assets"],
        js: ["./assets/js/**/*.js"],
        css: ["./assets/css/*.css"],
        sass: ["./assets/sass/**/*.scss"],
        imgs: ["./assets/img/**/*"],
        svg: ["./assets/svg/**/*.svg"],
        twig: ["**/*.html"],
        dist: ["./dist/"]
    };

/*
 * Task - JS
 */

gulp.task("js", () => {
    gulp.src(`${paths.js}`)
        .pipe(
            webpackStream(webpackConfig),
            webpack
        )
        .pipe(gulp.dest("./dist/js"));
});

/*
 * Task - Serve
 */

gulp.task("serve", () => {
    browserSync.init({
        //server: 'lh.gulp.com:8080',
        proxy: localUrl,
        files: `**/*`,
        ghostMode: false
    });
});

/*
 * Task - SASS
 */

gulp.task("sass", function() {
    gulp.src(paths.sass)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(
            autoprefixer({
                browsers: ["last 2 versions", "ie 9", "iOS 8"]
            })
        )
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(paths.dist + "css"))
        .pipe(browserSync.stream());
});

/*
 * Task - CSS
 */

gulp.task("css", function() {
    gulp.src(paths.css)
        .pipe(cleanCSS({ compatibility: "ie8" }))
        .pipe(concat("vendor.css"))
        .pipe(gulp.dest(paths.dist + "css"))
        .pipe(reload({ stream: true }));
});

/*
 * Task - Minify Images
 */

gulp.task("minify", () => {
    gulp.src(paths.imgs)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.dist + "img"));
});

/*
 * Task - Watch
 */

gulp.task("watch", function() {
    gulp.watch(paths.sass, ["sass"]);
    gulp.watch(paths.js, ["js"]);

    // BrowserSync refresh on template change
    gulp.watch(paths.twig).on("change", reload);
});

/*
 * Tasks
 */

gulp.task("default", ["serve", "watch"]);
