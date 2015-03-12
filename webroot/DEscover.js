
//(function() {
//	var app = angular.module('DEscover',[]);

//	app.controller('StoreController', function(){
//		this.product = gem;
//	});

//	var gem = {
//	    name: 'Dodecahedron',
//	    price: 2.95,
//	    description: ' . . . '
//	};

//});


    var myApp = angular.module('DEscover', []);

    myApp.controller('SpicyController', ['$scope', function ($scope) {
        $scope.spice = 'very';

        $scope.chiliSpicy = function () {
            $scope.spice = 'chili';
        };

        $scope.jalapenoSpicy = function () {
            $scope.spice = 'jalapeño';
        };
    }]);

	myApp.controller('StoreController', function(){
		this.product = gem;
	});

	var gem = {
	    name: 'Dodecahedron',
	    price: 2.95,
	    description: ' . . . '
	};

    