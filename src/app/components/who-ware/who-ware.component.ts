import { Component, OnInit } from '@angular/core';
import { BackgroundService } from 'src/app/services/background.service';

@Component({
  selector: 'app-who-ware',
  templateUrl: './who-ware.component.html',
  styleUrls: ['./who-ware.component.scss'],
})
export class WhoWAreComponent implements OnInit {
  constructor(private background: BackgroundService) {}

  ngOnInit(): void {
    this.background.setClase('whoweare');
  }
}
