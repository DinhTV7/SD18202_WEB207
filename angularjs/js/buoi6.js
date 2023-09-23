// Tạo 1 mảng đối tượng là các nhân viên
// Tên, ngày sinh, lương, giới tính (0 là nam, 1 là nữ)
// Sử dụng angularjs để hiển thị ra view(có thêm bootstrap)

let myApp = angular.module('myApp', []);

myApp.controller('staffsController', function ($scope) {
    $scope.staffs = [
        {
            ten: "Tạ Văn Định",
            ngaySinh: new Date("2005-11-20"),
            mucLuong: 5600000,
            gioiTinh: 0
        },
        {
            ten: "Tạ Văn Định 2",
            ngaySinh: new Date("2007-11-20"),
            mucLuong: 5600000,
            gioiTinh: 1
        },
        {
            ten: "Tạ Văn Định 3",
            ngaySinh: new Date("2005-11-20"),
            mucLuong: 5600000,
            gioiTinh: 0
        },
    ];

    $scope.hoTen = "DinhTV7";

    $scope.limit = 2;

    $scope.sayHello = function (name) {
        alert("Xin chào " + name);
    }

    $scope.hover = function () {
        console.log("Mãi bên nhau bạn nhé");
    }

    $scope.tuoi = function (age) {
        let tuoi = new Date().getFullYear() - age.getFullYear();
        if (tuoi < 18) {
            console.log("Đi tù");
        } else {
            console.log("Cưới thôi");
        }
    }
});