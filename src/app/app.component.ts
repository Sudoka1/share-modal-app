import { Component } from '@angular/core';
import { ShareModalComponent } from './share-modal/share-modal.component';

@Component({
  selector: 'app-root',
  standalone: true, // Mark this as standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ShareModalComponent] // Import other standalone components here
})
export class AppComponent {
  title = 'ShareModalApp';
}
