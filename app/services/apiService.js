app.factory('apiService', ['$q', '$http', function($q, $http){

  var factory = {
    articles: false,
    searchUrl: false,
    setUrl: function(url){
      factory.searchUrl = 'http://webhose.io/search?token=4cac9287-8d66-4a01-b42c-8fa566dcb711&format=json&q='
      + url
      + '%20Politics%20Social%20Opinion%20language%3A(english)%20thread.country%3AUS%20(site_type%3Anews)domain_rank:<1000 &sort=relevancy';
    },
    willSearch: false,
    get: function(){
      var deferred = $q.defer();
      if (factory.articles !== false){
        deferred.resolve(factory.articles);
      } else{
        deferred.reject(error);
      };
      return deferred.promise;
    },
    search: function(){
      var deferred = $q.defer();
      if (factory.articles !== false && factory.willSearch === false){
        deferred.resolve(factory.articles);
      } else{
        $http.get(factory.searchUrl/*'/data.json'*/).then(function(response){
          if(factory.articles === false){
            factory.articles = response.data.posts;
            deferred.resolve(response.data.posts);
          }else{
            factory.articles.push(response.data.posts);
            deferred.resolve(response.data.posts);
          }
        }, function(error){
          console.log(error);
          deferred.reject(error);
        });
        factory.willSearch = false;
      };

      return deferred.promise;
    },

    history: [],
    addHistory: function(item){
      factory.history.push(item);
    }
  };
  return factory;

}]);
