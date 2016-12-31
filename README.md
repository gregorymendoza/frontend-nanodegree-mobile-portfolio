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

####PageSpeed Score (index.html)

* Minimized the use of render blocking resources by inlining the CSS and adding a media attribute to the print stylesheet.
* Used async attribute on the <script> tags to unblock the critical routing path, the browser will download and execute the scripts but it won’t block the parser and it won’t block on CSS.
* Minified all CSS and JavaScript resources using Grunt.
* Optimized and compressed the portfolio's thumbnail of the pizzeria project.

####Getting Rid of Jank (pizza.html, main.js)

* Removed the determineDX function since it was unnecessarily complicated. The changePizzaSizes now simply figures out which width it wants and sets the width for every element to that percentage.
* As a good JavaScript practice, I assigned the operations and redudant calls to their own variables before the loops to reduce calculations.
* Replaced querySelectorAll with getElementsByClassName for better performance and faster access to the DOM.
* Promoted the background pizzas to their own layers by adding a will-change CSS property to the .mover class. This technique or hack is made to avoid having to paint the whole page everytime there's movement.

