app.controller('articleController', ['$scope', 'apiService', '$stateParams', '$state', '$timeout', function($scope, apiService, $stateParams, $state, $timeout){

  $scope.article = $stateParams.article;
  $scope.history = apiService.history;

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

  $scope.regex = '[A-Za-z][A-Za-z\s]+';

  $scope.viewArticle = function(item){
    apiService.addHistory(item);
    $state.go('article', {article: item});
  };

  $scope.viewArticleFromHistory = function(item){
    $state.go('article', {article: item});
  };


}]);
