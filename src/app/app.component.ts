import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  section {
  width: 100%;
  background-color: #32435b;
  }
  h1{
  Color : #ffffff;
  }`,
  `.description{
  Font-style: italic ;
  Color : #ffffff;
  }
  `]
 ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training-app';
  session_name="Formation Java";
  firstSession = {
    id: 1,
    name: 'Formation Web',
    track: 'MEAN Stack',
    date: new Date('2018-06-13'),
    duree: 3,
    local: 'Lyon',
    participants: 0
    };
}
