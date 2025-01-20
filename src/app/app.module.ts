import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DavisComponent } from './davis/davis.component';
import { TrafalgarComponent } from './trafalgar/trafalgar.component';
import {Routes, RouterModule} from '@angular/router';
import { AddressService } from './address.service';

const approutes: Routes = [
  {path: "", component: DavisComponent},
  {path: "davis", component: DavisComponent},
  {path: "trafalgar", component: TrafalgarComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DavisComponent,
    TrafalgarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MaterialModule,ReactiveFormsModule,FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    AddressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
