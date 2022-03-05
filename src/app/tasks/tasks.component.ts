
import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from './task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  date: Date = new Date();
  constructor(
    private taskService: TaskService,
  ) {}
  ngOnInit(): void {
  }
  getPendingTasks(): number {
    return this.tasks.filter((task) => !task.IsDone).length;
  }
  add(title: string) {
    let isExist = this.taskService.isExist(title, this.tasks);
    if (!isExist) {
      var task = new Task();
      task.Title = title;
      this.tasks.push(task);
    } else {
      alert('nooooooooooooooooooooooooooooooooooooooooo');
    }
  }
  updateTask(task: Task) {
    task.IsDone = !task.IsDone;
  }
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
  deleteAllTasks() {
    this.tasks = [];
  }
}
