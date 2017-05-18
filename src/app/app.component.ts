import { Component } from '@angular/core';
import { ServicioService } from './servicio.service';
import { PersonasComponent } from './personas/personas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recuperatorio Primer Parcial de Lab4 - 2017!';
}
