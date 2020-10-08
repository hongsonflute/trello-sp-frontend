import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TableModel} from '../models/table.model';
import {fakeTables} from './fake-data';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor(
    private http: HttpClient
  ) {
  }
  getAll(): TableModel[] {
  return fakeTables;
  }

  getById(id: number): TableModel {
   return  fakeTables.filter(t => t.id === id)[0];
  }
}
