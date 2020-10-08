import {Component, OnInit} from '@angular/core';
import {TableService} from '../shared/services/table.service';
import {TableModel} from '../shared/models/table.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CreateTableComponent} from './create-table/create-table.component';

@Component({
  selector : 'app-table',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  listTable: TableModel[];
  constructor(
    private tableService: TableService,
    private modal: NgbModal
  ) {
  }
  ngOnInit(): void {
    this.listTable = this.tableService.getAll();
  }
  openCreateNewTable() {
    //alert('');
    this.modal.open(CreateTableComponent);
  }
}
