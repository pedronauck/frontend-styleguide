'use strict';
module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('matchdep')
    .filterAll(['*','!grunt', '!time-grunt', '!assemble-*', '!matchdep'])
    .forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    site: grunt.file.readYAML('_config.yml'),
    deploy: grunt.file.readYAML('_deploy-config.yml'),

    watch: {
      assemble: {
        files: [
          '<%= site.app %>/{layouts,partials,pages,includes}/{,*/}*.{md,hbs,yml}'
        ],
        tasks: ['assemble:development']
      },
      js: {
        files: '<%= site.js %>/**/*.js',
        tasks: ['concat', 'uglify']
      },
      compass: {
        files: ['<%= site.sass %>/**/*.{scss,sass,css}'],
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
      options: {
        flatten: true,
        layout: '<%= site.layouts %>/default.hbs',
        partials: '<%= site.partials %>/**/*.hbs',
        plugins: ['assemble-contrib-permalinks'],
        permalinks: {
          structure: ':basename/index.html'
        }
      },
      development: {
        options: {
          sitePath: 'http://127.0.0.1:9000',
          assets: '<%= site.dist %>/<%= site.assets %>'
        },
        files: {'<%= site.dist %>/': ['<%= site.app %>/pages/*.hbs']}
      },
      production: {
        options: {
          sitePath: '<%= deploy.path %>',
          assets: '<%= deploy.path %>/<%= site.assets %>'
        },
        files: {'<%= site.dist %>/': ['<%= site.app %>/pages/*.hbs']}
      }
    },

    clean: ['<%= site.dist %>/**/*.{html,xml,css,png,jpg,gif,svg,js,gz}'],

    concat: {
      dist: {
        options: { separator: ";\n" },
        files: {
          '<%= site.dist %>/<%= site.assets %>/js/application.js': [
            '<%= site.js %>/vendor/jquery.js',
            '<%= site.js %>/vendor/prism.js',
            '<%= site.js %>/vendor/stellar.js',
            '<%= site.js %>/app.js'
          ]
        }
      }
    },

    uglify: {
      dist: {
        files: {
          '<%= site.dist %>/<%= site.assets %>/js/application.min.js': [
            '<%= site.dist %>/<%= site.assets %>/js/application.js'
          ]
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: '<%= site.dist %>/<%= site.assets %>/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= site.dist %>/<%= site.assets %>/images'
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

    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: '<%= site.dist %>/',
        src: ['**/*'],
        dest: '<%= site.dist %>/'
      }
    },

    copy: {
      main: {
        files: [{
          expand: true,
          cwd: '<%= site.images %>',
          src: '**/*',
          dest: '<%= site.dist %>/<%= site.assets %>/images'
        }, {
          expand: true,
          cwd: '<%= site.fonts %>',
          src: '**/*',
          dest: '<%= site.dist %>/<%= site.assets %>/fonts'
        }]
      }
    },

    compass: {
      dist: {
        options: { config: './config.rb' }
      }
    },

    'ftp-deploy': {
      build: {
        auth: {
          host: '<%= deploy.url %>',
          port: '<%= deploy.port %>',
          authKey: 'key1'
        },
        src: '<%= site.dist %>',
        dest: '<%= deploy.dest %>',
        exclusions: [
          '<%= site.dist %>/**/.DS_Store',
          '<%= site.dist %>/**/Thumbs.db'
        ]
      }
    }
  });

  grunt.registerTask('jsmin', [
    'concat',
    'uglify'
  ])

  grunt.registerTask('server', [
    'clean',
    'assemble:development',
    'compass:dist',
    'concat',
    'copy',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'assemble:production',
    'compass:dist',
    'jsmin',
    'copy',
    'imagemin',
    'htmlmin',
    'compress'
  ]);

  grunt.registerTask('deploy', [
    'build',
    'ftp-deploy'
  ]);

  grunt.registerTask('default', [
    'server'
  ]);
};
