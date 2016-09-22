//importam instrumentul Angular pentru crearea unui modul nou
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importam componentele proprii
import { TaskListComponent } from './task-list.component';
import { TaskDetailsComponent } from './task-details.component';
import { taskRouting, appRoutingProviders } from './task.routing';

//initializarea modulului nou
@NgModule({
  imports: [ BrowserModule, taskRouting ],
  declarations: [TaskListComponent, TaskDetailsComponent],
  providers: [ appRoutingProviders ],
  bootstrap: [ TaskListComponent ]
})

//exportarea pentru utilizarea ulterioara
export class TaskModule{

}
