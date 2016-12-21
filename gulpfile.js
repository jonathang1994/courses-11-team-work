/**
 *
 * Gulpfile setup
 *
 * @since 1.0.0
 * @authors JBA Web Development Team
 * @package JBA Front-end Development
 */

// Project configuration
var project = 'JBA- Course Template', // Project name, used for build zip.
    url = 'http://localhost/self-awareness-1/pages/001.php', // Local Development URL for BrowserSync. Change as-needed.
    buildInclude = [
        // include common file types
        '**/*.php',
        '**/*.html',
        '**/*.css',
    ];

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        proxy: {
            target: url,
        }
    });

    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("pages/*.php").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/course.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css/"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
