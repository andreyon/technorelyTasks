const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

function html() {
    return gulp.src('./src/*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('./dist'));
}

function css() {
    return gulp.src('./src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
}

function clean() {
    return gulp.src('./dist/styles.css')
        .pipe(cleanCSS({level: 2}))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./dist'));
}

function watch() {
    gulp.watch('./src/*.html', html);
    gulp.watch('./src/*.scss', css);
    gulp.watch('./dist/styles.css', clean);
}

gulp.task('html', html);
gulp.task('css', css);
gulp.task('clean', clean);


gulp.task('build', gulp.parallel('html', 'css', 'clean'));
gulp.task('serve', watch);