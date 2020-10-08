import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TableComponent} from './table.component';
import {TableService} from '../shared/services/table.service';
import {CommonModule} from '@angular/common';
import {TableDetailComponent} from './table-detail/table-detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CreateTableComponent} from './create-table/create-table.component';
import {FormControl, FormsModule} from '@angular/forms';
import {TaskListService} from '../shared/services/task-list.service';
export const route: Routes = [
  {
    path: '',
    component : TableComponent
  },
  {
    path: ':id',
    component: TableDetailComponent
  }
]
@NgModule({
  declarations: [TableComponent, TableDetailComponent, CreateTableComponent],
  imports: [
    RouterModule.forChild(route),
    CommonModule,
    NgbModule,
    FormsModule
  ],
  exports : [],
  providers: [
    TableService,
    TaskListService
  ],
  entryComponents:[CreateTableComponent]
})
export class TableModule {
}
