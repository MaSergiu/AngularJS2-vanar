import { Component } from '@angular/core';

//decorator - initializarea
@Component({
    selector: '.register',
    template: `
        Here is your REGISTER component
        <form class="form-inline">
            <div class="form-group">
                <label for="credentials">First and Last Name</label>
                <input type="text" class="form-control" id="credentials" placeholder="Jane Doe">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="jane.doe@example.com">
            </div><div class="form-group">
                <label for="password">Password</label>
                <input type="text" class="form-control" id="password" >
            </div>
            <button type="submit" class="btn btn-default">Register</button>
        </form>
    `
})

export class RegisterComponent{

}
