angular.module('meuApp')
    .controller('RegistreSeController', function ($scope, $http, $state) {


        $scope.info = {

        }


        $scope.criarCadastro = function () {
            $url = '';

            $http.post($url, $scope.login).then(function (response) {
                if (response.status == 200) {


                }
                console.log(response);
            }, function (error) {
                console.log(error);

            })
        }



    });