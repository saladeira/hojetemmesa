app.controller('loginCtrl',function($scope){
  
    $scope.userId = localStorage.getItem('userId');
    $scope.boxForm = true;

    $scope.login = true;
    $scope.cadastro = false;

    $scope.mudaForm = function () {
      $scope.login = !$scope.login;
      $scope.cadastro = !$scope.cadastro;
    }

    //   $scope.registerUser = function () {
    //       var createData = {
    //           'UserName': $scope.email,
    //           'Password': $scope.password,
    //           'ConfirmPassword': $scope.confirmpass
    //       };
    //       console.log(createData);
    //       return createData;
    //   };
  });