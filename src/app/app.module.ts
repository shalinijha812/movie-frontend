import { AllMoviesViewComponent } from './body/all-movies-view/all-movies-view.component';
import { FooterModule } from './footer/footer.module';
import { MainComponent } from './main/main.component';
import { BodyModule } from './body/body.module';
import{ MatCardModule } from '@angular/material/card';
import{ RouterModule } from '@angular/router';


import { ModuleHeaderModule } from './module-header/module-header.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { GetAllTheMoviesButtonComponent } from './body/get-all-the-movies-button/get-all-the-movies-button.component';
import { UpdateComponent } from './body/update/update.component';


@NgModule({
  declarations: [
    AppComponent,
   MainComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path:'wishlist',component:AllMoviesViewComponent},
      {path:'update/:id/:title',component:UpdateComponent}
    ]),
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
