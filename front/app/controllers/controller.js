angular.module('meuApp')
.controller('testeController', function($scope) {
    // Lógica do controlador

$token = localStorage.getItem('token');
$scope.usuario = JSON.parse(localStorage.getItem('usuario'));


console.log($token);

});

