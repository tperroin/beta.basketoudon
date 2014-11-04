module.exports = function (grunt) {

    grunt.registerTask('watch', ['watch']);

    grunt.initConfig({
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: [
                    'app/server/web/bundles/fosjsrouting/js/router.js',
                    'app/server/web/js/fos_js_routes.js',
                    'app/vendor/angular/angular.min.js',
                    'app/vendor/jquery/dist/jquery.min.js',
                    'app/vendor/semantic-ui/build/packaged/javascript/semantic.min.js',
                    'app/vendor/imgLiquid/js/imgLiquid-min.js',
                    'app/vendor/lodash/dist/lodash.min.js',
                    'app/vendor/restangular/dist/restangular.min.js',
                    'app/vendor/angular-ui-router/release/angular-ui-router.min.js',
                    'app/vendor/angular-http-auth/src/http-auth-interceptor.js',
                    'app/vendor/ngFx/dist/ngFx.min.js',
                    'app/src/**/*.js',
                    'app/src/js/**/*.js'

                ],
                dest: 'app/web/js/main.min.js'
            },
            css: {
                options: {
                    separator: ';'
                },
                src: [
                    'app/src/**/*.css',
                    'app/vendor/semantic-ui/build/packaged/css/semantic.min.css',
                    'app/vendor/jquery-focuspoint/css/focuspoint.css'
                ],
                dest: 'app/web/css/main.min.css'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            js: {
                files: {
                    'app/web/js/main.min.js': ['app/web/js/main.min.js']
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'app/web/css/main.min.css': ['app/web/css/main.min.css']
                }
            }
        },
        watch: {
            js: {
                files: [
                    'app/src/**/*.js',
                    'app/src/js/**/*.js',
                    'app/src/**/*.html',
                    'app/index.html'
                ],
                tasks: ['concat', 'uglify:js', 'cssmin'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: 'app/src/**/*.css',
                tasks: ['concat', 'cssmin'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

};
