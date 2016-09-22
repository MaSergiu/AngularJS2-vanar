import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TaskModule } from './task/task.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(TaskModule);
