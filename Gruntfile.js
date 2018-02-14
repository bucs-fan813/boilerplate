module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            options: { separator: ';\n' },
            build: {
                src: ['assets/src/js/*.js'],
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
    ext: '.min.gz.js'

  },
    css: {
    options: {
      mode: 'gzip'
    },
    expand: true,
    cwd: 'assets/dist/',
    src: ['*.min.css'],
    dest: 'assets/dist',
    ext: '.min.gz.css'

  }
}
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compress');

    // Task definitions
    grunt.registerTask('default', ['concat','uglify','compress']);
};