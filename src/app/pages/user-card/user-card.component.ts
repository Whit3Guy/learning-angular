import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  // recebe do pai no input um user tipo User
@Input() user?: User;


  // retorna um user tipo User
@Output() userInfoEmmitter = new EventEmitter<User>()

ReturnData(){
  this.userInfoEmmitter.emit(this.user);
}
}

