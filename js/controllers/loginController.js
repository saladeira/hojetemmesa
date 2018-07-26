app.controller('loginCtrl',function($scope){
  
    $scope.userId = localStorage.getItem('userId');

    $scope.classeSlideLogin = 'animated bounceInLeft delay-05s';
    $scope.classeSlideCadastro = 'hide';

    $scope.mudaForm = function () {
      var parent = document.querySelector('.cadastro');

      if (document.querySelector('.hide') !== null) {
        $scope.classeSlideLogin = 'animated fadeOutLeft';
        $scope.classeSlideCadastro = 'animated bounceInRight';
      } else {
        $scope.classeSlideLogin = 'animated bounceInLeft';
        $scope.classeSlideCadastro = 'animated fadeOutRight hide';
      }
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