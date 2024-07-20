import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppointmentListComponent} from "./appointment-list/appointment-list.component";

/**if i am rendering a component inside another, i must add it as input in the typescript file, where i
am rendering it**/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AppointmentListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'appointment-app';
}
