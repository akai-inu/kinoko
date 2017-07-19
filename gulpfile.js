const gulp = require('gulp');
const ts = require('gulp-typescript');
const gls = require('gulp-live-server');

gulp.task('default', () => {
    return gulp.src('src/server/**/*.ts')
        .pipe(ts.createProject('tsconfig.json')())
        .js.pipe(gulp.dest('build/server'));
});

gulp.task('debug-serve', ['default'], () => {
    const server = gls.new('build/server/entry.js');
    server.start();

    // apply for foreground files
    gulp.watch('public/**', file => {
        server.notify.apply(server, [file]);
    })

    // restart server for background files
    gulp.watch('src/server/**/*.ts', ['default']);
    gulp.watch('build/server/**/*.js', server.start.bind(server));
});