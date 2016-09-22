import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importam componentele proprii
import { TaskListComponent } from './task-list.component';
import { TaskDetailsComponent } from './task-details.component';

//declaram rutele/path pentru modulul dat
const taskRoutes: Routes = [
    { path: 'tasks', component: TaskListComponent },
    { path: 'task-details', component: TaskDetailsComponent },
    { path: '', component: TaskListComponent }
];

export const appRoutingProviders: any[] = [

];

export const taskRouting: ModuleWithProviders = RouterModule.forRoot(taskRoutes);
