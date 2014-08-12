//Gruntfile
module.exports = function(grunt) {
    'use strict';
    //Initializing the configuration object
    grunt.initConfig({

      // Task configuration
        less: {
            development : {
                options: {
                    compress: true,  //minifying the result
                    paths: [
                        './components/bootstrap/less'
                    ]
                },
                files: {
                  //compiling frontend.less into frontend.css
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
                files: ['app/css/less/*.less'],  //watched files
                tasks: ['less'],                          //tasks to run
                options: {
                    livereload: true                        //reloads the browser
                }
            },
            requirejs: {
                files: ['app/js/**/*.js'],
                tasks: ['requirejs'],
                options: {
                    livereload: true                        //reloads the browser
                }
            }
        },

        protractor: {
            options: {
                configFile: "protractor.conf.js", // Default config file
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    //specs: ['test/app/appSpec.js']
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

    // Plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-protractor-runner');


    // Task definition
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less', 'requirejs']);
};
