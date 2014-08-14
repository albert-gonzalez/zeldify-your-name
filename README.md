#[Zeldify Your Name](http://albert-gonzalez.github.io/zeldify-your-name)

Zeldify Your Name is a simple application that convert the input string in a name of 'The Legend of Zelda' games. It is a complete example of how to use Requirejs with Angularjs and Bootstrap.

This RequireJS + AngularJS configuration is based on [this complete tutorial by StarterSquad](https://www.startersquad.com/blog/angularjs-requirejs/). If you want to use this configuration in a new project, you can use this template:

[RequireJS + AngularJS Template](https://github.com/albert-gonzalez/requirejs-angularjs-template)

Used technologies:
* App developed with Requirejs, AngularJs, Bootstrap and JQuery.
* Unit Testing with Karma and Jasmine.
* e2e Testing with Selenium, Protractor and Jasmine.
* Package Management with Bower and npm.
* Optimized CSS and JS distribution with Grunt.

##Requisites
* [NodeJS](http://nodejs.org/) and npm
* [Bower](https://github.com/bower/bower) installed globally `npm install -g bower`
* [Grunt cli](https://github.com/gruntjs/grunt-cli) installed globally `npm install -g grunt-cli`
* [Karma cli](https://github.com/karma-runner/karma) installed globally `npm install -g karma-cli`

##Download
Clone this repository:

`git clone https://github.com/albert-gonzalez/zeldify-your-name.git`

##Install
Go to zeldify-your-name path and execute

`npm start`

This command will install the node modules, it will execute bower install, it will build the js and css and it will start the http-server

Open the url `localhost:8000` in your browser

##Build JS and CSS distribution
There is a [`Gruntfile`](https://github.com/albert-gonzalez/zeldify-your-name/blob/master/Gruntfile.js) configured for building the js and css distribution with this command:

`grunt build`

This will compile bootstrap files with less and javascript with the r.js optimizer

## Unit Testing

Execute:

`karma start`

This will start the karma runner and execute the test.

Karma config is in the file [`karma.conf.js`](https://github.com/albert-gonzalez/zeldify-your-name/blob/master/karma.conf.js)

Requirejs config for the test is in the file [`test/test-main.js`](https://github.com/albert-gonzalez/zeldify-your-name/blob/master/test/test-main.js). This file configures Requirejs paths and finds the test for executing them.

##E2E Testing

Install selenium locally:

`node_modules\grunt-protractor-runner\node_modules\.bin\webdriver-manager update`

Start selenium:

`node_modules\grunt-protractor-runner\node_modules\.bin\webdriver-manager start`

Start local server:

`npm start`

Execute e2e test:

`grunt protractor`

This will open chrome browser and execute the e2e test. If you want to change the browser or others options you can modifiy the file [`protractor.conf.js`](https://github.com/albert-gonzalez/zeldify-your-name/blob/master/protractor.conf.js)
