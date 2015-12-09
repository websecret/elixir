# Secret elixir

Secret elixir is a simplified version of [Laravel elixir] created special for frontend tasks.

## Installation

```
npm install secret-elixir --save
```

## Usage

Create `gulpfile.js` in the base directory.

Example:
```
var elixir = require('secret-elixir');

elixir(function (mix) {
    //working with single file
    mix.less('./path/to/less/file', './path/to/build/destination');
    //or array of files
    mix.scripts([
        './path/to/first/js/file',
        './path/to/second/js/file',
    ], './path/to/build/destination);
    //or glob
    mix.copy('./path/to/files/*', './path/to/destination');
});
```
Run with `gulp` or `gulp watch` for real time updating.
Also, there is a `--production` flag used for minification.

## Available methods:

### CSS
`mix.styles` - concatenates `css` files + autoprefixer

### JS
`mix.scripts` - concatenates `js` files  
`mix.babel` - transpiles `ES6` to `ES5`

### Less
`mix.less` - compiles less to css + autoprefixer

### HTML
`mix.html` - passes `html` files to `gulp-rigger`

### Utils
`mix.copy` - copies files to destination  
`mix.concat` - concatenates files (useful when there is no need of minification in production mode)

[Laravel elixir]: <https://github.com/laravel/elixir>