angular.module('meuApp')
    .controller('CalculadoraComApiController', function ($scope, $http) {


        $scope.valores = {
            primeiro: 0,
            segundo: 0,
            resultado: 0
        };


        $scope.somar = function () {
            calcular('+')
        };

        $scope.subtrair = function () {
            calcular('-');
        };

        $scope.multiplicar = function () {
            calcular('*');
        };

        $scope.dividir = function () {
            calcular('/');
        };

        $scope.limpar = function () {
            $scope.valores = {
                primeiro: 0,
                segundo: 0,
                resultado: 0
            };
        }



        function calcular($operacao){
            $url = 'http://localhost:8000/api/calculadora/calcular';
            $dados = {
                valorUm: $scope.valores.primeiro,
                valorDois: $scope.valores.segundo,
                operacao: $operacao,
            };

            $http.post($url, $dados).then(function (response) {
                if(response.status == 200){
                    $scope.valores.resultado = response.data;
                } else {
                    $scope.valores.resultado = "Um erro ocorreu.";
                }
                console.log(response);
            }, function (error) {
                console.log("Deu erro");
                console.log(error);
                $scope.valores.resultado = "Um erro ocorreu (Não tratado)";
            })
        }



    });

