//importando elementos con require
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');

//Scripts
gulp.task('script', function(){
   gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/materialize-css/dist/js/materialize.js','assets/js/*.js']) 
    .pipe(concat('script.js'))
    //carpeta dist
    .pipe(gulp.dest('dist/js/'));
});

//Hoja de estilos
//marerialize
//sass
//css3
gulp.task('style',function(){
    gulp.src(['node_modules/materialize-css/dist/css/materialize.css','assets/sass/main.scss'])
     .pipe(sass().on('error', sass.logError))
     .pipe(concat('style.min.css'))
     .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', function() {
   gulp.watch('assets/sass/*.scss', ['style']);
});

//servidor WEB localhost puerto 8000
gulp.task('webserver', function(){
    gulp.src('../tastyfood/')
        .pipe(webserver({
        fallback: 'index.html',
        livereload: true,
        directoryListing:false,
        open: true,
        port: 8083
    }));
});

//gulp y las tareas que deberá ejecutar al hacer correr el comando gulp en el terminal
gulp.task('default',['script','style','webserver','watch']);