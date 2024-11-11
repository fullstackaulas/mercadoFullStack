angular.module('meuApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('main', {
            abstract: true,
            templateUrl: 'app/views/partials/comHeaderFooterEMenu.html', // Template com header, sidebar e footer
        })
        .state('main.home', {
            url: '/',
            templateUrl: 'app/views/home.html', // Template da dashboard
            controller: 'testeController' // Controller para a dashboard
        })
        .state('main.primeiroExercicio', {
            url: '/exercicios/primeiro',
            templateUrl: 'app/views/exercicios/primeiro.html',
            controller: 'PrimeiroController'
        })
        .state('main.calculadoraExercicio', {
            url: '/exercicios/calculadora',
            templateUrl: 'app/views/exercicios/calculadora.html',
            controller: 'CalculadoraController' 
        })
        .state('main.contador', {
            url: '/exercicios/contador',
            templateUrl: 'app/views/exercicios/contador.html',
            controller: 'ContadorController' 
        })
        .state('main.calculadoraImc', {
            url: '/exercicios/calculadoraImc',
            templateUrl: 'app/views/exercicios/calculadoraImc.html',
            controller: 'CalculadoraImcController' 
        })
        .state('main.calculadoraDeIdade', {
            url: '/exercicios/calculadoraDeIdade',
            templateUrl: 'app/views/exercicios/calculadoraDeIdade.html',
            controller: 'CalculadoraDeIdadeController' 
        })
        .state('main.palindromo', {
            url: '/exercicios/palindromo',
            templateUrl: 'app/views/exercicios/palindromo.html',
            controller: 'PalindromoController' 
        })
        .state('main.conversorDeUnidades', {
            url:'/exercicios/conversorDeUnidades',
            templateUrl: 'app/views/exercicios/conversorDeUnidades.html',
            controller: 'ConversorDeUnidadesController'
        })
        .state('main.jogoDeAdivinharONumero', {
            url:'/exercicios/jogoDeAdivinharONumero',
            templateUrl: 'app/views/exercicios/jogoDeAdivinharONumero.html',
            controller: 'JogoDeAdivinharONumeroController'
        })
        .state('main.jogoDeAdivinharPalavra', {
            url:'/exercicios/jogoDeAdivinharPalavra',
            templateUrl: 'app/views/exercicios/jogoDeAdivinharPalavra.html',
            controller: 'JogoDeAdivinharPalavraController'
        })
        .state('main.jogoDeForca', {
            url:'/exercicios/jogoDeForca',
            templateUrl: 'app/views/exercicios/jogoDeForca.html',
            controller: 'JogoDeForcaController'
        })
        .state('main.CalculadoraComApi', {
            url: '/exercicios/calculadoraComApi',
            templateUrl: 'app/views/exerciciosComApi/calculadoraComApi.html',
            controller: 'CalculadoraComApiController' 
        })
        .state('main.AgendaController', {
            url: '/exercicios/AgendaController',
            templateUrl: 'app/views/exerciciosComApi/agenda.html',
            controller: 'AgendaController' 
        })


// contador de X até Y - Ok
// Calculadora IMC - Ok
// calculadora de idade - ok
// como identificar se uma palavra é um palindromo - ok
//conversor de unidades
//conversor de moedas de acordo com o valor da moeda
//todo list


// como fazer para identificar se duas palavras sao anagrama

   
    $urlRouterProvider.otherwise('/');

});
