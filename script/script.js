
var myApp = angular.module('myModule',[]);

myApp.controller('myController',function($scope,stringService){
    var employee = {
        firstName: "Punna Rao B",
        lastName: "Batthula",
        gender: "Male"
    };
    var eamanies = [
        {firstName:"Sai", lastName:"Eamani", salary:"30000"},
        {firstName:"Krishna", lastName:"Govara", salary:"40000"},
        {firstName:"Raj Kumar", lastName:"Boddu", salary:"20000"},
        {firstName:"Punna Rao", lastName:"Batthula", salary:"10000"}
    ];
    var countries =[
        {
            name:"USA",
            cities:[
                {name:"Los Angle"},
                {name:"Chicago"},
                {name:"Dallas"}
            ]
        },
        {
            name:"INDIA",
            cities:[
                {name:"Hyderabad"},
                {name:"Vijayawada"},
                {name:"Chennai"}
            ]
        },
        {
            name:"UK",
            cities:[
                {name:"Guntur"},
                {name:"Palakollu"},
                {name:"Guntur"}
            ]
        }
    ];
    var technologies = [
        { name:"PHP", likes:0, dislikes:0 },
        { name:"Laravel", likes:0, dislikes:0 },
        { name:"Angular JS", likes:0, dislikes:0 },
        { name:"My SQL", likes:0, dislikes:0 }
    ];
    var employees = [
        {name:"Rao",dateOfBirth: new Date("February 20,1993"), gender:"Male", salary:55000.788},
        {name:"Raj",dateOfBirth: new Date("June 20,1993"), gender:"Male", salary:68000},
        {name:"Krishna",dateOfBirth: new Date("December 20,1993"), gender:"Male", salary:57000},
        {name:"Sai",dateOfBirth: new Date("November 20,1993"), gender:"Male", salary:53000},
        {name:"Noor",dateOfBirth: new Date("January 20,1993"), gender:"Male", salary:60000},
    ];
    $scope.employeeDetails = employees;
    $scope.rowsLimit = 3;
    $scope.sortColumn = "name";
    $scope.technologies = technologies;
    $scope.incrementLikes = function(technology){
        technology.likes++;
    }
    $scope.incrementDislikes = function(technology){
        technology.dislikes++;
    }
    $scope.countries = countries;
    $scope.eamanies = eamanies;
    $scope.employee = employee
    $scope.message = "We Are EamaniTech Pvt Ltd Developer.....!!!"
    $scope.transformString = function(input) {
        $scope.output = stringService.processString(input);
    }
});

/*
var myApp = angular
    .module('customServiceApp',[])
    .controller('customController',function($custom,stringService){
    $custom.transformString = function(input){
        $custom.output = stringService.processString(input);
    }
});*/
