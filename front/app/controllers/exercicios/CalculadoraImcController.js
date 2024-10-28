angular.module("meuApp")
    .controller("CalculadoraImcController", function ($scope) {

        $scope.valor = {
            peso: 0,
            altura: 0,
            imc: 0,
            imcTexto: ''

        }


        $scope.calcularImc = function () {
            imc = $scope.valor.peso / ($scope.valor.altura * $scope.valor.altura);
            $scope.valor.imc = imc.toFixed(2);

            if(imc< 18.5){
                $scope.valor.imcTexto = 'Abaixo do peso';
            } else if(imc <= 24.9){
                $scope.valor.imcTexto = 'Peso normal';
            } else if(imc <= 29.9){
                $scope.valor.imcTexto = 'Sobrepeso';
            } else if(imc <= 34.9){
                $scope.valor.imcTexto = 'Obesidade grau I';
            } else if(imc <= 39.9){
                $scope.valor.imcTexto = 'Obesidade grau II';
            } else if(imc <= 49.9){
                $scope.valor.imcTexto = 'Obesidade grau III';
            } else if(imc <= 59.9){
                $scope.valor.imcTexto = 'Obsevidade grau IV';
            } else if(imc> 59.9){
                $scope.valor.imcTexto = 'Obesidade grau V';
            } else{
                $scope.valor.imcTexto = 'Erro ao calcular';
            }


        }



    });
