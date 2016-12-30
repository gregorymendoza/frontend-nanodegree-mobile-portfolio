module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),

    	//Tasks
    	cssmin: {
			target: {
		    	files: [{
		      		expand: true,
		      		src: ['css/*.css', '!*.min.css'],
		      		cwd: 'views/src/',
		      		dest: 'views/dist/',
		      		ext: '.min.css'
		    	}]
		  	}
		},
    	uglify: {
    		target: {
      			files: [{
		        	expand: true,
		          	src: ['js/**/*.js', '!*.min.js'],
		          	cwd: 'views/src/',
		          	dest: 'views/dist/',
		          	ext: '.min.js'
      			}]
    		}
    	},
    	responsive_images: {
   			dev: {
	   			options: {
	   				sizes: [{
	            		width: 116,
	            		quality: 70
	   				}, {
	   				 	width: 360,
	   				 	quality: 90
	   				}]
	   			},
	   			files: [{
	   				expand: true,
	   				//src: ['images/*.{gif,jpg,png}'],
	   				src: ['images/pizzeria.jpg'],
	   				cwd: 'views/src/',
	   				dest: 'views/dist/'
	   			}]
   			}
   		}
    });

    // Tasks to load
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-responsive-images');

    grunt.registerTask('default', ['cssmin', 'uglify']);
};