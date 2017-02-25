app.controller('mainController', ['apiService', '$state', '$scope', '$timeout', function(apiService, $state, $scope, $timeout){

  $scope.articles = false;
  $scope.firstArticle = false;
  $scope.history = apiService.history;


  apiService.search().then(function(data){
    $scope.articles = data;
    $scope.firstArticle = $scope.articles.shift();
  }, function(err){
    console.error(err);
  });


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
