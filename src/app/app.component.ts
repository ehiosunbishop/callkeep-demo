import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CallService } from './services/call.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor(private callService: CallService) {
    this.callService.regiserCallKit();
  }
}
