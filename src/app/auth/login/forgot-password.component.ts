import {Component} from '@angular/core';

@Component({
  template: `<div class="login">
                <form>
                  <label>Enter the associated with your account and we'll send you link to reset your password</label>
                  <input type="text" placeholder="name@example.com">
                  <span>Error message</span>
                  <button type="button">Send Reset<br> Password Link</button>
                </form>
              </div>`
})
export class ResetPasswordComponent {
}
