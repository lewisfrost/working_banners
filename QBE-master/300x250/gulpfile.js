var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify');
    minify = require('gulp-minify-css'),
    webserver = require('gulp-webserver'),
    zip = require('gulp-zip');

gulp.task('js', function () {
    gulp.src(['js/**/*.js'])
        .pipe(concat('banner.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('banner/'))
        .pipe(notify({
            message: 'Finished minifying JavaScript'
        }));
});

gulp.task('html', function () {
    gulp.src('banner/*.html')
});

gulp.task('sass', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest('banner/'));
});

gulp.task('watch', function () {
    gulp.watch('js/**/*', ['js']);
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch(['banner/*.html'], ['html']);
});

gulp.task('webserver', function () {
    gulp.src('banner/')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('zip', function() {
 return gulp.src('banner/*')
   .pipe(zip('QBE_300x250.zip'))
   .pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch', 'html', 'js', 'sass', 'zip', 'webserver']);
