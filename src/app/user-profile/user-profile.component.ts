import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
   
  name: string = "said";
  email: string = "said@gmail.com";
  isDisabled: boolean = false;

  
  toggleDisable() {
    this.isDisabled = !this.isDisabled;
  }

}
