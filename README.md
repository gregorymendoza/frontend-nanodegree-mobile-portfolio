#Website Performance Optimization

Fourth project of the Udacity Front-End Web Developer Nanodegree Program. The goal is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

##Getting Started

Preview this project on GitHub pages: https://gregorymendoza.github.io/frontend-nanodegree-mobile-portfolio/

If you prefer to test it locally, clone this repository with Git or download the ZIP file and extract it to your local machine, then do the following:

1. Check out the repository
1. Run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  # On Windows you might have to change it for this:
  $> python -m http.server 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  # Or
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

##Optimizations

####PageSpeed Score (Index Page)

* Minimized the use of render blocking resources by inlining the CSS and adding a `media="print"` attribute to the print.css stylesheet.
* Used async attribute on the `<script>` tags to unblock the critical routing path, the browser will download and execute the scripts but it won’t block the parser nor block on CSS.
* Minified all CSS and JavaScript resources using Grunt.
* Optimized and compressed the portfolio's thumbnail of the pizzeria project with [grunt-responsive-images](https://github.com/andismith/grunt-responsive-images).

####Getting Rid of Jank (Pizzeria Page)

* Removed the **determineDX** function since it was unnecessarily complicated. The **changePizzaSizes** function now simply figures out which width it wants and sets the width for every element to that percentage and the time to resize pizzas is less than 1 ms.
* As a good JavaScript practice, I assigned the operations and redundant methods to their own variables before the loops to reduce calculations and queries to the DOM everytime.
* Replaced the `querySelectorAll()` method with `getElementsByClassName()` for better performance and faster access to the DOM.
* Promoted the background pizzas to their own layers by adding a `will-change: transform` CSS property to the **mover** class. This technique or hack is made to avoid having to paint the whole page everytime there's movement.
* Reduced the numbers of moving pizzas generated on load from 200 to 40.

##How to Run Grunt

1. Download and follow the install instructions for node.js here: http://nodejs.org/.
2. Open a terminal and install Grunt's command line interface (CLI) globally with `npm install -g grunt-cli`. This will put the `grunt` command in your system path, allowing it to be run from any directory.
3. Change to the project's root directory.
4. Install project's dependencies with `npm install`.
5. Run Grunt with `grunt`.
6. To run a specific task, you can use `grunt <task>`.

For further in depth documentation visit Grunt's official website: http://gruntjs.com/