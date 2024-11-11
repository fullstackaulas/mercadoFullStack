angular.module('meuApp')
    .controller('CalculadoraComApiController', function ($scope, $http) {


        $scope.valores = {
            primeiro: 0,
            segundo: 0,
            resultado: 0
        };


        $scope.somar = function () {
            $url = 'http://localhost:8000/api/calculadora/calcular';
            $dados = {
                valorUm: $scope.valores.primeiro,
                valorDois: $scope.valores.segundo,
                operacao: '+',
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



        };

        $scope.subtrair = function () {



        };

        $scope.multiplicar = function () {



        };

        $scope.dividir = function () {


           

        };

        $scope.limpar = function () {
            $scope.valores = {
                primeiro: 0,
                segundo: 0,
                resultado: 0
            };
        }




    });

