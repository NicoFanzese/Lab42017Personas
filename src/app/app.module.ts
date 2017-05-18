import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ServicioService } from './servicio.service';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { Ng2SmartTableModule, LocalDataSource  } from 'ng2-smart-table';

const appRoutes: Routes = [
  { path: 'personas', component: PersonasComponent},  
];

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,    
    RouterModule.forRoot(appRoutes),
    Ng2SmartTableModule
  ],
  providers: [ServicioService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
