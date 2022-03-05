import { Injectable } from '@angular/core';
import { Task } from './task.model';
@Injectable()
export class TaskService {
  isExist(title: string, tasks: Task[]) {
    return tasks.some((task) => task.Title == title && !task.IsDone);
  }
}
