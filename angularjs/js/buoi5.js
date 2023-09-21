// Định nghĩa module
let myApp = angular.module("myNyc", []);
// 2 tham số (tên của vùng ng-app, các thành phần phụ thuộc)

// Định nghĩa vùng controller
myApp.controller("demoController", myFunction);
// 2 tham số (tên của vùng controller, tên hàm)
function myFunction($scope) {
    // Tham số $scope bắt buộc không được thay đổi 
    // và luôn luôn phải có để render dữ liệu ra view

    // Khai báo biến
    $scope.xinchao = "Hello cục cưng";
}

myApp.controller("svController", function ($scope) {
    $scope.ten = "nguyen van a";
    $scope.namSinh = "2003";
    $scope.chuyenNganh = "phat trien phan mem";

    // Khai báo mảng
    $scope.students = [
        {
            ten: "Tạ Văn Định",
            namSinh: 2005,
            chuyenNganh: "CNTT"
        },
        {
            ten: "DinhTV7",
            namSinh: 2005,
            chuyenNganh: "CNTT"
        }
    ];
});