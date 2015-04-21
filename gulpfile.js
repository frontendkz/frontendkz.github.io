/*-------------------------------------------------------------------
  Required plugins
-------------------------------------------------------------------*/
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    minifyCss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    uncss = require('gulp-uncss');

/*-------------------------------------------------------------------
  Dev tasks
-------------------------------------------------------------------*/

// imagemin
gulp.task('imagemin', function() {
  gulp.src('images/*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('images/'));
});


// css
gulp.task('css', function() {
  gulp.src('css/dev/**.css')
    .pipe(concat('index.css'))
    .pipe(uncss({
      html: ['index.html']
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest('css/'));
});

gulp.task('default', function() {
  // place code for your default task here
});