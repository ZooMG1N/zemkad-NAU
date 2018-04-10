import { Component, OnInit } from '@angular/core';
import { CollectiveService} from '../collective.service';

@Component({
  selector: 'app-collective',
  template: `
    <h2>Колектив кафедри землевпорядкування та кадастру</h2>
    <p>Навчальний процес на кафедрі забезпечує висококваліфікований колектив викладачів, ускладі якого 1 професор, 3 доцента, 3 старші
       викладачі, 6 асистентів. Всього на кафедрі працює 13 викладачів та 2 особи навчально-допоміжного складу</p>
    <h2>Професорсько-викладацький склад:</h2>
    <div *ngFor="let person of collective" class="wrapper card bg-light">
      <a routerLink="{{person.rout}}">{{person.name}}</a>
      <p>{{person.introDescription}}</p>
    </div>
    <h3>Навчально-допоміжний склад:</h3>
  `,
  styles: [`
    .wrapper {
      margin-bottom: 15px;
      padding: 10px;
      padding-bottom: 0;
    }
    a{
      text-transform: uppercase;
    }
  `]
})
export class CollectiveComponent {

  collective = [];
  constructor(private collectiveService: CollectiveService) {
    this.collective = this.collectiveService.collective;
  }
}
