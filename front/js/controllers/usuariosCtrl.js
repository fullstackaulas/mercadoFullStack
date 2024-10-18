angular.module("elephant")
.controller("UsuariosCtrl", function($scope, DTOptionsBuilder, DTColumnBuilder) {
  $(":input").inputmask();

    $scope.formValidation = function() {
      if ($scope.form_validation.$valid) {
        // Submit as normal
      } else {
        $scope.form_validation.submitted = true;
      }
    }

    $scope.info = [
      { email: "matheus.rubens@hotmail.com", nome: "Matheus Rubens", cpf: "123.456.789-00" },
      { email: "jane.doe@example.com", nome: "Jane Doe", cpf: "234.567.890-12" },
      { email: "john.smith@example.com", nome: "John Smith", cpf: "345.678.901-23" },
      { email: "lisa.jones@example.com", nome: "Lisa Jones", cpf: "456.789.012-34" },
      { email: "mike.brown@example.com", nome: "Mike Brown", cpf: "567.890.123-45" },
      { email: "sara.davis@example.com", nome: "Sara Davis", cpf: "678.901.234-56" },
      { email: "david.wilson@example.com", nome: "David Wilson", cpf: "789.012.345-67" },
      { email: "emily.johnson@example.com", nome: "Emily Johnson", cpf: "890.123.456-78" },
      { email: "chris.lee@example.com", nome: "Chris Lee", cpf: "901.234.567-89" },
      { email: "karen.harris@example.com", nome: "Karen Harris", cpf: "012.345.678-90" },
      { email: "robert.clark@example.com", nome: "Robert Clark", cpf: "123.456.789-01" },
      { email: "patricia.martin@example.com", nome: "Patricia Martin", cpf: "234.567.890-13" },
      { email: "steven.thompson@example.com", nome: "Steven Thompson", cpf: "345.678.901-24" },
      { email: "jessica.white@example.com", nome: "Jessica White", cpf: "456.789.012-35" },
      { email: "mark.lewis@example.com", nome: "Mark Lewis", cpf: "567.890.123-46" },
      { email: "susan.martinez@example.com", nome: "Susan Martinez", cpf: "678.901.234-57" },
      { email: "james.anderson@example.com", nome: "James Anderson", cpf: "789.012.345-68" },
      { email: "linda.taylor@example.com", nome: "Linda Taylor", cpf: "890.123.456-79" },
      { email: "michael.miller@example.com", nome: "Michael Miller", cpf: "901.234.567-80" },
      { email: "elizabeth.martin@example.com", nome: "Elizabeth Martin", cpf: "012.345.678-91" },
      { email: "joseph.lee@example.com", nome: "Joseph Lee", cpf: "123.456.789-02" },
      { email: "julia.rodriguez@example.com", nome: "Julia Rodriguez", cpf: "234.567.890-14" },
      { email: "paul.garcia@example.com", nome: "Paul Garcia", cpf: "345.678.901-25" },
      { email: "diana.wilson@example.com", nome: "Diana Wilson", cpf: "456.789.012-36" },
      { email: "nathan.johnson@example.com", nome: "Nathan Johnson", cpf: "567.890.123-47" },
      { email: "lori.perez@example.com", nome: "Lori Perez", cpf: "678.901.234-58" },
      { email: "brian.thompson@example.com", nome: "Brian Thompson", cpf: "789.012.345-69" },
      { email: "stephanie.moore@example.com", nome: "Stephanie Moore", cpf: "890.123.456-70" },
      { email: "justin.jackson@example.com", nome: "Justin Jackson", cpf: "901.234.567-81" },
      { email: "kimberly.martin@example.com", nome: "Kimberly Martin", cpf: "012.345.678-92" },
      { email: "timothy.brown@example.com", nome: "Timothy Brown", cpf: "123.456.789-03" },
      { email: "charlotte.scott@example.com", nome: "Charlotte Scott", cpf: "234.567.890-15" },
      { email: "adam.johnson@example.com", nome: "Adam Johnson", cpf: "345.678.901-26" },
      { email: "maria.rodriguez@example.com", nome: "Maria Rodriguez", cpf: "456.789.012-37" },
      { email: "cynthia.hall@example.com", nome: "Cynthia Hall", cpf: "567.890.123-48" },
      { email: "jeremy.brown@example.com", nome: "Jeremy Brown", cpf: "678.901.234-59" },
      { email: "sharon.clark@example.com", nome: "Sharon Clark", cpf: "789.012.345-70" },
      { email: "george.miller@example.com", nome: "George Miller", cpf: "890.123.456-81" },
      { email: "heather.johnson@example.com", nome: "Heather Johnson", cpf: "901.234.567-82" },
      { email: "diana.thompson@example.com", nome: "Diana Thompson", cpf: "012.345.678-93" },
      { email: "edward.jones@example.com", nome: "Edward Jones", cpf: "123.456.789-04" },
      { email: "jessica.davis@example.com", nome: "Jessica Davis", cpf: "234.567.890-16" },
      { email: "robert.smith@example.com", nome: "Robert Smith", cpf: "345.678.901-27" },
      { email: "linda.brown@example.com", nome: "Linda Brown", cpf: "456.789.012-38" },
      { email: "thomas.johnson@example.com", nome: "Thomas Johnson", cpf: "567.890.123-49" },
      { email: "charles.martin@example.com", nome: "Charles Martin", cpf: "678.901.234-60" },
      { email: "kimberly.thompson@example.com", nome: "Kimberly Thompson", cpf: "789.012.345-71" },
      { email: "ryan.scott@example.com", nome: "Ryan Scott", cpf: "890.123.456-82" },
      { email: "sarah.brown@example.com", nome: "Sarah Brown", cpf: "901.234.567-83" },
      { email: "peter.johnson@example.com", nome: "Peter Johnson", cpf: "012.345.678-94" },
      { email: "megan.smith@example.com", nome: "Megan Smith", cpf: "123.456.789-05" },
      { email: "brian.davis@example.com", nome: "Brian Davis", cpf: "234.567.890-17" },
      { email: "amber.martin@example.com", nome: "Amber Martin", cpf: "345.678.901-28" },
      { email: "jeremy.harris@example.com", nome: "Jeremy Harris", cpf: "456.789.012-39" },
      { email: "kayla.thompson@example.com", nome: "Kayla Thompson", cpf: "567.890.123-50" },
      { email: "olivia.jones@example.com", nome: "Olivia Jones", cpf: "678.901.234-61" },
      { email: "steven.davis@example.com", nome: "Steven Davis", cpf: "789.012.345-72" },
      { email: "jessica.brown@example.com", nome: "Jessica Brown", cpf: "890.123.456-83" }
    ];
    
    


    //$scope.info = PEganobancodedados();

    $scope.usuario = {
      email: '',
      nome: '',
      senha: '',
      cpf: '',
      nascimento: '',
      sexo: '',
      celular: '',
      telefone: ''

    };

    $scope.formValidation = function(){
      console.log($scope.usuario);
    }


    $scope.options = DTOptionsBuilder
      // .fromSource("salaries.json")
      .newOptions()  // Certifique-se de usar newOptions
      .withOption("data", $scope.info) // Usa a variável $scope.info
      .withDOM(`<"row"<"col-sm-6"i><"col-sm-6"f>>
      <"table-responsive"tr><"row"<"col-sm-6"l><"col-sm-6"p>>`)
      .withBootstrap()
      .withLanguage({
        "decimal": "",
        "emptyTable": "Nenhum dado disponível na tabela",
        "info": "Mostrando de _START_ até _END_ de _TOTAL_ entradas",
        "infoEmpty": "Mostrando 0 até 0 de 0 entradas",
        "infoFiltered": "(filtrado de _MAX_ entradas no total)",
        "lengthMenu": "Mostrar _MENU_ entradas",
        "loadingRecords": "Carregando...",
        "processing": "Processando...",
        "search": "Pesquisar:",
        "zeroRecords": "Nenhum resultado encontrado",
        "paginate": {
          "first": "Primeira",
          "last": "Última",
          "next": "Próxima",
          "previous": "Anterior"
        }
      })
      .withOption("order", [
        [1, "desc"]
      ])
      .withOption("responsive", true);

    $scope.columns = [
      DTColumnBuilder.newColumn("email").withTitle("email"),
      DTColumnBuilder.newColumn("nome").withTitle("nome"),
      DTColumnBuilder.newColumn("cpf").withTitle("cpf")
    ];

  })