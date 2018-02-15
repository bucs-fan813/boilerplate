module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    concat: {
      options: {
        separator: ';\n'
      },
      js: {
        src: ['assets/src/js/jquery.js', 'assets/src/js/bootstrap.bundle.js', 'assets/src/js/jqBootstrapValidation.js', 'assets/src/js/*.js'],
        dest: 'assets/dist/script.js'
      }
    },
    uglify: {
      dist: {
        options: {
          //          sourceMap: true,
        },
        files: {
          'assets/dist/script.min.js': ['assets/dist/script.js'],
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'assets/dist/style.min.css': ['assets/src/css/*.css']
        }
      }
    },
    // gzip assets 1-to-1 for production
    compress: {
      js: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: 'assets/dist/',
        src: ['*.min.js'],
        dest: 'assets/dist',
        ext: '.min.js.gz'

      },
      css: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: 'assets/dist/',
        src: ['*.min.css'],
        dest: 'assets/dist',
        ext: '.min.css.gz'

      }
    }
  });

  // Load required modules
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-compress');

  // Task definitions
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'compress']);
};