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

        $scope.iniciarJogo = function (){
            intervalo = $scope.config.maximo - $scope.config.minimo
            if (intervalo < $scope.config.intervalo){
                $scope.msgDeErro = `O intervalo precisa ser maior que ${$scope.config.intervalo}`
            }
            else{
                $scope.config.jogoIniciou = 1;
                $scope.jogo.numeroAleatorio = gerarNumeroAleatorio($scope.config.minimo, $scope.config.maximo);
            }
        }
        
        gerarNumeroAleatorio = function (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        $scope.adivinhar = function(){
            if($scope.jogo.tentativa == $scope.jogo.numeroAleatorio){
                $scope.msgDeErroDoJogo = "Você Acertou :)"
            }
            else{
                $scope.msgDeErroDoJogo = "Você Errou :("
            }

        }


    })

