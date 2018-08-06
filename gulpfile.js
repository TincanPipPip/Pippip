let localUrl = "http://lh.vanilla.com:8080",
    gulp = require("gulp"),
    browserSync = require("browser-sync").create(),
    reload = browserSync.reload,
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    sourcemaps = require("gulp-sourcemaps"),
    plumber = require("gulp-plumber"),
    imagemin = require("gulp-imagemin"),
    browserify = require("browserify"),
    buffer = require("vinyl-buffer"),
    uglify = require("gulp-uglify"),
    babel = require("babelify"),
    tap = require("gulp-tap"),
    gutil = require("gulp-util"),
    paths = {
        js: ["./assets/js/*.js"],
        css: ["./assets/css/*.css"],
        sass: ["./assets/sass/**/*.scss"],
        imgs: ["./assets/img/**/*"],
        svg: ["./assets/svg/**/*.svg"],
        templates: ["**/*.html"],
        dist: ["./dist/"]
    };

/*
 * Task - JS
 */

gulp.task("js", function() {
    return gulp
        .src(paths.js, { read: false })
        .pipe(
            tap(function(file) {
                gutil.log("bundling " + file.path);

                // replace file contents with browserify's bundle stream
                file.contents = browserify(file.path, {
                    debug: true
                })
                    .transform(babel)
                    .bundle();
            })
        )
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(paths.dist + "js"));
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
    gulp.watch(paths.templates).on("change", reload);
});

/*
 * Tasks
 */

gulp.task("default", ["serve", "watch"]);
