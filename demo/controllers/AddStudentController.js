window.AddStudentController = function ($scope, $http, $location) {
    $scope.title = "Thêm thông tin sinh viên"

    $scope.addStudent = function () {
        // Link API
        const apiStudent = "http://localhost:3000/students";

        // Tạo 1 giá trị để kiểm tra
        let flag = true;

        // Kiểm tra từng trường dữ liệu
        $scope.kiemTra = {
            name: false,
            year: false,
            couse: false
        }

        // Kiểm tra giá trị
        if (!$scope.student || !$scope.student.name) {
            flag = false;
            $scope.kiemTra.name = true;
        }
        if (!$scope.student || !$scope.student.year) {
            flag = false;
            $scope.kiemTra.year = true;
        }
        if (!$scope.student || !$scope.student.couse) {
            flag = false;
            $scope.kiemTra.couse = true;
        }

        if (flag) {
            // Lấy dữ liệu thêm tư ô input
            let newStudent = {
                name: $scope.student.name,
                year: $scope.student.year,
                couse: $scope.student.couse
            }
            $http.post(
                apiStudent, // Link API
                newStudent  // Dữ liệu muốn thêm vào API
            ).then(function (response) {
                // console.log(response);
                if (response.status == 201) {
                    $location.path("trang-chu");
                }
            })
        } else {
            alert("Bạn cần nhập đầy đủ thông tin");
        }
    }
}