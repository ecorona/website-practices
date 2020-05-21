import { Component, OnInit } from '@angular/core';
import { BackgroundService } from 'src/app/services/background.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private background: BackgroundService) { }

  ngOnInit(): void {
    this.background.setClase('blog');
  }

}
