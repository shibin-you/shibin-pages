const {
    series,
    parallel,
    dest,
    src
} = require('gulp')
const loadPlugins = require('gulp-load-plugins')
const plugins = loadPlugins()

const script = () => {
    return src('src/**/*.js')
        .pipe(
            plugins.babel({
                presets: ['@babel/preset-env']
            })
        ).pipe(dest('dist'))
}
const page = () => {
    return src('src/*.html')
        .pipe(plugins.ejs({
            title: 'hello word',
            content: 'You are vary good'
        }))
        .pipe(dest('dist'))
}
const build = parallel(script, page)
module.exports = {
    build,
    page
}