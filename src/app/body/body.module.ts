import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import{ RouterModule,Routes } from '@angular/router';
import{ MatCardModule } from '@angular/material/card';

import { GetAllTheMoviesButtonComponent } from './get-all-the-movies-button/get-all-the-movies-button.component';
import { AllMoviesViewComponent } from './all-movies-view/all-movies-view.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    FormsModule
  ],
  declarations: [CarouselComponent, GetAllTheMoviesButtonComponent, AllMoviesViewComponent, UpdateComponent],
  exports:[CarouselComponent,GetAllTheMoviesButtonComponent,AllMoviesViewComponent,UpdateComponent]
})
export class BodyModule { }
