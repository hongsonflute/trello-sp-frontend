import {Injectable} from '@angular/core';
import {TaskListModel} from '../models/task-list.model';
import {fakeTaskList} from './fake-data';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  getAllByTableId(id: number): TaskListModel[] {
    return fakeTaskList.filter(kq =>  kq.tableId === id);
  }
  addNew(task: TaskListModel){
    fakeTaskList.push(task);
  }
}
