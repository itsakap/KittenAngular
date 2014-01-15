function KittensCtrl($scope,$window){
  $scope.pets = ["Dr. Doom","Wilson","Tuna"];
  $scope.test = function(){
    $window.alert('hieeeee');
  }
}