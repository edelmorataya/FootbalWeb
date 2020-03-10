var gulp = require("gulp");
var merge = require('merge-stream');
var replace = require('gulp-string-replace');
var del = require('del');

/* Clean Dist */
gulp.task('clean-dist', () => {
    return del(['dist/**/*']);
});

/* Run Distribution */

gulp.task('dist', ()=>
{

    var filesJs = gulp.src(['node_modules/jquery/dist/jquery.min.js','node_modules/bootstrap/dist/js/bootstrap.min.js'])
                        .pipe(gulp.dest('dist/js'));
	
	var jsSweetA = gulp.src(['node_modules/sweetalert2/dist/sweetalert2.all.min.js'])
                        .pipe(gulp.dest('dist/js'));

    var filesCss = gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
                        .pipe(gulp.dest('dist/css'));
						
	var animateCss = gulp.src('node_modules/animate.css/animate.min.css')
                        .pipe(gulp.dest('dist/css'));

    var jqJS = gulp.src('jq.js')
                    .pipe(gulp.dest('dist'));
    
    var index = gulp.src('index.html')
                            .pipe(replace('node_modules/bootstrap/dist/css/bootstrap.min.css', 'css/bootstrap.min.css'))
							.pipe(replace('node_modules/animate.css/animate.min.css', 'css/animate.min.css'))
                            .pipe(replace('node_modules/jquery/dist/jquery.min.js', 'js/jquery.min.js'))
                            .pipe(replace('node_modules/bootstrap/dist/js/bootstrap.min.js', 'js/bootstrap.min.js'))
							.pipe(replace('node_modules/sweetalert2/dist/sweetalert2.all.min.js', 'js/sweetalert2.all.min.js'))
                            .pipe(replace('taskrunner', 'gulp'))
                            .pipe(gulp.dest('dist'));
    
    return merge(filesJs, jsSweetA, filesCss, animateCss, jqJS, index);
});
