var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
//gulpfile for P4
// include gulp
var gulp = require('gulp'); 
 
// include plug-ins
var jshint = require('gulp-jshint');
 
// JS hint task on Index level
gulp.task('jshint', function() {
  gulp.src('.js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
// JS hint task on Index level
gulp.task('jshint', function() {
  gulp.src('./views/js*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// include plug-ins
var minifyHTML = require('gulp-minify-html');
 
// minify primary HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = './*.html',
      htmlDst = './build';
 
  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

// minify secondary HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = './views/*.html',
      htmlDst = './build/views';
 
  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

// minify primary css
var minifyCSS = require('gulp-minify-css');

gulp.task('minifycss', function() {
	gulp.src('./css/*.css')
	.pipe(minifyCSS())
	.pipe(gulp.dest('./build/css/'));
});
gulp.task('minifycss', function() {
	gulp.src('./views/css/*.css')
	.pipe(minifyCSS())
	.pipe(gulp.dest('./build/views/css/'));
});

// include plug-ins
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
 
// minify primary js
gulp.task('jscripts', function() {
  gulp.src('./js/*.js')    
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'));
});

gulp.task('jscripts', function() {
  gulp.src('./views/js/main.js')    
   .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/views/js'));
});

//compress primary images
gulp.task('imagemin', function() {
  var imgSrc = './img/**/*',
      imgDst = './build/img';
 
  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

//compress secondary images

gulp.task('imagemin', function() {
  var imgSrc = './views/images/**/*',
      imgDst = './build/views/images';
 
  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});








