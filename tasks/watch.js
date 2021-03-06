var gulp = require('gulp');
var _ = require('underscore');
var batch = require('gulp-batch');
var Elixir = require('secret-elixir');

/*
 |----------------------------------------------------------------
 | Watcher
 |----------------------------------------------------------------
 |
 | When you want to keep an eye on your files for changes, and
 | then re-trigger Gulp, then you should use the gulp watch
 | command. This way, you can auto-compile on each save!
 |
 */

gulp.task('watch', function() {
    var tasks = _.sortBy(Elixir.tasks, 'name');
    var mergedTasks = {};

    tasks.forEach(function(task) {
        if (task.name in mergedTasks) {
            return mergedTasks[task.name].watchers = _.union(mergedTasks[task.name].watchers, task.watchers);
        }

        mergedTasks[task.name] = {
            name: task.name,
            watchers: Array.isArray(task.watchers) ? task.watchers : [task.watchers]
        };
    });

    _.sortBy(mergedTasks, 'name').forEach(function(task) {
        if (task.watchers.length > 0) {
            gulp.watch(task.watchers, batch(Elixir.config.batchOptions, function(events) {
                events.on('end', gulp.start(task.name));
            }));
        }
    });
});