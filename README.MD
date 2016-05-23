# Frontend Challenge (AngularJS)

![alt text](https://raw.githubusercontent.com/Clearmove/frontend-challenge/master/img/screenshots/C3jZ9Xi.png "Get cities")

Your task is to implement a basic **city comparison** for a website, following these basic rules:

* The `City` needs to be implemented as an **AngularJS service**
* You will write the city by implementing the methods of the provided city service in the code block below
* No external libraries other than the provided ones
* It should take you less than 1 hour to come up with an implementation, but we won't put any time limit for this challenge

#### index.html
``` html
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Clear Move</title>

    <!-- Libraries -->
    <link href="bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="bower_components/bootstrap-material-design/dist/css/bootstrap-material-design.min.css" rel="stylesheet">

</head>

<body ng-app="clearmove">

    <!-- Libraries -->
    <script src="bower_components/angular/angular.min.js"></script>
    <script src="bower_components/lodash/dist/lodash.min.js"></script>
    <script src="bower_components/restangular/dist/restangular.min.js"></script>
    <script src="bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>

    <!-- App -->
    <script src="app.js"></script>

</body>
</html>
```

#### App.js
``` javascript
var app = angular.module('clearmove', ['services.city', 'restangular', 'ui.bootstrap']);

app.config(['RestangularProvider', function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000/api/v1');
    RestangularProvider.setRequestSuffix('.json');
}]);

angular.module('services.city', [])
    .service('City', ['Restangular', function(Restangular) {

      function getCities() {
      }

      function compare() {
      }

    }]);
```

### Methods explanation

For some of the methods mentioned in the empty `City` service, we thought of giving you some explanation to better understand what they're there for.

#### getCities
This is for the `typeahead` to get the cities in **api/v1/city/all.json**

##### For example:
![alt text](https://raw.githubusercontent.com/Clearmove/frontend-challenge/master/img/screenshots/UPsdlNM.png "Get cities")

#### compare
This is to comapre between two cities in **api/v1/city/compare.json**

##### For example:
![alt text](https://raw.githubusercontent.com/Clearmove/frontend-challenge/master/img/screenshots/us4axzO.png "City compare")

### Dependencies

You are not allowed to inject any dependency on the `City` service other than the ones provided:

* [Restangular](https://github.com/mgonto/restangular)

### Installation

```bash
$ git clone https://github.com/Clearmove/frontend-challenge.git
```
```bash
$ cd frontend-challenge
```
```bash
$ npm install && bower install && npm start
```

### What are we going to look for?

* The fewer lines of code, the better
* Clear, simple and efficient implementation
* Appropriate naming conventions


We are **not** going to check the submitted script for syntax errors.
Concentrate design of the code in general, we don't need to check for the small things.

Please use [a simple two-file gist](https://gist.github.com/) (private or public) to submit your coding challenge (**app.js & index.html**).

##### Good luck and happy coding!
