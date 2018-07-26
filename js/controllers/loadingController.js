app.controller('loadingCtrl',function($scope, $location, $timeout){


  $timeout(function() { 
    $location.path('/login');
  }, 500);


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