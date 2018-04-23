const gulp = require('gulp'),
      scss = require('gulp-sass'),
      postcss = require('gulp-postcss'),
      cssnext = require('postcss-cssnext'),
      short = require('postcss-short'),
      rename = require('gulp-rename'),
      minifyCSS = require('gulp-csso');

gulp.task('styles', function () {
    const processors = [
        short,
        minifyCSS
    ];
  return gulp.src('scss/style.scss')
    .pipe(scss())
    .pipe(gulp.dest(''))
});



gulp.task('watch', ['styles'], function () {
  gulp.watch('scss/style.scss', ['styles'])
});