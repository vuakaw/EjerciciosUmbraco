angular.module("umbraco").controller("Macro.CheckBoxList", function ($scope) {

    $scope.options = [
        { id: 1, text: 'Left', checked: true },
        { id: 2, text: 'Right', checked: false },
        { id: 3, text: 'Center', checked: false }
    ];

    //create a blank array to store selected objects.
    $scope.selected = {
        options: $scope.model.value
    };

    $scope.$watch('model', function (newValue) {
        $scope.model = newValue;
    });

    $scope.$on("formSubmitting", function (ev, args) {
        $scope.model.value = [];
        $scope.model.value = $scope.selected.options;
    });
});