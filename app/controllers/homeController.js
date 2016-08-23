app.controller('homeCtrl', function($scope, $location){

    //To Do Tasks
    var existingtodoTasks = localStorage.getItem('todoTasks'); 
    var todoTasks = (localStorage.getItem('todoTasks')!==null) ? JSON.parse(existingtodoTasks) : [{TaskTitle: "Water the Plants"}, {TaskTitle: "Publish a blog post"}, {TaskTitle: "Book Tickets"}];
    localStorage.setItem('todoTasks', JSON.stringify(todoTasks));

    //Finished Tasks
    var existingdoneTasks = localStorage.getItem('doneTasks'); 
    var doneTasks = (localStorage.getItem('doneTasks')!==null) ? JSON.parse(existingdoneTasks) : [{TaskTitle: "Clean Room"}, {TaskTitle: "Upload a youtube video"}];
    localStorage.setItem('doneTasks', JSON.stringify(doneTasks));

    $scope.todoTasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
    $scope.doneTasks = JSON.parse(localStorage.getItem('doneTasks')) || [];

    $scope.models = {
         selected: null,
         lists: {"A": [], "B":[]},
         listnames : {"A": "To Do", "B":"Done"}
     };
    for (var i = 0; i < $scope.todoTasks.length; ++i) {
        $scope.models.lists.A.push($scope.todoTasks[i]);
    }
    for (var i = 0; i < $scope.doneTasks.length; ++i) {
        $scope.models.lists.B.push($scope.doneTasks[i]);
    }


$scope.$watch('models', function(model) {
    $scope.modelAsJson = angular.toJson(model, true);
    todoTasks = model.lists.A;
    doneTasks = model.lists.B;
    localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
    localStorage.setItem('doneTasks', JSON.stringify(doneTasks));
}, true);

});
