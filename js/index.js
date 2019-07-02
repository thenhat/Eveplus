// index.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function ($routeProvider) {
    $routeProvider

    //home
    // route for the home page
        .when('/', {
            templateUrl: 'home.htm',
            controller: 'homeController'
        })

        // Who We Are
        // Route for the About page
        .when('/about', {
            templateUrl: 'about.htm',
            controller: 'aboutController'
        })

        // Route for the Contact page
        .when('/contact', {
            templateUrl: 'contact.htm',
            controller: 'contactController'
        })

        // Help
        // Route for the Safety Measures page
        .when('/safety-measure', {
            templateUrl: 'safetyMeasures.htm',
            controller: 'safetyMeasuresController'
        })

        // Route for the Unsafe Area page
        .when('/unsafe-area', {
            templateUrl: 'unsafeArea.htm',
            controller: 'unsafeAreaController'
        })

        // Route for the Reports page
        .when('/report', {
            templateUrl: 'reports.htm',
            controller: 'reportsController'
        })


        // Story
        // Route for the Self Defense Tips page
        .when('/self-defense-tip', {
            templateUrl: 'selfDefenseTips.htm',
            controller: 'selfDefenseTipsController'
        })

        // Route for the Eye-witness account page
        .when('/eye-witness-account', {
            templateUrl: 'eyeWitnessAccount.htm',
            controller: 'eyeWitnessAccountController'
        })

        // Route for the Women heroes page
        .when('/women-hero', {
            templateUrl: 'womenHeroes.htm',
            controller: 'womenHeroesController'
        })

        // Campaign Ideas
        // Route for the Campaign Ideas page
        .when('/campaign-idea', {
            templateUrl: 'campaignIdeas.htm',
            controller: 'campaignIdeasController1'
        })

        // Register
        // Route for the Register page
        .when('/register', {
            templateUrl: 'register.htm',
            controller: 'registerController'
        })

        .when('/login', {
            templateUrl: 'login.htm',
            controller: 'loginController'
        })
});

// create the controller and inject Angular's $scope

//home
scotchApp.controller('homeController', ['$scope', '$http', function ($scope, $http) {
    $http.get('data/women-heroes.json')
        .then(function (response) {
            $scope.hero = response.data.hero;
        });
}]);

// Who We Are
// About
scotchApp.controller('aboutController', function ($scope) {
});

// Contact
scotchApp.controller('contactController', function ($scope) {
});

// Help
// Safety Measures
scotchApp.controller('safetyMeasuresController', function ($scope) {
});

// Unsafe Area
scotchApp.controller('unsafeAreaController', ['$scope', '$http', function ($scope, $http) {
    $http.get('data/unsafe-area.json')
        .then(function (res) {
            $scope.location = res.data.location;
        });
    $scope.initMap = function (lat, lng) {
        var map;
        var myLatlng = {lat: lat, lng: lng};
        if (myLatlng == null) {
            myLatlng = {lat: 21.0833336, lng: 105.6487293}
        }
        map = new google.maps.Map(document.getElementById('map'), {
            scaleControl: true,
            position: myLatlng,
            center: myLatlng,
            zoom: 16,
        });
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Hello World!'
        });
    };
}]);

// Reports
scotchApp.controller('reportsController', ['$scope', '$http', function ($scope, $http) {
    $http.get('data/report.json')
        .then(function (response) {
            $scope.report = response.data.report;
        });
}]);

// Story
// Self Defense Tips
scotchApp.controller('selfDefenseTipsController', ['$scope', '$http', function ($scope, $http) {
    $scope.getIframeSrc = function (src) {
        return 'https://www.youtube.com/embed/' + src;
    };
    $http.get('data/self-defense-tips.json')
        .then(function (res) {
                $scope.tip = res.data.tip;
            }
        )
}]).config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://www.youtube.com/**'
    ]);
});

// Eye-witness account
scotchApp.controller('eyeWitnessAccountController', ['$scope', '$http', function ($scope, $http) {
    $http.get('data/eye-witness-account.json')
        .then(function (response) {
            $scope.witness = response.data.witness;
        });
}]);

// Women heroes
scotchApp.controller('womenHeroesController', ['$scope', '$http', function ($scope, $http) {
    $http.get('data/women-heroes.json')
        .then(function (response) {
            $scope.hero = response.data.hero;
        });
}]);

// Campaign Ideas
scotchApp.controller('campaignIdeasController1', function ($scope) {
    $scope.toggle1 = function () {
        $("#content-service1").toggle(1000);
    };
    $scope.toggle2 = function () {
        $("#content-service2").toggle(1000);
    };
    $scope.toggle3 = function () {
        $("#content-service3").toggle(1000);
    };
    $scope.toggle4 = function () {
        $("#content-service4").toggle(1000);
    };
});

// Register
scotchApp.controller('registerController', function ($scope) {
});

// Active Nav
var btns = $(".nav-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (event) {
        $(".nav-active-current").removeClass("nav-active-current");
        $(event.target).parents(".nav-item").addClass("nav-active-current");
    });
}

// Back to top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('#topBtn').fadeIn();
            $('#hotLine').fadeIn();
        } else {
            $('#topBtn').fadeOut();
            $('#hotLine').fadeOut();
        }
    });
    $('#topBtn').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
});

// Time, Location
var $dOut = $('#date'),
    $hOut = $('#hours'),
    $mOut = $('#minutes'),
    $sOut = $('#seconds'),
    $ampmOut = $('#ampm');

var months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];
var days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

function update() {
    var date = new Date();

    var ampm = date.getHours() < 12
        ? 'AM'
        : 'PM';
    var hours = date.getHours() == 0
        ? 12
        : date.getHours() > 12
            ? date.getHours() - 12
            : date.getHours();
    var minutes = date.getMinutes() < 10
        ? '0' + date.getMinutes()
        : date.getMinutes();
    var seconds = date.getSeconds() < 10
        ? '0' + date.getSeconds()
        : date.getSeconds();
    var dayOfWeek = days[date.getDay()];
    var month = months[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();
    var dateString = dayOfWeek + ', ' + month + ' ' + day + ', ' + year + '. ';
    $dOut.text(dateString);
    $hOut.text(hours);
    $mOut.text(minutes);
    $sOut.text(seconds);
    $ampmOut.text(ampm);
}

update();
window.setInterval(update, 1000);

//Location
var $localTime = $('#local-time');

function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        $localTime.innerHTML = "Geolocation is not supported by this browser.";
    }

    function showPosition(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var geocoder = new google.maps.Geocoder;
        var latlng = {lat: latitude, lng: longitude};
        var localString;
        var resultFind;
        geocoder.geocode({'location': latlng}, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    resultFind = results[0].formatted_address;
                    localString = 'YOUR LOCATION: ' + resultFind;
                } else {
                    localString = 'YOUR LOCATION: No results found';
                }
            } else {
                localString = 'YOUR LOCATION: Geocoder failed due to: ' + status;
            }
            $localTime.text(localString);
        });
    }
}

updateLocation();

