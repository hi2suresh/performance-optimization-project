'use strict';

const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    uglifycss = require('gulp-uglifycss'),
    image =require('gulp-image'),
    clean = require('gulp-clean');

gulp.task('concatCSS',function() {
    return gulp.src(['css/normalize.css','css/foundation.css',
              'css/basics.css','css/menu.css','css/hero.css','css/photo-grid.css',
              'css/modals.css','css/footer.css'])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('css'));
    
});

gulp.task('minifyCSS', ['concatCSS'], function(){
    gulp.src('css/app.css')
        .pipe(uglifycss())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('css'));
});


gulp.task('concatScripts', ['cleanScripts'],function() {
    return gulp.src(['js/jquery.js','js/fastclick.js','js/foundation.js','js/foundation.equalizer.js',
              'js/foundation.reveal.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('js'));
}); 

gulp.task('minifyScripts', ['concatScripts'], function(){
   gulp.src('js/app.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('compressPhotos', function(){
    gulp.src('img/photos/*')
        .pipe(image())
        .pipe(gulp.dest('img/photos/'));
});

gulp.task('compressAvatars', function(){
    gulp.src('img/avatars/*')
        .pipe(image())
        .pipe(gulp.dest('img/avatars/'));
});

gulp.task('compressLogo', function(){
    gulp.src('img/logo.png')
        .pipe(image())
        .pipe(gulp.dest('img/'));
});

gulp.task('compressImages',['compressPhotos','compressAvatars','compressLogo'], function(){
  console.log("Compressing Images");
});

gulp.task('cleanScripts', function () {
  return gulp.src(['js/app.js','js/app.min.js'], {read: false})
    .pipe(clean());
});

gulp.task('cleanImages', function () {
  return gulp.src(['img/photos/comp*'], {read: false})
    .pipe(clean());
});

gulp.task('default',['minifyCSS','minifyScripts'], function() {
    console.log('Default Task');
})