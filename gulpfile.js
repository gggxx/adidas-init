const gulp = require('gulp');
const less = require('gulp-less');
const inline = require('gulp-inline-source');

gulp.task('less2css' , ()=>{
	gulp.src('./css/src/*.less')
	    .pipe( less() )
	    .pipe( gulp.dest( './css' ) )
})

gulp.task('inline' ,['less2css'] , ()=>{

	gulp.src('./main/*.html' )
	    .pipe( inline() )
	    .pipe( gulp.dest( './dist' ) )
})

gulp.task( 'watch' , ()=>{

	gulp.watch(['./css/src/*.less','./js/*.js'],['less2css','inline']);
})


gulp.task( 'default' , ['less2css' , 'inline' , 'watch']);