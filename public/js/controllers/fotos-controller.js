//neste caso aqui quer indicar um modulo ja existente, no caso um controller
angular.module('appangular').controller('FotoController', function($scope, $http){//$resource) {
//   var fotos = [
//       {
//        titulo:'Leaozinho',
//        url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
//       },
//       {
//        titulo:'Leaozinho2',
//        url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
//       },
//       {
//        titulo:'Leaozinho3',
//        url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
//       },
//       {
//        titulo:'Leaozinho4',
//        url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
//       },
// ];
    
    $scope.fotos =[];
    
    
  //OK
    /*
    var promise = $http.get('v1/fotos');
    promise.then(function(retorno)  {
        fotos = retorno.data;
        $scope.fotos = fotos;
    }).catch(function(error) {
        console.log(error);
    });
    */
    
    $http.get('v1/fotos')
    .success(function(fotos){
        $scope.fotos = fotos
    })
    .error(function(erro){
        console.error(erro);
    })
});