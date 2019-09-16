import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomerCRUD';
  name='SohamKasar';
  dob=new Date(1998,0,19);
  salary=85640.115564; 
}
