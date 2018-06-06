// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var browserSync = require('browser-sync').create();
var minifyCss = require('gulp-cssnano');

// Compile Our Sass
gulp.task('sass', function () {
    return gulp.src('style/sass/*.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('style'))
        .pipe(livereload());
});

// Watch Files For Changes
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['style/sass/*.scss'], ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);