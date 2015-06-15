var chromeExtensionTabId = 0;

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', '*.js'],
      options: {
        globals: {
          jQuery: true
        },
      }
    },
    exec: {
        reloadChromeTab: {
            cmd: function() {
                return chromeExtensionTabId ? "chrome-cli reload -t " + chromeExtensionTabId : "chrome-cli open chrome://extensions && chrome-cli reload"; 
            }
        }
    },
    handlebars: {
        compile: {
            options: {
                namespace: "TT"
            },
            files: {
                "templates.js": "tpl/*.hbs"
            }
        }
    },

    watch: {
        js: {
            files: [
                ['<%= jshint.files %>', '*.css']
            ],
            tasks: [
                'chrome_extension_reload'
            ]
        },
        hbs: {
            files: [
                'tpl/*.hbs'
            ],
            tasks: [
                'handlebars',
            ]
        }
    },

    /**
      Executes "chrome-cli list tabs", grabs stdout, and finds open extension tabs ID's.
      Sets variable chromeExtensionTabId to the first extension tab ID
      */
    external_daemon: {
        getExtensionTabId: {
            options: {
                verbose: true,
                startCheck: function(stdout, stderr) {

                    // Find any open tab in Chrome that has the extensions page loaded, grab ID of tab
                    var extensionTabMatches = stdout.match(/\[\d{1,5}\] Extensions/);

                    if(extensionTabMatches){
                      var chromeExtensionTabIdContainer = extensionTabMatches[0].match(/\[\d{1,5}\]/)[0];

                      chromeExtensionTabId = chromeExtensionTabIdContainer.substr(1, chromeExtensionTabIdContainer.length - 2);
                      console.log("Chrome Extension Tab #: " + chromeExtensionTabId);
                    }
                    return true;
                }
            },
            cmd: "chrome-cli",
            args: ["list", "tabs"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-external-daemon');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('chrome_extension_reload', function() {
        grunt.task.run(['external_daemon:getExtensionTabId', 'exec:reloadChromeTab']);
    });

};