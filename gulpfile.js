var gulp      = require('gulp');
var webserver = require('gulp-webserver'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    mincss = require('gulp-minify-css'),
    uglifyjs = require('gulp-uglifyjs');

// Ya no es necesario --- DEPRECATED
/*
gulp.task('webserver',function () {
   gulp.src('static/public')
      .pipe(webserver({
         livereload:true,
         open:true
      }));
});
*/
//IMPLEMENTAR TAREAS DE BUILD
gulp.task('sass', function () {
    gulp.src(['static/public/sass/main.scss'])
        .pipe(sass())
        .pipe(mincss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('static/public/css/'));
});

gulp.task('watch', function (){
    gulp.watch(['static/public/sass/main.scss'], ['sass']);
//    gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['watch']);