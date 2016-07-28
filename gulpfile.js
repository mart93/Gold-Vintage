"use strict"

var gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css'),
    notify = require('gulp-notify'),
    bourbon = require('bourbon');

// server connect
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
})

// html
gulp.task('html', function() {
    gulp.src('app/*.html')
    .pipe(notify())
    .pipe(connect.reload());
})

// libs
gulp.task('libs', ['html'], function() {
    gulp.src('app/libs/**/*')
    .pipe(connect.reload());
})

// sass
gulp.task('sass', function () {
    return gulp.src('app/sass/*.scss')
    .pipe(sass())
    .pipe(notify())
    .pipe(gulp.dest('app/css'))
    .pipe(connect.reload());
})

// autoprefixer
gulp.task('autoprefixer', function () {
    return gulp.src('app/css/*.css')
        .pipe(autoprefixer('last 35 version'))
        .pipe(gulp.dest('app/css'))
        .pipe(connect.reload());
})

// clean
gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
})

// build  
gulp.task('build', ['clean'], function () {
    return gulp.src('app/*.html')
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(useref())
        .pipe(gulp.dest('dist'));
})

// bower
gulp.task('bower', function () {
    gulp.src('./app/index.html')
    .pipe(wiredep({
        derectory:'app/libs'
    }))
    .pipe(gulp.dest('./app'));
})

// watch
gulp.task('watch', function (){
    gulp.watch('bower.json',['bower'])
    gulp.watch('app/css/*.css', ['autoprefixer'])
    gulp.watch('app/*.html',['html'])
    gulp.watch('app/libs/**/*',['libs'])
    gulp.watch('app/sass/*.scss',['sass']);
})

gulp.task('default', ['connect', 'html','libs','sass','autoprefixer','bower','clean','build','watch']);