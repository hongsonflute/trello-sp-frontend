import {Component, OnInit} from '@angular/core';
import {TaskListService} from '../../shared/services/task-list.service';
import {TaskListModel} from '../../shared/models/task-list.model';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {fakeTaskList} from '../../shared/services/fake-data';
import {TableService} from '../../shared/services/table.service';
import {TableModel} from '../../shared/models/table.model';

@Component({
  selector: 'app-table-detail',
  styleUrls: ['./table-detail.component.css'],
  templateUrl: './table-detail.component.html'
})
export class TableDetailComponent implements OnInit {
  tableId: number;
  tableNow: TableModel = {};
  tableIdFromRoute: Observable<string>
  taskListArr: TaskListModel[] = [];
  openNewTaskList = false;
  idTaskListAddNew: number;
  taskList: TaskListModel = {};
  constructor(
    private route: ActivatedRoute,
    private taskListService: TaskListService,
    private tableService: TableService
  ) {
  }
  ngOnInit(): void {
    console.log(this.taskListArr);
    this.tableIdFromRoute = this.route.paramMap.pipe(map(params => params.get('id') || 'None')
    )
    this.tableIdFromRoute.subscribe(id => {
      this.tableId = Number(id);
      console.log(id);
      this.taskListArr = this.taskListService.getAllByTableId(Number(id));
      this.tableNow = this.tableService.getById(Number(id));
      console.log(this.tableNow);
    });
  }
  openAddTaskToList(idList: number) {
    this.idTaskListAddNew = idList;
  }
  closeAddTask(){
    this.idTaskListAddNew = undefined;
  }
  addNewTaskList() {
    console.log(this.taskListArr);
    if (this.taskListArr.length > 0){
      this.taskList.id = (this.taskListArr[this.taskListArr.length - 1].id) + 1;
      this.taskList.tableId = this.tableId;
      this.taskList.index = this.taskListArr.length+1;
    } else {
      this.taskList.id = 1;
      this.taskList.tableId = this.tableId;
      this.taskList.index = 1;
    }
    this.taskListService.addNew(this.taskList);
    console.log(fakeTaskList);
    this.taskListArr = this.taskListService.getAllByTableId(this.tableId);
    this.taskList = {};
  }
}
