angular.module("super_food", ["ngMessages","ngRoute"]).config(
    function($routeProvider) {
        $routeProvider.when('/library/:idFood', {
            templateUrl: 'client/app/Library/foodList.html',
            controller: 'FoodController'
        });
        
        $routeProvider.when('/home', {
            templateUrl: 'client/app/Home/home.html',
          
        });
        $routeProvider.when('/menu/:idMeal', {
            templateUrl: 'client/app/Menu/menu.html',
            controller: 'Menu'
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
        });

        

    });
