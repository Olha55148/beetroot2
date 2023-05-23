const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
function scss() {
  return gulp
    .src('./*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
};

function watch() {
  browserSync.init({
    server: "./"
});
  // gulp.watch('./*.scss', scss);
  gulp.watch('./*.scss', gulp.series( [scss, 'minify-css']));
  gulp.watch("./*.html").on('change', browserSync.reload);
  gulp.watch("./*.js").on('change', browserSync.reload);
}


gulp.task('minify-css', () => {
  return gulp.src('./style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./'));
});

exports.scss = scss;
exports.watch = watch;
exports.default = () => (
	gulp.src('./style.css')
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('./'))
);