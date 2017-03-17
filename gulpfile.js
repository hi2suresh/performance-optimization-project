'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('concatCSS', function() {
    gulp.src(['css/normalize.css','css/foundation.css','css/arvo.css', 'css/ubuntu.css',
              'css/basics.css','css/menu.css','css/hero.css','css/photo-grid.css',
              'css/modals.css','css/footer.css'])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('css'));
    
});

gulp.task('concatScripts', function() {
    gulp.src(['js/jquery.js','js/fastclick.js','js/foundation.js','js/foundation.equalizer.js',
              'js/foundation.reveal.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('default',['concatCSS','concatScripts'], function() {
    console.log('Default Task');
})