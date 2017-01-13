var gulp   = require('gulp');
var Elixir = require('secret-elixir');
var pug = require('gulp-pug');
var config = Elixir.config;

Elixir.extend('pug', function(src, output) {
    var paths = new Elixir.GulpPaths().src(src).output(output);

    new Elixir.Task('pug', function() {
        this.log(paths.src, paths.output);

        return (
            gulp
                .src(paths.src.path)
                .pipe(pug(config.pug))
                .pipe(gulp.dest(paths.output.baseDir))
        );
    })
        .watch(paths.src.path)
        .ignore(paths.output.path);
});
