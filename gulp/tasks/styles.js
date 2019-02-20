const gulp = require('gulp')
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const simpleVars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const mixins = require('postcss-mixins');


gulp.task("styles", function () {
 return gulp.src('./app/assets/styles/styles.css')
 .pipe(postcss([cssImport, mixins, autoprefixer, simpleVars, nested]))
 .on('error', function(errorInfo) {
  console.log(errorInfo.toString())
  this.emit('end');
 })
 .pipe(gulp.dest('./app/temp/styles'));
})