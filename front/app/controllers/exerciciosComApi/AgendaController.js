angular.module('meuApp')
    .controller('AgendaController', function ($scope, $http) {
        // <th>Nome</th>
        // <th>Telefone Fixo</th>
        // <th>Telefone Celular</th>
        // <th>Email</th>
        // <th>Endereço</th>
        // <th>Ações</th>

        // $scope.contatos = [{
        //     nome: 'Matheus',
        //     email: 'matheus.rubens@bol.com.br',
        //     telefoneFixo: '1124242424',
        //     telefoneCelular: '11980802497',
        //     endereco: 'Rua palindromo'
        // },
        // {
        //     nome: 'Matheus 2',
        //     email: 'matheus2.rubens@bol.com.br',
        //     telefoneFixo: '1111111',
        //     telefoneCelular: '2132132131',
        //     endereco: 'Rua blablabla'
        // }];

        $scope.contatos = [];

        console.log($scope.contatos);



        listar = function () {
          

        }

        listar();

        /*
        1- fazer a consulta carregar logo de cara (cria uma funcao e chama ela direto)
        2- a consulta funcionando, criaremos 2 botoes depois Editar e excluir (sem funcionar ainda)
        3- Apos fazer o 1 e 2, o botão Adicionar / editar deve criar um novo dado
        4- faremos o excluir funcionar
        5- o editar deve carregar as informaçoes nos campos de texto, mudar o texto "Novo" para "Editando id #id"
        6- o botao adicionar deve mudar para editar
        7- quando estiver escrito editar, deve editar, se estiver escrito adicionar, adicionar
        8- teremos uma agenda funcional <3
        */


    });