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
      new Product("KT-2401","./assets/images/floor/KT/20x25/KT-2401-fill-170x274.jpg","type1 product1"),
      new Product("KT-2401V1","./assets/images/floor/KT/20x25/KT-2401V1-fill-170x274.jpg","type1 product2"),
      new Product("KT-2401V2","./assets/images/floor/KT/20x25/KT-2401V2-fill-170x274.jpg","type1 product1"),
      new Product("KT-2401V3","./assets/images/floor/KT/20x25/KT-2401V3-fill-170x273.jpg","type1 product2"),
      new Product("KT-2402","./assets/images/floor/KT/20x25/KT-2402-fill-170x273.jpg","type1 product1"),
      new Product("KT-2402V1","./assets/images/floor/KT/20x25/KT-2402V1-fill-170x273.jpg","type1 product2"),
      new Product("KT-2402V2","./assets/images/floor/KT/20x25/KT-2402V2-fill-170x273.jpg","type1 product1"),
      new Product("KT-2403V2","./assets/images/floor/KT/20x25/KT-2403V2-fill-170x272.jpg","type1 product2"),
      new Product("KT-2404V1","./assets/images/floor/KT/20x25/KT-2404V1-fill-170x270.jpg","type1 product1"),
      new Product("KT-2404V2","./assets/images/floor/KT/20x25/KT-2404V2-fill-170x270.jpg","type1 product2"),
      new Product("KT-2405V1","./assets/images/floor/KT/20x25/KT-2405V1-fill-170x270.jpg","type1 product1"),
      new Product("KT-2406V1","./assets/images/floor/KT/20x25/KT-2406V1-fill-170x275.jpg","type1 product2"),
      new Product("KT-2409V2","./assets/images/floor/KT/20x25/KT-2409V2-fill-170x274.jpg","type1 product1"),
      new Product("KT-2410V1","./assets/images/floor/KT/20x25/KT-2410V1-fill-170x271.jpg","type1 product2"),

      new Product("P-2503V1","./assets/images/floor/PLAZA/25x40/P-2503V1-fill-170x271.jpg","type1 product1"),
      new Product("P-2503V2","./assets/images/floor/PLAZA/25x40/P-2503V2-fill-170x270.jpg","type1 product1"),
      new Product("P-2504V1","./assets/images/floor/PLAZA/25x40/P-2504V1-fill-170x272.jpg","type1 product1"),
      new Product("P-2505V1","./assets/images/floor/PLAZA/25x40/P-2505V1-fill-170x272.jpg","type1 product1"),
      new Product("P-2505V2","./assets/images/floor/PLAZA/25x40/P-2505V2-fill-170x271.jpg","type1 product1"),
      new Product("P-2507V2","./assets/images/floor/PLAZA/25x40/P-2507V2-fill-170x274.jpg","type1 product1"),
      new Product("P-2508V1","./assets/images/floor/PLAZA/25x40/P-2508V1-fill-170x271.jpg","type1 product1"),
      new Product("P-2510","./assets/images/floor/PLAZA/25x40/P-2510-fill-170x276.jpg","type1 product1"),
      new Product("P-2510V1","./assets/images/floor/PLAZA/25x40/P-2510V1-fill-170x274.jpg","type1 product1"),
      new Product("P-2510V2","./assets/images/floor/PLAZA/25x40/P-2510V2-fill-170x275.jpg","type1 product1"),
    ];
    var kitchen = [
      new Product("KT-01","./assets/images/kt/tile-6.jpg","type1 product1"),
      new Product("KT-02","./assets/images/kt/tile-7.jpg","type1 product2"),
      new Product("KT-03","./assets/images/kt/tile-8.jpg","type1 product3"),
      new Product("KT-04","./assets/images/kt/tile-9.jpg","type1 product3"),
      new Product("KT-05","./assets/images/kt/tile-10.jpg","type1 product3"),
    ]
    var wall = [
      new Product("KT-301","./assets/images/wall/KT/30x30/KT-301-fill-225x225.jpg","type1 product1"),
      new Product("KT-302","./assets/images/wall/KT/30x30/KT-302-fill-225x225.jpg","type1 product2"),
      new Product("KT-303","./assets/images/wall/KT/30x30/KT-303-fill-225x225.jpg","type1 product3"),
      new Product("KT-304","./assets/images/wall/KT/30x30/KT-304-fill-225x225.jpg","type1 product3"),
      new Product("KT-305","./assets/images/wall/KT/30x30/KT-305-fill-225x224.jpg","type1 product3"),
      new Product("KT-306","./assets/images/wall/KT/30x30/KT-306-fill-225x225.jpg","type1 product3"),
      new Product("KT-307","./assets/images/wall/KT/30x30/KT-307-fill-225x225.jpg","type1 product3"),
      new Product("KT-308","./assets/images/wall/KT/30x30/KT-308-fill-225x225.jpg","type1 product3"),
      new Product("KT-309","./assets/images/wall/KT/30x30/KT-309-fill-225x225.jpg","type1 product3"),
      new Product("KT-310","./assets/images/wall/KT/30x30/KT-310-fill-225x225.jpg","type1 product3"),
      new Product("KT-311","./assets/images/wall/KT/30x30/KT-311-fill-225x225.jpg","type1 product3"),
      new Product("KT-312","./assets/images/wall/KT/30x30/KT-312-fill-225x225.jpg","type1 product3"),
      new Product("KT-313","./assets/images/wall/KT/30x30/KT-313-fill-225x225.jpg","type1 product3"),
      new Product("KT-314","./assets/images/wall/KT/30x30/KT-314-fill-225x225.jpg","type1 product3"),

      new Product("P-3301","./assets/images/wall/PLAZA/30x30/P-3301-fill-225x224.jpg","type1 product1"),
      new Product("P-3302","./assets/images/wall/PLAZA/30x30/P-3302-fill-225x224.jpg","type1 product1"),
      new Product("P-3303","./assets/images/wall/PLAZA/30x30/P-3303-fill-225x224.jpg","type1 product1"),
      new Product("P-3304","./assets/images/wall/PLAZA/30x30/P-3304-fill-225x225.jpg","type1 product1"),
      new Product("P-3305","./assets/images/wall/PLAZA/30x30/P-3305-fill-225x225.jpg","type1 product1"),
      new Product("P-3306","./assets/images/wall/PLAZA/30x30/P-3306-fill-225x225.jpg","type1 product1"),
      new Product("P-3308","./assets/images/wall/PLAZA/30x30/P-3308-fill-225x224.jpg","type1 product1"),
      new Product("P-3309","./assets/images/wall/PLAZA/30x30/P-3309-fill-225x224.jpg","type1 product1"),
      new Product("P-3310","./assets/images/wall/PLAZA/30x30/P-3310-fill-225x225.jpg","type1 product1"),
      new Product("P-3311","./assets/images/wall/PLAZA/30x30/P-3311-fill-225x225.jpg","type1 product1"),
      new Product("P-3312","./assets/images/wall/PLAZA/30x30/P-3312-fill-225x225.jpg","type1 product1"),
      new Product("P-3313","./assets/images/wall/PLAZA/30x30/P-3313-fill-225x225.jpg","type1 product1"),
      new Product("P-3314","./assets/images/wall/PLAZA/30x30/P-3314-fill-225x225.jpg","type1 product1"),
      new Product("P-3315","./assets/images/wall/PLAZA/30x30/P-3315-fill-225x225.jpg","type1 product1"),
      new Product("P-3316","./assets/images/wall/PLAZA/30x30/P-3316-fill-225x225.jpg","type1 product1"),

      new Product("C-418","./assets/images/wall/PLAZA2/plaza-gach40x40/C-418-fill-225x225.jpg","type1 product1"),
      new Product("C-431","./assets/images/wall/PLAZA2/plaza-gach40x40/C-431-fill-225x225.jpg","type1 product1"),
      new Product("C-432","./assets/images/wall/PLAZA2/plaza-gach40x40/C-432-fill-225x225.jpg","type1 product1"),
      new Product("C-433","./assets/images/wall/PLAZA2/plaza-gach40x40/C-433-fill-225x225.jpg","type1 product1"),
      new Product("C-445","./assets/images/wall/PLAZA2/plaza-gach40x40/C-445-fill-225x225.jpg","type1 product1"),
      new Product("C-446","./assets/images/wall/PLAZA2/plaza-gach40x40/C-445-fill-225x225.jpg","type1 product1"),
      new Product("C-449","./assets/images/wall/PLAZA2/plaza-gach40x40/C-449-fill-225x225.jpg","type1 product1"),
      new Product("C-450","./assets/images/wall/PLAZA2/plaza-gach40x40/C-450-fill-225x224.jpg","type1 product1"),
      new Product("C-452","./assets/images/wall/PLAZA2/plaza-gach40x40/C-452-fill-225x226.jpg","type1 product1"),
      new Product("C-460","./assets/images/wall/PLAZA2/plaza-gach40x40/c-460-fill-225x225.jpg","type1 product1"),
      new Product("C-461","./assets/images/wall/PLAZA2/plaza-gach40x40/c-461-fill-225x223.jpg","type1 product1"),
      new Product("C-462","./assets/images/wall/PLAZA2/plaza-gach40x40/c-462-fill-225x223.jpg","type1 product1"),
      new Product("C-467","./assets/images/wall/PLAZA2/plaza-gach40x40/C-467-fill-225x226.jpg","type1 product1"),
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
