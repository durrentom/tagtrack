module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  	handlebars: {
  		compile: {
  			options: {
  				namespace: "TT"
  			},
  			files: {
  				"templates.js": "tpl/*.hbs"
  			}
  		}
  	}
  });

  // Load the plugin that provides the "handlebars" task.
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // Default task(s).
  grunt.registerTask('default', ['handlebars']);

};


