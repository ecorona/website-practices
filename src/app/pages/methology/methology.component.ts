import { Component, OnInit } from '@angular/core';
import { BackgroundService } from 'src/app/services/background.service';

@Component({
  selector: 'app-methology',
  templateUrl: './methology.component.html',
  styleUrls: ['./methology.component.scss'],
})
export class MethologyComponent implements OnInit {
  constructor(private background: BackgroundService) {}

  ngOnInit(): void {
    this.background.setClase('methodology');
  }
}
