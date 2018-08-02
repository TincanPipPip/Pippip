/* 

	Gulp File
	___________________________________

	USAGE:
	1 - Ensure you update $localUrl with your local server address for BrowserSync to work
	2 - Run 'gulp setup' to build images/sprites/sass/css/js
	4 - Run 'gulp' to set watch process

	OPTIONAL TASKS:
	'gulp images' - rerun images compression & sprite creation from /assets/img & /assets/svg

*/

var localUrl = "http://lh.vanilla.com:8080",
    gulp = require("gulp"),
    browserSync = require("browser-sync").create(),
    reload = browserSync.reload,
    plumber = require("gulp-plumber"),
    sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer"),
    sass = require("gulp-sass"),
    cleanCSS = require("gulp-clean-css"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    imagemin = require("gulp-imagemin"),
    svgSprite = require("gulp-svg-sprite"),
    paths = {
        js: ["./assets/js/**/*.js"],
        css: ["./assets/css/*.css"],
        sass: ["./assets/sass/**/*.scss"],
        imgs: ["./assets/img/**/*"],
        svg: ["./assets/svg/**/*.svg"],
        twig: ["**/*.html"],
        dist: ["./dist/"]
    };

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
 * Task - JS
 */

gulp.task("js", function() {
    gulp.src(paths.js)
        //.pipe(concat("scripts.js"))
        /* Uncomment to get unminified file */
        .pipe(gulp.dest("dist/js"))
        .pipe(rename("scripts.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist + "js"))
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
 * Task - Icons
 */

gulp.task("icons", function() {
    gulp.src(paths.svg)
        .pipe(plumber())
        .pipe(
            svgSprite({
                dest: "./",
                mode: {
                    css: {
                        dest: "./",
                        layout: "packed",
                        bust: false,
                        sprite: paths.dist + "img/icons.svg",
                        render: {
                            scss: {
                                dest: "./assets/sass/setup/_icon.scss",
                                template:
                                    "./assets/sass/setup/_icon-template.scss"
                            }
                        }
                    }
                },
                transform: [],
                variables: {
                    spriteName: "icon",
                    spriteDims: 32
                }
            })
        )
        .pipe(gulp.dest("./"));
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
 * Task - BrowserSync
 */

gulp.task("serve", () => {
    browserSync.init({
        //server: 'lh.gulp.com:8080',
        proxy: localUrl,
        files: "${assetsDir}**/*",
        ghostMode: false
    });
});

/*
 * Tasks
 */

gulp.task("images", ["minify", "icons"]);
gulp.task("setup", ["css", "sass", "js", "images"]);
gulp.task("default", ["watch", "serve"]);
