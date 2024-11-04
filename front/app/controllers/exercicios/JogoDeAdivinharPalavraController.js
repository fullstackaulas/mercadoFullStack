angular.module("meuApp")
    .controller("JogoDeAdivinharPalavraController", function ($scope) {

        /*
        Serão duas divs, uma para iniciar o jogo e outra para tentar adivinhar a palavra.
        as palavras estarão numa variável chamada Palavras!

        Na sequencia, evolução do sistema, na primeira div o usuário deve informar palavras separadas por ;.
        Evolução 2: escolher o tema!
        */


        //     iniciarJogo()
        //     testarPalavra()

        //     jogo.palavraTentada
        //     jogo.qtdTentativa
        // jogo.qtdLetrasIguais

        $scope.jogo = {
            palavraTentada: '',
            qtdTentativa: 0,
            qtdLetrasIguais: 0,
            jogoIniciado: 0,
            msg: ''
        }

        palavras = [
            'abacaxi', 'banana', 'laranja', 'morango', 'coco',
            'melancia', 'pessego', 'uva', 'pera',
            'ameixa', 'kiwi', 'manga', 'framboesa', 'limao',
            'tangerina', 'cereja', 'amora', 'maracuja', 'goiaba'
        ];

        $palavraAleatoria = '';

        $scope.iniciarJogo = function () {
            $scope.jogo.jogoIniciado = 1;
            $palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];

            console.log($palavraAleatoria)

            //iniciar jogo
        }

        $scope.reiniciarJogo = function(){

        $scope.jogo = {
            palavraTentada: '',
            qtdTentativa: 0,
            qtdLetrasIguais: 0,
            jogoIniciado: 0,
            msg: ''
        }
        }

        $scope.testarPalavra = function () {
            $scope.jogo.qtdTentativa++;
            $scope.jogo.qtdLetrasIguais = calcularLetrasIguais();

            if ($palavraAleatoria == $scope.jogo.palavraTentada) {
                $scope.jogo.msg = 'Você acertou!!!'
                $scope.jogo.jogoIniciado = 2;
            }
            else {
                $scope.jogo.msg = "Poxa, ainda não acertou..."
            }
        }

        calcularLetrasIguais = function () {
            palavra1 = $palavraAleatoria;
            palavra2 = $scope.jogo.palavraTentada;



            contador = 0;
            comprimento = Math.min(palavra1.length, palavra2.length);

            for (let i = 0; i < comprimento; i++) {
                if (palavra1[i] === palavra2[i]) {
                    contador++;
                }
            }

            return contador;
        }



    })

