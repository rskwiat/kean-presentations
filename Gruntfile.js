module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    site: grunt.file.readJSON('app/settings/site.json'),

    connect: {
      server: {
        options: {
          port: '<%= site.port %>',
          base: '<%= site.destination %>',
          keepalive: true
        }
      }
    },

  });

  [
    'grunt-contrib-connect'
  ].forEach(function(task){
    grunt.loadNpmTasks(task);
  });
  
  grunt.registerTask('default', ['connect']);

}
