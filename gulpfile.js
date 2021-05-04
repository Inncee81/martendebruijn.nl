const gulp = require('gulp'),
  { series, parallel } = require('gulp'),
  cleanCSS = require('gulp-clean-css'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  terser = require('gulp-terser');

const jsFiles = ['./server/src/js/*.js'],
  cssFiles = ['./server/src/css/normalize.css', './server/src/css/*.css'];

function css() {
  return gulp
    .src(cssFiles)
    .pipe(concat('styles.css'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest('./server/public/dist/'));
}
function es() {
  return gulp
    .src(jsFiles)
    .pipe(terser())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./server/public/dist/'));
}
function watch() {
  gulp.watch(cssFiles, css);
  gulp.watch(jsFiles, es);
}

const build = gulp.series(css, es);

exports.css = css;
exports.es = es;
exports.watch = watch;
exports.build = build;
exports.default = build;
