import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Appointment} from "../models/appointment";

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})

//We export this typeScriptClass so that we can be able to Import ot someWhere else in our Module
export class AppointmentListComponent {

  newAppointmentTitle:string = "";

  appointment: Appointment[] = [{
    id: 1,
    title: "Learn Angular",
    date: new Date("2023-07-20")
  }]

}
