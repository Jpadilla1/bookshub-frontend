'use strict';

/**
 * @ngdoc function
 * @name hubAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hubAppApp
 */
var app = angular.module('hubAppApp')


    app.controller('ContactUsCtrl', function($scope, $http) {



        $scope.SendEmail = function(){
            console.log("sent");

            if($scope.category == "Complaints") $scope.category = "1";
            if($scope.category == "Question") $scope.category = "2";
            if($scope.category == "Suggestion") $scope.category = "3";

            $http({
                method: "POST",
                url: "https://bookshub.herokuapp.com/api/contact/",
                data: {
                    "body": $scope.information,
                    "subject": $scope.subject,
                    "email": $scope.email,   //past user
                    "category": $scope.category
                    
                }




            }).then(function(data){
                alert(data);
            }).then(function(data){
                alert(data);
            });

                $scope.full_name = "";
                $scope.subject = "";
                $scope.information = "";
                $scope.email = "";
                $scope.category = "";

        };

        $scope.ClearForm = function(){
                $scope.full_name = "";
                $scope.subject = "";
                $scope.information = "";
                $scope.email = "";
                $scope.category = "";
        };

         $scope.$on('$viewContentLoaded', function() {
            defaultNavbar();
         });


    });
