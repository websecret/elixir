var gulp   = require('gulp');
var Elixir = require('secret-elixir');
var rigger = require('gulp-rigger');

Elixir.extend('html', function(src, output) {
    var paths = new Elixir.GulpPaths().src(src).output(output);

    new Elixir.Task('html', function() {
        this.log(paths.src, paths.output);

        return (
            gulp
            .src(paths.src.path)
            .pipe(rigger())
            .pipe(gulp.dest(paths.output.baseDir))
        );
    })
    .watch(paths.src.path)
    .ignore(paths.output.path);
});
