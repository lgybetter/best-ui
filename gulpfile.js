'use strict'

const { series, src, dest } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const basepath = './packages/theme'

function compile () {
  return src(`${basepath}/src/*.scss`)
    .pipe(sass.sync())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./lib/theme'))
}

function copyfont () {
  return src(`${basepath}/src/fonts/**`)
    .pipe(cssmin())
    .pipe(dest('./lib/theme/fonts'))
}

exports.build = series(compile, copyfont)
