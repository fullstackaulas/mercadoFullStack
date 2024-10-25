angular.module('meuApp')
    .controller('CalculadoraController', function ($scope) {


        $scope.valores = {
            primeiro: 0,
            segundo: 0,
            resultado: 0
        };


        $scope.somar = function () {
            $scope.valores.resultado = $scope.valores.primeiro + $scope.valores.segundo;
        };

        $scope.subtrair = function () {
            $scope.valores.resultado = $scope.valores.primeiro - $scope.valores.segundo;
        };

        $scope.multiplicar = function () {
            $scope.valores.resultado = $scope.valores.primeiro * $scope.valores.segundo;
        };

        $scope.dividir = function () {


            if ($scope.valores.segundo == 0) {
                $scope.valores.resultado = "Impossível dividir por 0";
            } else {
                $scope.valores.resultado = $scope.valores.primeiro / $scope.valores.segundo;
            }


        };

        $scope.calcularTudo = function () {
            somar = $scope.valores.primeiro + $scope.valores.segundo;
            subtrair = $scope.valores.primeiro - $scope.valores.segundo;
            multiplicar = $scope.valores.primeiro * $scope.valores.segundo;

            if ($scope.valores.segundo == 0) {
                dividir = "Impossível";
            } else {
                dividir = $scope.valores.primeiro / $scope.valores.segundo;
            }

            // $scope.valores.resultado = 'somar' + somar  + 'subtrair ' + subtrair + 'multiplicar' + multiplicar + 'dividir' + dividir;
            $scope.valores.resultado = `Somar ${somar} - Subtrair ${subtrair} - Multiplicar ${multiplicar} - Dividir ${dividir}`;
        }

     $scope.limpar = function(){
        // $scope.valores.primeiro = 0;
        // $scope.valores.segundo = 0;
        // $scope.valores.resultado = 0;
        $scope.valores = {
            primeiro: 0,
            segundo: 0,
            resultado: 0
        };
     }




    });

