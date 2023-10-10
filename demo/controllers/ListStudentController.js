window.ListStudentController = function ($scope, $http) {
    $scope.title = "Danh sách sinh viên";

    // Thực hiện việc call API

    // Link API
    const apiStudent = "http://localhost:3000/students";

    // Sử dụng giao thực $http.phương thức để call api
    $http.get(apiStudent).then(function (response) {
        // Khi gọi api thành công sẽ trả về 1 đối tượng trong response
        console.log(response);
        // Lấy ra dữ liệu
        console.log(response.data);

        // Kiểm tra xem đã call api thành công hay chưa
        if (response.status == 200) {
            $scope.listStudents = response.data;
        }
    })
}