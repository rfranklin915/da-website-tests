module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
		dist: {
		  options: {
			style: 'expanded',
			sourcemap: 'none',
			noCache: true
		  },
		  files: {
			'da-website-tests/Css/styles.css': 'da-website-tests/Sass/styles.scss'
		  }
		}
	  },
	  watch: {
		  css: {
			files: '**/*.scss',
			tasks: ['sass']
		  }
		}
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};