angular.module("meuApp")
.controller("ContadorController", function($scope){

$scope.valor = {
    de: 0,
    ate: 0
}

$scope.valores = '';


$scope.contar = function(){
    $scope.valores = '';

    for($x = $scope.valor.de; $x <= $scope.valor.ate; $x++){
        $scope.valores = $scope.valores + ',' + $x;
    }


}



});