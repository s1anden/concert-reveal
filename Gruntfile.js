module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          base: 'dist',
          livereload:true
        }
      }
    },
    sass: {
      dev: {
        files: [{
          expand: true,
          cwd: 'assets/css/',
          src: ['*.scss', '*.sass'],
          dest: 'dist/css/',
          ext: '.css'
        }]
      }
    },
    coffee: {
      dev: {
        options: {
          bare: true,
          sourceMap: true
        },
        files: [{
          expand: true,
          cwd: 'assets/js/',
          src: ['**/*.coffee'],
          dest: 'dist/js/',
          ext: '.js'
        }]
      }
    },
    jade: {
      dev: {
        files: [{
          expand: true,
          cwd: 'assets/html/',
          src: ['**/*.jade'],
          dest: 'dist/html/',
          ext: '.html'
        }]
      }
    },
    copy: {
      dev: {
        files: [{
          expand: true,
          cwd: 'assets',
          src: ['**/*.!(jade|sass|scss|coffee)'],
          dest: 'dist/'
        }, {
          expand: true,
          cwd: 'vendor',
          src: ['**/*.!(coffee|jade|scss|sass)'],
          dest: 'dist/vendor/'
        }]
      }
    },
    watch: {
      sass: {
        files: ['assets/css/*.(scss|sass)'],
        tasks: ['sass:dev']
      },
      coffee: {
        files: ['assets/js/*.coffee'],
        tasks: ['coffee:dev']
      },
      jade: {
        files: ['assets/js/*.jade'],
        tasks: ['jade:dev']
      },
      copy: {
        files: ['assets/**/*.!(jade|sass|scss|coffee)', 'vendor/**/*.!(coffee|jade|scss|sass)'],
        tasks: ['copy:dev']
      },
      livereload: {
        // Here we watch the files the sass task will compile to
        // These files are sent to the live reload server after sass compiles to them
        options: { livereload: true },
        files: ['dest/**/*']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-livereload');

  // Default task(s).
  grunt.registerTask('default', ['watch', 'connect', 'sass', 'coffee', 'jade', 'copy', 'livereload']);
  grunt.registerTask('dev', ['watch', 'connect', 'sass', 'coffee', 'jade', 'copy', 'livereload']);

};