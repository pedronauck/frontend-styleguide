'use strict';
module.exports = function(grunt) {
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    site: grunt.file.readYAML('_config.yml'),

    watch: {
      assemble: {
        files: [
          '<%= site.app %>/{layouts,partials,pages}/{,*/}*.{md,hbs,yml}'
        ],
        tasks: ['assemble']
      },
      compass: {
        files: ['<%= site.sass%>/**/*.{scss,sass,css}'],
        tasks: ['compass']
      },
      livereload: {
        options: { livereload: true },
        files: [
          '<%= site.dist %>/{,*/}*.html',
          '<%= site.dist %>/{,*/}*.css',
          '<%= site.dist %>/{,*/}*.js',
          '<%= site.dist %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= site.dist %>'
          ]
        }
      }
    },

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= site.assets %>',
          layout: '<%= site.layouts %>/default.hbs',
          partials: '<%= site.partials %>/**/*.hbs'
        },
        files: {
          '<%= site.dist %>/': ['<%= site.app %>/pages/*.hbs']
        }
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= site.dist %>/**/*.{html,xml}'],

    compass: {
      dist: {
        options: { config: './config.rb' }
      }
    }
  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('server', [
    'clean',
    'assemble',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'assemble',
    'compass:dist'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
