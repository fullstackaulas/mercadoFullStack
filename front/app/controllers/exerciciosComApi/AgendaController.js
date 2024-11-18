angular.module('meuApp')
  .controller('AgendaController', function ($scope, $http) {


    //   Swal.fire({
    //     title: 'Sucesso!',
    //     text: 'Operação realizada com sucesso!',
    //     icon: 'success',
    //     confirmButtonText: 'Ok'
    // });

    $scope.contatos = [];

    console.log($scope.contatos);

    listar = function () {
      $url = 'http://localhost:8000/api/agenda/listar';
      $http.get($url).then(function (response) {
        console.log(response);
        $scope.contatos = response.data;

      }, function (error) {
        console.log(error);
      });

    }

    listar();

    $scope.dados = {
      id: '',
      nome: '',
      telefoneFixo: '',
      telefoneCelular: '',
      email: '',
      endereco: ''
    };

    $scope.salvarInfo = function () {
      $url = 'http://localhost:8000/api/agenda/salvar';
      $http.post($url, $scope.dados).then(function (response) {
        console.log(response);
        if (response.status == 201) {
          Swal.fire({
          title: 'Sucesso!',
            text: 'Operação realizada com sucesso!',
              icon: 'success',
                confirmButtonText: 'Ok'
        });
    }

  }, function (error) {
    console.log(error);
  });
    };

$scope.delete = function (id) {
  $url = 'http://localhost:8000/api/agenda/deletar/' + id;
  $http.delete($url).then(function (response) {
    console.log(response);

  }, function (error) {
    console.log(error);
  });
};

$scope.editar = function (id) {
  $url = 'http://localhost:8000/api/agenda/lerUm/' + id;
  $http.get($url).then(function (response) {
    console.log(response);
    $scope.dados = response.data;

  }, function (error) {
    console.log(error);
  });
};



        /*
        1- fazer a consulta carregar logo de cara (cria uma funcao e chama ela direto) - OK
        2- a consulta funcionando, criaremos 2 botoes depois Editar e excluir (sem funcionar ainda) - OK
        3- Apos fazer o 1 e 2, o botão Adicionar / editar deve criar um novo dado - OK
        4- faremos o excluir funcionar
        5- o editar deve carregar as informaçoes nos campos de texto, mudar o texto "Novo" para "Editando id #id"
        6- o botao adicionar deve mudar para editar
        7- quando estiver escrito editar, deve editar, se estiver escrito adicionar, adicionar
        8- teremos uma agenda funcional <3
        */


    });