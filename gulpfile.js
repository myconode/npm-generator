'use strict'

const gulp = require('gulp')

// Plugins
const jshint = require('gulp-jshint')

// File References
const ROOT = "./"
const gulpfile = ROOT + "gulpfile.js"
const MAIN = ROOT + "index.js"

// Task definition
gulp.task('lint', function(){
  let config = { node:true, asi:true, esnext:true }

  return gulp.src( [ gulpfile, MAIN ] )
    .pipe( jshint( config ) )
    .pipe( jshint.reporter('jshint-stylish') )

})

gulp.task('default', ['lint'] )
