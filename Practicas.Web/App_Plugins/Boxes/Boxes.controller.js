angular.module("umbraco")
    .controller("Macro.Boxes",
        function ($scope, dialogService, mediaHelper) {
            var defaultItem = {
                title: "",
                column1: {
                    label: 'information1',
                    description: '...',
                    view: 'rte',
                    value: "",
                    config: {
                        editor: {
                            toolbar: ["code", "removeformat", "forecolor", "fontselect", "fontsizeselect", "link", "unlink", "bold", "italic", "underline", "strikethrough", "undo", "redo", "cut", "styleselect", "alignleft", "aligncenter", "alignright", "bullist", "numlist", "umbmediapicker", "table", "umbembeddialog", "charmap"],
                            stylesheets: [],
                            dimensions: {
                                height: 200
                            }
                        }
                    }
                },
                column2: {
                    label: 'information2',
                    description: '...',
                    view: 'rte',
                    value: "",
                    config: {
                        editor: {
                            toolbar: ["code", "removeformat", "forecolor", "fontselect", "fontsizeselect", "link", "unlink", "bold", "italic", "underline", "strikethrough", "undo", "redo", "cut", "styleselect", "alignleft", "aligncenter", "alignright", "bullist", "numlist", "umbmediapicker", "table", "umbembeddialog", "charmap"],
                            stylesheets: [],
                            dimensions: {
                                height: 200
                            }
                        }
                    }
                },
                rounded: "",
                img: "",
                heightBox: "",
                widthBox: "",
                boxColor: "",
                outlineBoxColor: "",
                circleColor: ""
            };

            if (!$scope.model.value) {
                $scope.model.value = [];
            }

            if ($scope.model.value.length > 0) {
                $scope.selected = $scope.model.value[0];
            }

            $scope.$watch('model', function (newValue) {
                $scope.model = newValue;
            }, true);

            $scope.select = function (index) {
                $scope.selected = index;
            };

            $scope.remove = function ($index) {
                $scope.model.value.splice($index, 1);
            };

            $scope.add = function () {
                $scope.model.value.splice($scope.model.value.length + 1, 0, angular.copy(defaultItem));
                $scope.selected = $scope.model.value[$scope.model.value.length - 1];
            };
            $scope.pick = function (slide) {
                dialogService.mediaPicker({
                    multiPicker: false,
                    callback: function (data) {
                        slide.img = mediaHelper.resolveFile(data, false);
                    }
                });
            };
        });