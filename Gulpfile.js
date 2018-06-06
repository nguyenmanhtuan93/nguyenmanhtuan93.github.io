// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var minifyCss = require('gulp-cssnano');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Compile Our Sass
gulp.task('sass', function () {
    return gulp.src('styles/*.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('styles'))
        .pipe(livereload());
});

// Watch Files For Changes
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['styles/*.scss'], ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);