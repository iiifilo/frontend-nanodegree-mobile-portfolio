My Resoureces 
Piazza Posts
Forum
Chat P4 

https://www.udacity.com/course/ud884

* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

Gulp tutorial http://www.sitepoint.com/introduction-gulp-js/

mozilla developers help

Instructors from Udacity

Google insight pagespeed

**********************************************************************************************
The strategies used 
1)Minify, Compress, Cache(html, css, js)
2)Minize use of render blocking resources(used media queries, Inline css)
3)Minimize use of parser blocking resources( used Async on <scripts>)
 **********************************************************************************************

 # inlined most of my most of my .html but not the Index.html I got a better score by including de @font-face for the google font-family API

 # the pizzeria image was very heavy, optimizing it i got a much better performance.
 # all the html files scores over 90 regular and movile version
 # updatePositions function was optimized--comments on main.js
 #changePizzasizes() function was optimized by moving  pizzasDiv outside of for loop so it does not get called for every iteration.
 See comments on file main.js
 #My imagemin on gulp was not working, it gave me an error that I could not fixed, so I moved everything to a Mac and make it work, but PageSpedd still say to optimize images.
 ************************************************************************************************



