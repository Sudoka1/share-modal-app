import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Correct path to AppComponent

bootstrapApplication(AppComponent).catch(err => console.error(err));