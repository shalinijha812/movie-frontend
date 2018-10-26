import { FooterModule } from './footer/footer.module';
import { MainComponent } from './main/main.component';
import { BodyModule } from './body/body.module';
import{ MatCardModule } from '@angular/material/card';






import { ModuleHeaderModule } from './module-header/module-header.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
   MainComponent
  ],
  imports: [
    BrowserModule,
    ModuleHeaderModule,
    BodyModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FooterModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
