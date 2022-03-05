import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TasksComponent } from './tasks/tasks.component';
import { MaxLengthPipe } from './max-length.pipe';
import { TaskService } from './tasks/task.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TasksComponent,
    MaxLengthPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
