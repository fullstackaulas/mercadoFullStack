angular.module("elephant")
.controller("UsuariosCtrl", function($scope) {
  $(":input").inputmask();

    $scope.formValidation = function() {
      if ($scope.form_validation.$valid) {
        // Submit as normal
      } else {
        $scope.form_validation.submitted = true;
      }
    }
  })