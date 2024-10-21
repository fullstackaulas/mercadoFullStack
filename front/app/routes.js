angular.module('meuApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    // Redireciona para a dashboard por padrão
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state('main', {
            abstract: true,
            templateUrl: 'app/partials/main-layout.html', // Template com header, sidebar e footer
        })
        .state('main.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/partials/dashboard.html', // Template da dashboard
            controller: 'DashboardController' // Controller para a dashboard
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/partials/login.html', // Apenas um conteúdo sem partials
            controller: 'LoginController' // Controller para o login
        })
        .state('main.produtos', {
            url: '/produtos',
            templateUrl: 'app/partials/produtos.html', // Outra página que usa o layout com partials
            controller: 'ProdutosController'
        });
});
