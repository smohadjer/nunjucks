var gulp = require('gulp'),
	opn = require('opn'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat'),
	nunjucks = require('gulp-nunjucks');

// Rerun the task when a file changes
gulp.task('watch', function() {
	gulp.watch('app/views/*.html', ['templates']);
});

gulp.task('templates', function() {
		gulp.src('app/views/*.html')
			.pipe(nunjucks.precompile())
			.pipe(concat('templates.js'))
			.pipe(gulp.dest('app/resources/js'))
	}
);

gulp.task('connect', function() {
  connect.server({
	  port: 8080,
	  root: 'app'
  });
});

gulp.task('open', ['connect'], function () {
    return opn( 'http://localhost:8080' );
});

// serve development templates
gulp.task('serve', ['open', 'templates', 'watch']);
