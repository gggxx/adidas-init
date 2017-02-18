const gulp = require('gulp');
const less = require('gulp-less');
const inline = require('gulp-inline-source');

gulp.task('less2css' , ()=>{
	gulp.src('./css/src/*.less')
	    .pipe( less() )
	    .pipe( gulp.dest( './css' ) )
})

gulp.task('inline' , ()=>{

	gulp.src('./app.html' )
	    .pipe( inline() )
	    .pipe( gulp.dest( './dist/app-inline.html' ) )
})


gulp.task( 'default' , ['less2css' , 'inline']);