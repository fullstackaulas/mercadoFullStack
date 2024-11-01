angular.module("meuApp")
.controller("ConversorDeUnidadesController", function($scope){


$scope.mensagem = "Esta funcionando :)";

$scope.unidade = {
    quilometros: 0,
    metros: 0,
    centimetros: 0,
    milimetros: 0
}

$scope.converter = function(){

    /* se for 100centimetros
    quilometros 0,001
    metros 1
    centimetros = 100
    milimetros = 1000 
    */

    console.log('clicou');

    console.log($scope.unidade);


    $scope.unidade.quilometros = $scope.unidade.centimetros / 100000;
    $scope.unidade.metros = $scope.unidade.centimetros / 100;
    // $scope.unidade.centimetros = $scope.unidade.centimetros;
    $scope.unidade.milimetros = $scope.unidade.centimetros * 10;

    console.log($scope.unidade);


}


});
