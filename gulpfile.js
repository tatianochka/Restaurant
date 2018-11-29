const         gulp = require('gulp'),
              sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
        sourcemaps = require('gulp-sourcemaps'),
            cssmin = require('gulp-cssmin'),
            rename = require('gulp-rename'),
             babel = require('gulp-babel'),
            concat = require('gulp-concat'),
            uglify = require('gulp-uglify-es').default,
          imagemin = require('gulp-imagemin'),
          pngquant = require('imagemin-pngquant'),
             watch = require('gulp-watch'),
       browserSync = require('browser-sync').create(),
             clean = require('gulp-clean'),
       runSequence = require('run-sequence');

const path = {
    build: {
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/',
        json: 'dist/json/'
    },
    src: './app',
    watch: {
        html: 'app/**/*.html',
        js: 'app/js/**/*.js',
        style: 'app/style/**/*.scss',
        img: 'app/img/**/*.*',
    },
    clean: './build'
};

gulp.task('scss', function(){
    return gulp.src(`${path.src}/scss/**/*.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
});

gulp.task('js', function () {
    return gulp.src('./app/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
});

gulp.task('html', function () {
    return gulp.src(`${path.src}/*.html`)
        .pipe(gulp.dest(path.build.html))
});

gulp.task('json', function () {
    return gulp.src(`${path.src}/json/**/*.json`)
        .pipe(gulp.dest(path.build.json))
});

gulp.task('clr', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('fonts', function() {
    gulp.src(`${path.src}/fonts/**/*.*`)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('img', function () {
    return gulp.src(`${path.src}/img/**/*.*`)
        .pipe(imagemin({
            progressive: true,
            svgPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(path.build.img));
});

gulp.task('watch', function(){
    watch(`${path.src}/scss/**/*.scss`, function(event, cb) {
        gulp.start('scss');
    });
    watch(`${path.src}/js/**/*.js`, function(event, cb) {
        gulp.start('js');
    });
    watch(`${path.src}/*.html`, function(event, cb) {
        gulp.start('html');
    });
    watch(`${path.src}/img/**/*.*`, function(event, cb) {
        gulp.start('img');
    });
    watch(`${path.src}/fonts/**/*.*`, function(event, cb) {
        gulp.start('fonts');
    });
    watch(`${path.src}/json/**/*.*`, function(event, cb) {
        gulp.start('json');
    });
});

gulp.task('build', function(callback) {
    runSequence('clr',
        ['scss', 'js', 'fonts', 'html', 'img', 'json'],
        callback);
});

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: path.build,
            index: 'index.html'
        }
    });
    browserSync.watch(`${path.build}/**/*.*`).on('change', browserSync.reload)
});

gulp.task('default', function(callback) {
    runSequence('build',
        ['build', 'watch', 'server'],
        callback);
});
