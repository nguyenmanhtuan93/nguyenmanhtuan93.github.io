// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
// var livereload = require('gulp-livereload');
// var minifyCss = require('gulp-cssnano');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Compile Our Sass
gulp.task('sass', function () {
    return gulp.src('./styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(concat('styles.css'))
        .pipe(cleanCSS({debug: true}, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize}`);
            console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        .pipe(sourcemaps.write())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('./styles'))
        .pipe(browserSync.stream());
});

// Watch Files For Changes
gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./styles/scss/*.scss", ['sass']);
    gulp.watch("./javascripts/*.js").on('change', reload);
    gulp.watch("./*.html").on('change', reload);
});

// Default Task
gulp.task('default', ['sass', 'watch']);