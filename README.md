
Angular mini project
===

You are a are going to implement good old **Tic Tac Toe** in Angular JS!

As a starting point, here's a template using JavaScript/jQuery. It contains all files with stubs for a plain JavaScript solution.

		https://github.com/aikalima/wdi-js-tictactoe-template

It contains:

- complete set of styles
- all images
- index.html
- tictactoe.js
	
**Examine tictactoe.js.** Comments provide hints on how to model data structures and implement function stubs. Read the comments carefully.

Think about how you would approach game play, how to manage players, detect win/tie, update UI, etc.

**After you've done some thinking**, go here to see a **complete solution** in plain JavaScript. 

	https://github.com/aikalima/wdi-js-tictactoe-final

We leave it up to you how much you want to challenge yourself. You can use the solution as a model for your app, or just for hints on how to solve certain aspects, or don't look at it at all :-)

Both repos contain a bare bones node web server (same one we used in Mondays lesson). After fork/clone, simply fire it up:

	node web-server.js
	
and go to 

	localhost:8000
	
		
###Requirements

- **Start a new project and implement the game in Angular JS**
- Feel free to build on top of rails or use node web server that is in the solution. Tic Tac Toe doesn't require api server calls, so it doesn't really matter.
- One controller and a single view is probably all you need, so no routes or resources required.
- Don't use jQuery or the native DOM api, instead bind DOM elements the Angular way.
- The original solution comes with all bells and whistles, like delayed fade-in animation and other goodies. That's not a requirement but try to make your app feel as close as possible to the original.
- We encourage you to write in CoffeeScript, but feel free to use plain JavaScript if that's what you are in to.
- Add the option to allow Ernie to play against the computer instead of Bert. The algorithm should be better than picking tiles randomly. 

###Bonus

- Implement an algorithm that can't be beat.


