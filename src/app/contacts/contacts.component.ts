import { Component } from '@angular/core';
import { TableContactCellsService} from '../table-contact-cells.service';

@Component({
  selector: 'app-contacts',
  template: `
    <h2 class="contact-title">Контакти кафедри землеустроюта кадастру</h2>
    <div *ngFor="let row of cells" class="container-fluid card bg-light" style="margin-bottom: 15px;">
      <div class="row hover">
        <p class="col-sm-3 col-lg-3">{{row.nameOfAudience}}</p>
        <p class="col-sm-3 col-lg-3"><a href="tel:{{row.phone}}">{{row.phone}}</a></p>
        <p class="col-sm-2 col-lg-2">{{row.numberAudience}}</p>
        <p class="col-sm-4 col-lg-4"><a routerLink="{{row.personalPageLink}}">{{row.nameOfLecturer}}</a></p>
      </div>
    </div>
  `,
  styles: [`
    .contact-title {
      margin-bottom: 20px;
    }
    p {
      margin: 5px 0;
    }
    .hover:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  `]
})
export class ContactsComponent {
  cells = [];
  constructor(private tableCellsService: TableContactCellsService) {
    this.cells = this.tableCellsService.cells;
  }
}
