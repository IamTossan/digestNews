app.controller('homeController', ['$scope', 'apiService', '$location', '$state', '$timeout', function($scope, apiService, $location, $state, $timeout){

  $scope.flash = "";
  $scope.flashHome = "";
  $scope.history = apiService.history;
  $scope.isHistory = false;


  ($scope.history.length > 0) ? ($scope.isHistory = true) : ($scope.isHistory = false);


  $scope.search = function(){
    if($scope.form.$valid){
      apiService.setUrl($scope.userSearch);
      apiService.willSearch = true;
      $state.go('main');
    } else{
      $scope.flash = "recherche non-valide";
      $timeout(function(){
        $scope.flash = "";
      }, 4000);
    }
  };

  $scope.searchHome = function(){
    if($scope.formHome.$valid){
      apiService.setUrl($scope.userSearchHome);
      apiService.willSearch = true;
      $state.go('main');
    } else{
      $scope.flashHome = "recherche non-valide";
      $timeout(function(){
        $scope.flashHome = "";
      }, 4000);
    }
  };

  $scope.regex = '[A-Za-z][A-Za-z\s]+';

  $scope.viewArticleFromHistory = function(item){
    $state.go('article', {article: item});
  };


}]);
