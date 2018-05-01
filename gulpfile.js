var gulp = require('gulp'),
    pug = require('gulp-pug'),
    styl = require('gulp-stylus'),
    maps = require('gulp-sourcemaps'),
    pref = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    bs = require('browser-sync'),
    svgSprite = require('gulp-svg-sprites'),
    path = {
        src: {
            pug: 'src/pug/pages/*.pug',
            styl: 'src/static/stylus/*.styl',
            script: 'src/static/script/*.js',
            image : 'src/static/image/**/**/**/*',
            fonts: 'src/static/fonts/*',
            php: 'src/static/*.php',
            svg: 'src/static/svg/*'
        },
        build: {
            pug: 'build/',
            styl: 'build/',
            script: 'build/',
            image: 'build/image/',
            fonts: 'build/fonts/',
            php: 'build/',
            svg: 'build/'
        },
        watch: {
            pug: 'src/pug/**/*',
            styl: 'src/static/stylus/**/**/**/*',
            script: 'src/static/script/*.js',
            image : 'src/static/image/**/**/**/*',
            fonts: 'src/static/fonts/**/*',
            php: 'src/static/*.php',
            svg: 'src/static/svg/*'
        }
    }


gulp.task('pug', () => {
    return gulp.src(path.src.pug)
               .pipe(pug())
               .pipe(gulp.dest(path.build.pug))
});

gulp.task('styl', () => {
    return gulp.src(path.src.styl)
               .pipe(maps.init())
               .pipe(styl({
                   compress: true,
                   'include css': true
               }))
               .pipe(pref())
               .pipe(maps.write())
               .pipe(gulp.dest(path.build.styl))
});

gulp.task('js', () => {
    return gulp.src(path.src.script)
               .pipe(concat('main.js'))
               .pipe(uglify())
               .pipe(gulp.dest(path.build.script))
});

gulp.task('img', () => {
    return gulp.src(path.src.image)
               .pipe(gulp.dest(path.build.image))
});

gulp.task('fonts', () => {
    return gulp.src(path.src.fonts)
               .pipe(gulp.dest(path.build.fonts))
});

gulp.task('php', () => {
    return gulp.src(path.src.php)
               .pipe(gulp.dest(path.build.php))
});

gulp.task('svg:build', function () {
    return gulp.src(path.src.svg)
          .pipe(svgSprite({mode: "symbols"}))
          .pipe(gulp.dest(path.build.svg));
});

gulp.task('watch', () => {
    gulp.watch(path.watch.pug, gulp.series('pug'))
    gulp.watch(path.watch.styl, gulp.series('styl'))
    gulp.watch(path.watch.image, gulp.series('img'))
    gulp.watch(path.watch.fonts, gulp.series('fonts'))
    gulp.watch(path.watch.script, gulp.series('js'))
    gulp.watch(path.watch.php, gulp.series('php'))
    gulp.watch(path.watch.svg, gulp.series('svg:build'))
});

gulp.task('default', gulp.parallel(gulp.series('pug', 'fonts', 'styl', 'img', 'svg:build', 'js', 'php'), 'watch'));