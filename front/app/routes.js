app.config(function($routeProvider){
    // $routeProvider.when('/', {templateUrl: 'app/views/home.html', controller:'testeController'})
    $routeProvider
    .when('/',
        {
            templateUrl: 'app/views/home.html',
            controller:'testeController'
        }
    )
    .otherwise({
        redirectTo: '/'
    });
})