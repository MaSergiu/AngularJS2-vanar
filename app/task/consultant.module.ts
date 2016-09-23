//importam instrumentul Angular pentru crearea unui modul nou
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importam componentele proprii
import { ProfileComponent } from './profile.component';
import { TaskComponent } from './task.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';



//initializarea modulului nou
@NgModule({
    imports: [ BrowserModule ],
    declarations: [ProfileComponent, TaskComponent, RegisterComponent, LoginComponent],
    bootstrap: [ ProfileComponent ]
})

//exportarea pentru utilizarea ulterioara
export class ConsultantModule{

}
