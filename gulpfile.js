var gulp = require('gulp');
var minify = require('gulp-clean-css')
var sass = require('gulp-sass')


gulp.task("minify",function(){
    return gulp.src('src/scss/style.css')
    .pipe(minify())
    .pipe(gulp.dest('dist/css'))
})

gulp.task("sass",function(){
    return gulp.src('src/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
})


gulp.task("default",function(){
    gulp.watch('src/scss/*.scss',gulp.series('sass'))
})