import { Component } from '@angular/core';

//decorator - initializarea
@Component({
    selector: '.login',
    template: `
        Here is your LOGIN component
        <form class="form-inline">
            <div class="form-group">
                <label class="sr-only" for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Email">
            </div>
            <div class="form-group">
                <label class="sr-only" for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-default">Log in</button>
        </form>
    `
})

export class LoginComponent{

}
