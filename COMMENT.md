Realization time: 21:40 -> 23:40
Comment time: 9:45 -> 10:05
Modification:

x Create class product-service for manage the product.
  - because, it is used by several component, page,
it is the best way to share the same functionality.
  - because the data engine can changed. Today, it is sqlite. Tomorrow,
  maybe, it can be mongodb, postgresql,
  - put in a folder service because it is a service

x Add tag doctype, html for correspond to the HTML5 standard
x Remove tag button, because it is useless
x Move this.db.close in the callback. 
Js is asynchronous, and I am not sure that close before sqlite3 do this request, 
it is good thing to do. 
x Uncomment the request "/" for has the list page in the starting
x Use a function for build the router for use new product-service created.

Problem:

x mocha is not in the "package.json". (I do npm install save-dev but it has not be added)
x card are not align
x card are not responsive (a width:40%) is not a good idea. The most thing is to use bootstrap with col-md-4.
or to remove the in the style.css the property width:40%.
x Mix of uses var, const, let. Today, google lint remove the uses of keyword "var". 
x Code is not consistent. Don't follow rules. (Solution: Add a linter)
x file connection is closed each time (even if sqlite3 and there are no database). Maybe, in other case,
the controller will do several action with sqlite3 and can be unperformant to close the connection to the file.

Evolution:
x Integrate a jslint in the process of gulp.js
x Add unit test for test class product service
x Add unit test for validate loading of url "cart/" "views/"
x Lint the css, html (Add lint of airbnb by instance)
x Add a tools for get a url for image
x Protect the method "getProduct" of productService
x Can create default home page
x Can remove mysql package which is not used in this project (package.json)
x Add package mocha in dev-dependencies which is useful for do test.
