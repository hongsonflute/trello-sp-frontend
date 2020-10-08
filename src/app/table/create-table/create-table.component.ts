import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {fakeTables} from '../../shared/services/fake-data';
import {TableModel} from '../../shared/models/table.model';

@Component({
  selector : 'app-create-table',
  styleUrls: ['./create-table.component.css'],
  templateUrl: 'create-table.component.html'
})
export class CreateTableComponent implements OnInit{
  table: TableModel = {}
  constructor(
    public activeModal: NgbActiveModal
  ) {
  }
  ngOnInit(): void {
  }
  saveTable() {
    this.table.id = 4;
    fakeTables.push(this.table);
    this.activeModal.close('ok');
  }
}
