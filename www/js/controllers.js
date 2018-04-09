angular.module('starter.controllers', [])

.controller('InfoCtrl', function($scope) {})

.controller('LinksCtrl', function($scope, Links) {

  $scope.links = Links.all();
  $scope.remove = function(link) {
    Links.remove(link);
  };
})

.controller('DicasCtrl', function($scope, Dicas) {
  $scope.dicas = Dicas.all();
  $scope.remove = function(dica) {
    Dicas.remove(dica);
  };
})


.controller('LinkDetailCtrl', function($scope, $stateParams, Links) {
  $scope.link = Links.get($stateParams.linkId);
})

.controller('ShareCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
