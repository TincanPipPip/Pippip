/*
    Pippip v2 Gulpfile
*/

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
    eslint = require("gulp-eslint"),
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
            eslint({
                rules: {
                    "my-custom-rule": 1,
                    strict: 2
                },
                globals: ["jQuery", "$"],
                envs: ["browser"]
            })
        )
        .pipe(eslint.formatEach("compact", process.stderr))
        .pipe(eslint.format())
        .pipe(
            plumber(function(error) {
                gutil.log(error.message);
                this.emit("end");
            })
        )
        .pipe(
            tap(function(file) {
                // replace file contents with browserify's bundle stream
                file.contents = browserify(file.path, { debug: true })
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

gulp.task("js-watch", ["js"], function(done) {
    browserSync.reload();
    done();
});

/*
 * Task - SASS
 */

gulp.task("sass", function() {
    gulp.src(paths.sass)
        .pipe(
            plumber(function(error) {
                gutil.log(error.message);
                this.emit("end");
            })
        )
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(
            autoprefixer({
                browsers: ["last 3 versions", "ie 10", "iOS 8"]
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
 * Tasks
 */

gulp.task("default", ["sass", "js", "minify"], function() {
    browserSync.init({
        proxy: localUrl,
        files: `**/*`,
        ghostMode: false
    });

    gulp.watch(paths.js, ["js-watch"]);
    gulp.watch(paths.sass, ["sass"]);
    gulp.watch(paths.templates).on("change", reload);
});
