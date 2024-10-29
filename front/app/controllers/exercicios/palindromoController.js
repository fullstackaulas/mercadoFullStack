angular.module("meuApp")
.controller("PalindromoController", function($scope) {
$scope.resultado = "";
$scope.palavra = {
    original: '',
    invertida: ''
    }




$scope.palindromo = function () {
$scope.palavra.invertida =  $scope.palavra.original.split('').reverse().join('');
    if ($scope.palavra.original == $scope.palavra.invertida ) {
        $scope.resultado = 'É palindromo';
    } else {
        $scope.resultado = 'Não é Palindromo';
    }
}    
});

// $scope.palavra.invertida = '';
// $scope.palavra.original = 'macaco';
// .split('')m - a - c - a- c - o
// .reverse()o - c - a - c - a - m
// .join()  ocacam
// $scope.palavra.invertida = 'ocacam';
