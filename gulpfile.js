var gulp = require('gulp');

// Copy third party libraries from /node_modules into /src/docs/asciidoc/vendor
gulp.task('vendor', function() {

  // Bootstrap
  gulp.src([
      './bower_components/bootstrap/dist/**/*',
      '!./bower_components/bootstrap/dist/css/bootstrap-grid*',
      '!./bower_components/bootstrap/dist/css/bootstrap-reboot*'
    ])
    .pipe(gulp.dest('./src/docs/asciidoc/vendor/bootstrap'));

  // jQuery
  gulp.src([
      './bower_components/jquery/dist/*',
      '!./bower_components/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./src/docs/asciidoc/vendor/jquery'));

    // popper.js
    gulp.src([
        './bower_components/popper.js/dist/umd/*'
    ])
    .pipe(gulp.dest('./src/docs/asciidoc/vendor/popper.js'));

    // fontawesome
    gulp.src([
        './bower_components/fontawesome/web-fonts-with-css/css/*'
    ])
    .pipe(gulp.dest('./src/docs/asciidoc/vendor/fontawesome'))

});

// Default task
gulp.task('default', ['vendor']);
