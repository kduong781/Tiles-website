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

    var floor = [
      new Product("KT-01","./assets/images/kt/tile-1.jpg","type1 product1"),
      new Product("KT-02","./assets/images/kt/tile-2.jpg","type1 product2"),
      new Product("KT-03","./assets/images/kt/tile-3.jpg","type1 product3"),
      new Product("KT-04","./assets/images/kt/tile-4.jpg","type1 product3"),
      new Product("KT-05","./assets/images/kt/tile-5.jpg","type1 product3"),
    ];
    var kitchen = [
      new Product("KT-01","./assets/images/kt/tile-6.jpg","type1 product1"),
      new Product("KT-02","./assets/images/kt/tile-7.jpg","type1 product2"),
      new Product("KT-03","./assets/images/kt/tile-8.jpg","type1 product3"),
      new Product("KT-04","./assets/images/kt/tile-9.jpg","type1 product3"),
      new Product("KT-05","./assets/images/kt/tile-10.jpg","type1 product3"),
    ]
    var wall = [
      new Product("KT-01","./assets/images/kt/tile-11.jpg","type1 product1"),
      new Product("KT-02","./assets/images/kt/tile-9.jpg","type1 product2"),
      new Product("KT-03","./assets/images/kt/tile-13.jpg","type1 product3"),
      new Product("KT-04","./assets/images/kt/tile-14.jpg","type1 product3"),
      new Product("KT-05","./assets/images/kt/tile-15.jpg","type1 product3"),
    ]
    var bathroom = [
      new Product("KT-01","./assets/images/kt/tile-16.jpg","type1 product1"),
      new Product("KT-02","./assets/images/kt/tile-2.jpg","type1 product2"),
      new Product("KT-03","./assets/images/kt/tile-13.jpg","type1 product3"),
      new Product("KT-04","./assets/images/kt/tile-4.jpg","type1 product3"),
      new Product("KT-05","./assets/images/kt/tile-15.jpg","type1 product3"),
    ]

    $scope.types =
    [
      new Type("Floor", "./assets/images/gal-1.jpeg",floor),
      new Type("Kitchen", "./assets/images/gal-2.jpeg",kitchen),
      new Type("Wall", "./assets/images/gal-3.jpeg",wall),
      new Type("Bathroom", "./assets/images/gal-1.jpeg",bathroom),
    ];

    //Floor,Kitchen,Wall,Bathroom

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
