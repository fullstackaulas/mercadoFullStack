angular.module("meuApp")
    .controller("JogoDeForcaController", function ($scope) {

        /*
        Serão duas divs, uma para iniciar o jogo e outra para tentar adivinhar a palavra.
        as palavras estarão numa variável chamada Palavras!

        Na sequencia, evolução do sistema, na primeira div o usuário deve informar palavras separadas por ;.
        Evolução 2: escolher o tema!
        */


        $scope.forca = {
            linhas: '',
            letrasAcertadas: [],
            letrasErradas: [],
            erros: 0
        }


        $scope.jogo = {
            letraTentada: '',
            qtdTentativa: 0,
            qtdLetrasIguais: 0,
            jogoIniciado: 0,
            msg: '',
            tema: 'frutas',
            palavraOutros: ''
        }

        $frutas = [
            'abacaxi', 'banana', 'laranja', 'morango', 'coco',
            'melancia', 'pessego', 'uva', 'pera',
            'ameixa', 'kiwi', 'manga', 'framboesa', 'limao',
            'tangerina', 'cereja', 'amora', 'maracuja', 'goiaba'
        ];

        $carros = [
            'fusca', 'gol', 'civic', 'corolla', 'camaro',
            'mustang', 'x6', 'tucson', 'fiesta', 'hilux',
            'onix', 'kwid', 'jeep', 'chery', 'bmw',
            'audi', 'tracker', 'hrv', 'renegade'
        ];

        $cores = [
            'vermelho', 'azul', 'verde', 'amarelo', 'roxo',
            'laranja', 'rosa', 'preto', 'branco', 'cinza',
            'bege', 'marrom', 'turquesa', 'prata', 'ouro',
            'limao', 'pessego', 'acai', 'salmon', 'violeta'
        ];

        $generos = [
            'acao', 'comedia', 'drama', 'terror', 'romance',
            'ficcao', 'fantasia', 'documentario', 'misterio', 'animacao',
            'aventura', 'suspense', 'musical', 'guerra', 'historico',
            'policial', 'familia', 'biografia', 'estrangeiro'
        ];


        $scope.palavraAleatoria = '';

        $scope.iniciarJogo = function () {
            $scope.jogo.jogoIniciado = 1;

            if ($scope.jogo.tema == 'frutas') {
                palavras = $frutas;
            } else if ($scope.jogo.tema == 'carros') {
                palavras = $carros;
            } else if ($scope.jogo.tema == 'cores') {
                palavras = $cores;
            } else if ($scope.jogo.tema == 'generos') {
                palavras = $generos;
            } else {
                palavras = $scope.jogo.palavraOutros.split(';');
            }


            $scope.palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];

            $scope.forca.linhas = gerarLinhas();

            console.log($scope.palavraAleatoria)

            //iniciar jogo
        }

        $scope.reiniciarJogo = function () {

            $scope.jogo = {
                letraTentada: '',
                qtdTentativa: 0,
                qtdLetrasIguais: 0,
                jogoIniciado: 0,
                msg: ''
            }
        }

        $scope.testarPalavra = function () {

            letraTentada = $scope.jogo.letraTentada;
            palavra = $scope.palavraAleatoria;

            if ($scope.forca.letrasAcertadas.indexOf(letraTentada) !== -1 || $scope.forca.letrasErradas.indexOf(letraTentada) !== -1) {
                console.log('Essa letra já foi tentada.');
                return;
            }

            if (palavra.indexOf(letraTentada) !== -1) {
                $scope.forca.letrasAcertadas.push(letraTentada);
                console.log('Letra acertada: ' + letraTentada);
            } else {
                $scope.forca.letrasErradas.push(letraTentada);
                $scope.forca.erros++;
                console.log('Letra errada: ' + letraTentada);
            }

            $scope.forca.linhas = gerarLinhas();

        }

        calcularLetrasIguais = function () {
            palavra1 = $scope.palavraAleatoria;
            palavra2 = $scope.jogo.letraTentada;



            contador = 0;
            comprimento = Math.min(palavra1.length, palavra2.length);

            for (let i = 0; i < comprimento; i++) {
                if (palavra1[i] === palavra2[i]) {
                    contador++;
                }
            }

            return contador;
        }

        gerarLinhas = function () {


            linhas = '';
            console.log(linhas);

            for (i = 0; i < $scope.palavraAleatoria.length; i++) {
                letra = $scope.palavraAleatoria[i];
                console.log(letra);
                console.log($scope.forca.letrasAcertadas);
                if ($scope.forca.letrasAcertadas.indexOf(letra) !== -1) {
                    console.log('entrou no if que existe');
                    linhas = linhas + letra;
                } else {
                    linhas = linhas + '_';
                    console.log('entrou no if que NAO existe');


                }

            }
            console.log(linhas);

            return linhas;


        }



    })



/*
 
1) LIMITAR OS ERROS E INFORMAR QUE PERDEU, DIZENDO: VC PERDEU! A PALAVRA ERA {{PALAVRA}}!
2) INFORMAR QUE GANHOU!!!
3) AO CLICAR NO BOTAO, DAR FOCO NA CAIXA DE TEXTO JA SELECIONANDO A LETRA PRO USUARIO SÓ DIGITAR (DICA: .FOCUS .setSelectionRange)
4) habilitar o reiniciar!!!
5) retirar todos console.log()!

Estudar: tentar refazer o jogo da forca
entender melhor o indexof!!!
*/