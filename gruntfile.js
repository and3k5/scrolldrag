module.exports = function (grunt) {
	grunt.initConfig({
		uglify : {
			prodfile : {
				files : {
					'dist/scrollDrag.min.js' : ['src/scrollDrag.js']
				},
				options : {
					mangle : false,
					compress : true
				}
			},
			devfile : {
				files : {
					'dist/scrollDrag.js' : ['src/scrollDrag.js']
				},
				options : {
					mangle : false,
					compress : false,
					beautify : true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify:prodfile', 'uglify:devfile']);
};
