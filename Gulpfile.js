// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Compile Our Sass
gulp.task('sass', function () {
    return gulp.src('./app/assets/styles/*.scss')
        .pipe(sourcemaps.init())
        // .pipe(plumber({
        //     errorHandler: function (error) {
        //         console.log(error.toString());
        //         this.emit('end');
        //     }
        // }))
        .pipe(concat('styles.min.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./app/assets/styles'))
        .pipe(browserSync.stream());
});

// Init server
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

// Watch Files For Changes
gulp.task('watch', function () {
    browserSync.watch("./app/assets/styles/*.scss", ['sass']);
    browserSync.watch("./app/assets/javascripts/**/*.js").on('change', reload);
    browserSync.watch("./app/**/*.html").on('change', reload);

});

// Default Task
gulp.task('default', ['sass', 'serve', 'watch']);