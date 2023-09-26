window.GioiThieuController = function ($scope, $routeParams) {
    $scope.title = "Đây là trang giới thiệu";
    console.log($routeParams);
    console.log($routeParams.id);
    console.log($routeParams.name);
    let id = $routeParams.id;
    console.log(id);
}