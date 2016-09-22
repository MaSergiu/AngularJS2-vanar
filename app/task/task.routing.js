"use strict";
var router_1 = require('@angular/router');
//importam componentele proprii
var task_list_component_1 = require('./task-list.component');
var task_details_component_1 = require('./task-details.component');
//declaram rutele/path pentru modulul dat
var taskRoutes = [
    { path: 'tasks', component: task_list_component_1.TaskListComponent },
    { path: 'task-details', component: task_details_component_1.TaskDetailsComponent },
    { path: '', component: task_list_component_1.TaskListComponent }
];
exports.appRoutingProviders = [];
exports.taskRouting = router_1.RouterModule.forRoot(taskRoutes);
//# sourceMappingURL=task.routing.js.map