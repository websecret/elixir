var gulp = require('gulp');
var Elixir = require('secret-elixir');

var $ = Elixir.Plugins;

Elixir.extend('concat', function(src, output) {
    var paths = new Elixir.GulpPaths().src(src).output(output);

    new Elixir.Task('concat', function() {
        this.log(paths.src, paths.output);

        return (
            gulp
                .src(paths.src.path)
                .pipe($.concat(paths.output.name))
                .pipe(gulp.dest(paths.output.baseDir))
        );
    })
    .watch(paths.src.path)
    .ignore(paths.output.path);
});
