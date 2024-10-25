angular.module('meuApp')
.controller('PrimeiroController', function($scope) {
    // Lógica do controlador

$scope.informacoes = "Este é um objeto de texto";

$scope.informacoesComMaisDados = {
    nome: 'Matheus',
    sobrenome: 'Rubens'
};


// =
// +=
// -+
// ++

// $soma = 0; // ta bom, to valendo 0. !
// $soma++; // ok, to valendo 1.
// $soma+= 10; // eu valia 1, to valendo 11.
// $soma = 0; // nao importa o q valia antes, agora é 0.

// == // é igual?
// === // é igual verificando também o tipo

// $valorUm = 0;
// $valorDois = '0';
// == // FALSE
// === // TRUE
// >= // é maior OU igual?
// <= // é menor OU igual?
// != // é diferente?
// > // maior somente
// < // menor separado



// $soma == 0; // true. ?



$scope.count = 0;
$scope.trocarInformacoes = function(){
$scope.count++;
// $scope.count = $scope.count + 1;
// $scope.count += 1;


    if($scope.informacoesComMaisDados.nome == 'Matheus'){ // nome é matheus? retorn true ou false, se true
        $scope.informacoesComMaisDados.nome = 'Gustavo'; // se true, passa a ser gustavo
    } else {
        $scope.informacoesComMaisDados.nome = 'Matheus';// se nao for Matheus, agora vai ser.
    }

    // if($scope.informacoesComMaisDados.nome = 'Matheus'){ // nome é matheus!!!! (nao é uma pergunta, é uma afirmação que ele consegue executar.)
    //     $scope.informacoesComMaisDados.nome = 'Gustavo'; // se true, passa a ser gustavo
    // } else {
    //     $scope.informacoesComMaisDados.nome = 'Matheus';// se nao for Matheus, agora vai ser.
    // }

}

$scope.comparaInfo = function(){

    $valorUm = 0;
    $valorDois = '0';

    console.log($valorUm, typeof $valorUm);
    console.log($valorDois, typeof $valorDois);
    console.log($valorUm == $valorDois);
    console.log($valorUm === $valorDois);


}



});

