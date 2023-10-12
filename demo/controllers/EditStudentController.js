window.EditStudentController = function ($scope, $routeParams, $http, $location) {
    $scope.title = "Sửa thông tin sinh viên";

    // Lấy id của student
    let studentID = $routeParams.id;

    // Link API
    const apiStudent = "http://localhost:3000/students";

    // Hiển thị thông tin chi tiết của student
    $http.get(
        `${apiStudent}/${studentID}`
    ).then(function (response) {
        if (response.status == 200) {
            $scope.student = {
                name: response.data.name,
                year: response.data.year,
                couse: response.data.couse
            }
        }
    })

    // Thực hiện việc chỉnh sửa thông tin
    $scope.editStudent = function () {

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
            let updateStudent = {
                name: $scope.student.name,
                year: $scope.student.year,
                couse: $scope.student.couse
            }
            $http.put(
                `${apiStudent}/${studentID}`, // Link API
                updateStudent  // Dữ liệu muốn thêm vào API
            ).then(function (response) {
                if (response.status == 200) {
                    $location.path("trang-chu");
                }
            })
        } else {
            alert("Bạn cần nhập đầy đủ thông tin");
        }
    }
}