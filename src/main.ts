import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';
import { InjectionToken } from '@angular/core';

export const TaskServiceToken = new InjectionToken<TasksService>(
  'tasks-service-token'
);

// bootstrapApplication(AppComponent).catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [{ provide: TaskServiceToken, useClass: TasksService }],
}).catch((err) => console.error(err));

// providers register TaskService with the Application root EnvironmentIngector. This approach does not allow for tree shaking? shaping?
