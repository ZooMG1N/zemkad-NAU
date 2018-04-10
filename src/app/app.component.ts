import { Component } from '@angular/core';
import { LinksService } from './links.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = [];
  constructor(private linksService: LinksService) {
    this.links = this.linksService.links;
  }
}

