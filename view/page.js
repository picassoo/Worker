/**
 * Created by MUHAMMMED ALİ on 9.07.2017.
 */
var app = angular.module("mainApp",['ngRoute']);


app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/',{
        templateUrl:'pages/home.html'
    }).when('/showStudent',{
        templateUrl:'pages/show.html'
    }).when('/addStudent',{
        templateUrl: 'pages/add.html'
    }).when('/infoStudent',{
        templateUrl:"pages/info.html"
    }).otherwise({
        redirectTo:'pages/home.html'
    });
    $locationProvider.html5Mode({
        enable:true,
        requireBase:false
    });
}]);


app.controller('studentController',function ($scope) {
    $scope.index = {
        in: 0
    };
    $scope.students =[ {
        name : "muhammed ali",
        surname : "karaboğa",
        ages : 22,
        imgsrc:"http://img.freepik.com/free-icon/male-user-close-up_318-39701.jpg?size=338&ext=jpg",
        salary:4000
    },
        {
            name : "ali",
            surname : "kara",
            ages : 45,
            imgsrc:"https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png",
            salary:6000
        },
        {
            name : "veli",
            surname : "ayıboğan",
            ages : 89,
            imgsrc:"https://pbs.twimg.com/profile_images/504186491501703168/my60FROR.jpeg",
            salary:3000
        },
        {
            name : "selim",
            surname : "gözüpek",
            ages : 40,
            imgsrc:"https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png",
            salary:10000
        }];

    $scope.addStudent = function () {
        var std = {
            name : $scope.name,
            surname : $scope.surname,
            ages : $scope.ages
        }

        $scope.students.push($scope.student);
        $scope.student = {};
    }
    $scope.updateIndex = function (i) {
        $scope.index.in=i;
    }
    
});