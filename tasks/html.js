var gulp    = require('gulp');
var Elixir = require('secret-elixir');
var rigger = require('rigger');

Elixir.extend('html', function(src, output) {
    var paths = new Elixir.GulpPaths().src(src).output(output);

    new Elixir.Task('html', function() {
        return gulp.src(paths.src.path)
            .pipe(rigger())
            .pipe(gulp.dest(paths.output.path));
    })
    .watch(paths.src.path)
    .ignore(paths.output.path);
});