var gulp = require('gulp'),
gp_concat = require('gulp-concat'),
gp_rename = require('gulp-rename'),
gp_uglify = require('gulp-uglify'),
cleanCSS = require('gulp-clean-css'),
htmlreplace = require('gulp-html-replace'),
image = require('gulp-image');

var tasks = [
  'js-minify',
  'css-minify',
  'html-replace',
  'image',
  'json',
  'fonts'
];

gulp.task('json', function() {
  gulp.src('json/static-vendors.json')
  .pipe(gulp.dest('dist/json'));
})

gulp.task('fonts', function() {
  gulp.src('fonts/*')
  .pipe(gulp.dest('dist/fonts'));
})

gulp.task('js-minify', function(){
  var scriptSrc = [
    'js/jquery.js',
    'js/bootstrap.min.js',
    'js/jquery.easing.min.js',
    'js/jquery.fittext.js',
    'js/wow.min.js',
    'js/creative.js',
    'leaflet.js',
    'node_modules/riot/riot.min.js',
    'js/tags/all.js',
    'js/riot-mount.js'
  ];

  return gulp.src(scriptSrc)
  .pipe(gp_concat('concat.js'))
  .pipe(gulp.dest('dist'))
  .pipe(gp_rename('all.min.js'))
  .pipe(gp_uglify())
  .pipe(gulp.dest('dist'));
});

gulp.task('css-minify', function(){
  return gulp.src(['css/**/**.css'])
  .pipe(gp_concat('concat.css'))
  .pipe(gulp.dest('dist'))
  .pipe(gp_rename('all.min.css'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist'));
});

gulp.task('html-replace', function() {
  gulp.src('index.html')
  .pipe(htmlreplace({
    'css': 'all.min.css',
    'js': 'all.min.js'
  }))
  .pipe(gulp.dest('dist/'));
});

gulp.task('image', function () {
  gulp.src('images/*')
  .pipe(image())
  .pipe(gulp.dest('dist/images'));

  gulp.src('img/*')
  .pipe(image())
  .pipe(gulp.dest('dist/img'));
});

gulp.task('default',tasks, function(){});
