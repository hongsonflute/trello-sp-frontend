import {TableModel} from '../models/table.model';
import {TaskListModel} from '../models/task-list.model';
import {TaskModel} from '../models/task.model';

export const fakeTables: TableModel[] = [
  {
    id: 1,
    name: 'Bảng 1'
  },
  {
    id: 2,
    name: 'Bảng 2'
  },
  {
    id: 3,
    name: 'Bảng 3'
  }
];
export const fakeTaskList: TaskListModel[] =[
  {
    id: 1,
    name: 'Việc cần làm',
    index: 1,
    tableId: 1
  },
  {
    id: 2,
    name: 'Việc đang làm',
    index: 2,
    tableId: 1
  },
  {
    id: 3,
    name: 'Việc đã làm xong',
    index: 3,
    tableId: 1
  },
  {
    id: 4,
    name: 'Việc đã Ok',
    index: 4,
    tableId: 1
  },
  {
    id: 4,
    name: 'Việc cần chuẩn bị',
    index: 1,
    tableId: 2
  },
];
export const fakeTask: TaskModel[] = [
  {
    id: 1,
    name: 'Thiết kế CSDL',
    description: 'Sử dụng CSDL thiết kế CSDL cho hệ thống',
    taskListId: 1,
    coverImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxrPf6KO7_-JVyWZF_6YGxgBvn4Cq4abCRzg&usqp=CAU'
  },
  {
    id: 2,
    name: 'Xây dựng hệ thống backend',
    description: 'Sử dụng Spring boot xây dựng hệ thống backend ',
    taskListId: 1,
    coverImageUrl: 'https://bizflyportal.mediacdn.vn/thumb_wm/1000,100/bizflyportal/images/png15879705155779.jpg'
  },
  {
    id: 3,
    name: 'Viết API các chức năng cho ứng dụng',
    description: 'Dùng spring boot viết API cho ứng dụng',
    taskListId: 1,
    coverImageUrl: 'https://images.viblo.asia/ff431b58-d250-4e8b-93bf-ff796787cf9f.jpeg'
  }
]
