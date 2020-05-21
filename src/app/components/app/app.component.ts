import { Component } from '@angular/core';
import { BackgroundService } from 'src/app/services/background.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{


  constructor( public background: BackgroundService){
    
  }

 


}
