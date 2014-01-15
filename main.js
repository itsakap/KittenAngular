function KittensCtrl($scope,$window){
  $scope.pets = [
  {name: "Dr. Doom", image: "http://placekitten.com/150/150",adopted:false},{name: "Wilson", image: "http://placekitten.com/151/150",adopted:false},{name: "Tuna", image: "http://placekitten.com/152/150",adopted:false}];
  $scope.test = function(petname){
    alert(petname + ' says:'+ ((petname=="Lumpy Space Princess") ? ' "ohmagash"' : ' "I want you to adopt me, momma."'));
  }
  $scope.addPet = function(){
    $scope.pets.push({name:$scope.newName, image:$scope.newImgUrl,adopted:false});
    $scope.newName="";
    $scope.newImgUrl="";
  }
}