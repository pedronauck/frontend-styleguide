'use strict';
module.exports = function(grunt) {
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    site: grunt.file.readYAML('_config.yml'),

    watch: {
      assemble: {
        files: [
          '<%= site.app %>/{layouts,partials,pages,includes}/{,*/}*.{md,hbs,yml}'
        ],
        tasks: ['assemble']
      },
      js: {
        files: '<%= site.js %>/**/*.js',
        tasks: ['concat', 'uglify']
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
          partials: '<%= site.partials %>/**/*.hbs',
          plugins: ['assemble-contrib-permalinks'],
          permalinks: {
            structure: ':basename/index.html'
          }
        },
        files: {
          '<%= site.dist %>/': ['<%= site.app %>/pages/*.hbs']
        }
      }
    },

    clean: [
      '<%= site.dist %>/**/*.{html,xml,css,png,jpg,gif,svg,js}'
    ],

    // concatenate scripts
    concat: {
      dist: {
        options: { separator: ";\n" },
        files: {
          '<%= site.dist %>/js/application.js': [
            '<%= site.js %>/vendor/jquery.js',
            '<%= site.js %>/vendor/prism.js',
            '<%= site.js %>/vendor/stellar.js',
            '<%= site.js %>/app.js'
          ]
        }
      }
    },

    // minification the javascripts scripts
    uglify: {
      dist: {
        files: {
          '<%= site.dist %>/js/application.js': [
            '<%= site.dist %>/js/application.js'
          ]
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: '<%= site.dist %>/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= site.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          '<%= site.dist %>/index.html': '<%= site.dist %>/index.html',
          '<%= site.dist %>/html/index.html': '<%= site.dist %>/html/index.html',
          '<%= site.dist %>/css/index.html': '<%= site.dist %>/css/index.html',
          '<%= site.dist %>/javascript/index.html': '<%= site.dist %>/javascript/index.html'
        }
      }
    },

    copy: {
      main: {
        files: [{
          expand: true,
          cwd: '<%= site.images %>',
          src: '**/*',
          dest: '<%= site.dist %>/images'
        }, {
          expand: true,
          cwd: '<%= site.fonts %>',
          src: '**/*',
          dest: '<%= site.dist %>/fonts'
        }]
      }
    },

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
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('jsmin', [
    'concat',
    'uglify'
  ])

  grunt.registerTask('build', [
    'clean',
    'compass:dist',
    'jsmin',
    'assemble',
    'copy',
    'imagemin',
    'htmlmin'
  ]);

  grunt.registerTask('server', [
    'clean',
    'compass:dist',
    'concat',
    'assemble',
    'copy',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('default', [
    'server'
  ]);
};
