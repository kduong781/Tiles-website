var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.view = "Type";

    var Type = function(name,link, products) {
      this.name = name;
      this.link = link;
      this.products = products;
    }

    var Product = function(name,link,desc) {
      this.name = name;
      this.link = link;
      this.desc = desc;
    }

    var t1 = [
      new Product("t1p1","./assets/images/gal-8.jpeg","type1 product1"),
      new Product("t1p2","./assets/images/gal-9.jpeg","type1 product2"),
      new Product("t1p3","./assets/images/gal-10.jpeg","type1 product3"),
    ];
    var t2 = [
      new Product("t2p1","./assets/images/gal-11.jpeg","type2 product1"),
      new Product("t2p2","./assets/images/gal-12.jpeg","type2 product2"),
      new Product("t2p3","./assets/images/gal-13.jpeg","type2 product3"),
    ]
    var t3 = [
      new Product("t3p1","./assets/images/gal-14.jpeg","type3 product1"),
      new Product("t3p2","./assets/images/gal-10.jpeg","type3 product2"),
      new Product("t3p3","./assets/images/gal-9.jpeg","type3 product3"),
    ]
    var t4 = [
      new Product("t4p1","./assets/images/gal-7.jpeg","type4 product1"),
      new Product("t4p2","./assets/images/gal-9.jpeg","type4 product2"),
      new Product("t4p3","./assets/images/gal-4.jpeg","type4 product3"),
    ]
    var t5 = [
      new Product("t5p1","./assets/images/gal-6.jpeg","type5 product1"),
      new Product("t5p2","./assets/images/gal-9.jpeg","type5 product2"),
      new Product("t5p3","./assets/images/gal-13.jpeg","type5 product3"),
    ]
    var t6 = [
      new Product("t6p1","./assets/images/gal-12.jpeg","type6 product1"),
      new Product("t6p2","./assets/images/gal-9.jpeg","type6 product2"),
      new Product("t6p3","./assets/images/gal-11.jpeg","type6 product3"),
    ]
    var t7 = [
      new Product("t7p1","./assets/images/gal-4.jpeg","type7 product1"),
      new Product("t7p2","./assets/images/gal-9.jpeg","type7 product2"),
      new Product("t7p3","./assets/images/gal-14.jpeg","type7 product3"),
    ]

    $scope.types =
    [
      new Type("type1", "./assets/images/gal-1.jpeg",t1),
      new Type("type2", "./assets/images/gal-2.jpeg",t2),
      new Type("type3", "./assets/images/gal-3.jpeg",t3),
      new Type("type4", "./assets/images/gal-1.jpeg",t4),
      new Type("type5", "./assets/images/gal-5.jpeg",t5),
      new Type("type6", "./assets/images/gal-6.jpeg",t6),
      new Type("type7", "./assets/images/gal-7.jpeg",t7),
    ];

    $scope.showProducts = function(name,products) {
      $scope.view = "Products";
      $scope.products = products;
      $scope.typeName = name;
    };

    $scope.goBack = function() {
      if($scope.view == "Products") {
        $scope.view = "Type";
      } else if($scope.view == "Product") {
        $scope.view = "Products";
      }
    }

    $scope.showProduct = function(product) {
      $scope.view = "Product";
      $scope.currentProduct = product;
    }

});
