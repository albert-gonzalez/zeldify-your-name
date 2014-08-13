//Gruntfile
module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({

        less: {
            development : {
                options: {
                    compress: true,
                    paths: [
                        './components/bootstrap/less'
                    ]
                },
                files: {
                    "./app/dist/main.css": "./app/css/less/main.less",
                }
            }
        },
        requirejs: {
            compileApp: {
                options: {
                    baseUrl: ".",
                    mainConfigFile: 'app/js/main.js',
                    name: "app/js/ng-bootstrap",
                    out: "app/dist/app.js",
                    optimize: "uglify2"
                }
            }
        },
        watch: {
            less: {
                files: ['app/css/less/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            },
            requirejs: {
                files: ['app/js/**/*.js'],
                tasks: ['requirejs'],
                options: {
                    livereload: true
                }
            }
        },

        protractor: {
            options: {
                configFile: "protractor.conf.js",
                keepAlive: true,
                noColor: false,
                args: {
                }
            },
            app: {
                options: {
                    args: {
                        specs: ['test/app/*.spec.js']
                    }
                }
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less', 'requirejs']);
};
