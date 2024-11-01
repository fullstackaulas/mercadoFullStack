angular.module("meuApp")
    .controller("JogoDeAdivinharONumeroController", function ($scope) {

        /*
        numero de tentativas
        numero aleatorio
        
        minimo
        maximo
        intervalo entre minimo e maximo
        jogoIniciou
        */
        //evolucao: numeros ja tentados

        $scope.msgDeErro = "";
        $scope.msgDeErroDoJogo = "";

        $scope.config = {
            minimo: 0,
            maximo: 0,
            intervalo: 10,
            jogoIniciou: 0,
            jogoFinalizou: 0,

        };

        $scope.jogo = {
            numeroAleatorio: 0,
            qtdTentativa: 0,
            tentativa: 0
        }


        gerarNumeroAleatorio = function (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }



    })
