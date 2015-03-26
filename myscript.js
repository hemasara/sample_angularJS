function ExampleCtrl($scope,$http,$window){
  $scope.intdetails = [];
  $scope.isDisabled = false;

  $scope.add = function(){
        $scope.isDisabled = true;
        var parameters='{"interface":"'+$scope.interface+'"}';
        var res = $http({
                        "method": "POST",
                        "url": "/pctconfigxml",
                        "data": parameters,
                        "async": false,
                        "headers": {
                                "Content-Type": "application/json;charset=utf-8"
                        },
                        "responseType": "json"
                });
        res.success(function(response, status, headers, config){
                var str = response;
                str = str.substring(str.indexOf("{"),str.lastIndexOf("}")+1);
                var obj = JSON.parse(str);
                var data = (JSON.parse(str)).data[0];
                $scope.intdetails.push(data);
                $scope.isDisabled = false;
        });
  };

   $scope.remove = function(index){
        $scope.intdetails.splice(index, 1);
   };
}
