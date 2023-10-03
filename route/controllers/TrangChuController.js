window.TrangChuController = function ($scope) {
    $scope.title = "Đây là trang chủ";

    $scope.themMoi = function () {
        // Lấy ra thông tin từ ô input
        console.log($scope.inputValue);
        // Lấy ra từng giá trị
        console.log($scope.inputValue.name);
        console.log($scope.inputValue.address);
    }

    // Bài 1
    $scope.tinhTong = function () {
        $scope.sum = parseFloat($scope.number.one) + parseFloat($scope.number.two)
    }

    // Bài 2
    $scope.count = 0;
    $scope.dem = function () {
        $scope.count++;
    }
}