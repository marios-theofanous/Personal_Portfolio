var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('css/styles.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch',['browserSync', 'sass'], function () {
    gulp.watch('**/*.scss', ['sass']);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
    //Other watchers
})

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: ''
        }
    })
})

gulp.task('useref', function () {
    return gulp.src('*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
})

gulp.task('images', function(){
    return gulp.src('img/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/img'))
});

gulp.task('clean:dist', function() {
    return del.sync('dist');
})

gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['sass', 'useref', 'images'],
        callback
    )
})

gulp.task('default', function (callback) {
    runSequence(['sass','browserSync', 'watch'],
        callback
    )
})