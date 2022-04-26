angular.module("umbraco")
    .controller("Macro.MultiRichTextMacro",
        function ($scope) {
            var defaultItem = {
                name: {
                    label: 'titleText',
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
                body: {
                    label: 'bodyText',
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
                collapsedItemColor: "",
                uncollapsedItemColor: "",
                bodyItemColor: ""
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
        });