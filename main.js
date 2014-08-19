function KittensCtrl($scope,$window){
  function Kitten(name,image,adopted){
    this.name = name;
    this.image = image;
    this.adopted = adopted;
  }
  $scope.pets = [
  new Kitten("Shoshana", "http://placekitten.com/150/150",false),
  new Kitten("Breezy", "http://placekitten.com/151/150",false), 
  new Kitten("Yael", "http://placekitten.com/152/150",false)
  ];
  $scope.test = function(petname){
    alert(petname + ' says: ohhh adtham');
  }
  $scope.addPet = function(){
    $scope.pets.push({name:$scope.newName, image:$scope.newImgUrl,adopted:false});
    $scope.newName="";
    $scope.newImgUrl="";
  }
}