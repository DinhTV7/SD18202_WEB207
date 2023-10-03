window.GioiThieuController = function ($scope, $routeParams) {
    $scope.title = "Đây là trang giới thiệu";
    console.log($routeParams);
    console.log($routeParams.id);
    console.log($routeParams.name);
    let id = $routeParams.id;
    console.log(id);

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

    $scope.createStudent = function () {
        let flag = false;

        if (flag == true) {
            // Lấy dữ liệu student nhập vào
            let newStudent = {
                ten: $scope.student.name,
                namSinh: $scope.student.year,
                chuyenNganh: $scope.student.couse
            }

            console.log(newStudent);
            $scope.students.push(newStudent);
        }
    }
}