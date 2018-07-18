Refactoring test
===================


You can find below explanation of the modification I've done to the code

----------


list.twig
-------------

> - Alining the width of the cards using another approach rather then the ul li tags.
> - Changed the buttons design.
> - Put the title of the card and the figure capture in the center.
> - Scripts imports changed at the bottom of the page (just before closing the  body tag) to improve the app performance

view.twig
-------------
> - Put the figcaption in the center.
> - Added margin-top 10% to the product description to aline it with the image
> - Scripts imports changed at the bottom of the page (just before closing the  body tag) to improve the app performance

package.json
-------------
> - npm config set save=true & npm config save-exact=true , to make sure that evey one working in this project will have the same version of the dependencies,avoid the pitfalls of the "^" that updates the dependencies to the most recent major version after each npm i .
> - The devDependencies are located in the dependencies so I changed them to the devDependencies section
> - Added moch to the devDependencies section .
> - Corrected the test command to   ``` " test": "mocha test/*"```

Controller
-------------
> - Create a product controller in which we call the service and do your logic separately from the router files , which leads to more organised and maintainable code

Errors handling
-------------

> - Handling database initialisation errors with ```  this.db.on("error", function (error) {
            console.error("Getting an error : ", error);
        });  ``` 
       using console.error to simplify
> - Handling database calls requests errors

Project structure
-------------

> - Change the code base of the application into new created app folder to separate code files form configuration files
> - Update srcfiles in gulp config file to point the up folder


Environment variables
-------------
>- Create an env file insdie the config file in which we inside it the development/production environment variables and the test environment varibles
> - Install gulp-env extension to set environment variables

SEO and security
-------------
> - meta tags added to the views to improve the seo.
> -  doctype tag added
> - Helmet added  ```  npm install helmet --save ```  to improve the application security which is a best practice that allows to : 
>  - XSS Protection
>  - Prevent Clickingjacking using X-Frame-Options
>  - Enforcing all connections to be HTTPS
>  - Setting a Context-Security-Policy header


Others
-------------
> - Added the plugin ' add-module-exports' and reconfigure the .babelrc file to avoid the  the ``` require('module').default ``` after using export default
> - mysql package removed from package.json because it is not used
> - added jsLint to the editor to lint the code
> -  reformatted code.
> - Commentting the code (Comments written before each function  to explain the code)

Prespectives
-------------

> - Write unit tests for routes , product controller and product-service.
> - Integrate gulp-jslint

