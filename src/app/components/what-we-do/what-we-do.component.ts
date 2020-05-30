import { Component, OnInit } from '@angular/core';
import { BackgroundService } from 'src/app/services/background.service';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss'],
})
export class WhatWeDoComponent implements OnInit {
  constructor(private background: BackgroundService) {}

  ngOnInit(): void {
    this.background.setClase('whatwedo');
  }
}
