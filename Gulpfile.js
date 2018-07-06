// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Compile Our Sass
gulp.task('sass', function () {
    return gulp.src('./assets/styles/*.scss')
        .pipe(concat('styles.min.css'))
        .pipe(sass())
        .pipe(gulp.dest('./assets/styles'))
        .pipe(browserSync.stream());
});

// Init server
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// Watch Files For Changes
gulp.task('watch', function () {
    browserSync.watch("./assets/styles/*.scss", ['sass']);
    browserSync.watch("./assets/javascripts/**/*.js").on('change', reload);
    browserSync.watch("./**/*.html").on('change', reload);

});

// Default Task
gulp.task('default', ['sass', 'serve', 'watch']);