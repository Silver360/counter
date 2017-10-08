var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');

var path = {

    src: {
        css: 'src/scss/**/*.scss',
        js: './src/js/**/*.js',
        lib: './src/js/lib/**/*.js',
        img: './src/image'
    },

    public: {
        css: './public/css',
        js: './public/js',
        img: './public/image'
    }
};

gulp.task('sass', function () {
    return gulp.src(path.src.css)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.public.css))
        .pipe(browserSync.stream());
});

gulp.task('jshint', function() {
    return gulp.src(path.src.js)
        .pipe(jshint().on('error', sass.logError))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-js', function() {
    return gulp.src(path.src.js)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        //only uglify if gulp is ran with '--type production'
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.public.js))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    browserSync.init({
        server: './'
    });

    gulp.watch(path.src.css, ['sass'])
        .on('change', function (event) {
            console.log('File' + event.path + ' was ' + event.type + ', running tasks...');
        });

    gulp.watch(path.src.js, ['jshint', 'build-js'])
        .on('change', function (event) {
            console.log('File' + event.path + ' was ' + event.type + ', running tasks...');
        });

    gulp.watch('./index.html', ['sass', 'jshint', 'build-js'])
        .on('change', function (event) {
            console.log('File' + event.path + ' was ' + event.type + ', running tasks...');
            browserSync.reload();
        });
});

gulp.task('default', ['sass', 'jshint', 'build-js', 'watch']);