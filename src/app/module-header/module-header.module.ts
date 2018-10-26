

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { LogoComponent } from './header-container/logo/logo.component';
import {HttpClientModule} from '@angular/common/http';
import{ MatCardModule } from '@angular/material/card';



import{ FormsModule } from '@angular/forms';
import { SearchDummyComponent } from './header-container/search-dummy/search-dummy.component';
import { SearchSmartComponent } from './header-container/search-smart/search-smart.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule
    
   

  ],
  declarations: [HeaderContainerComponent, LogoComponent, SearchDummyComponent, SearchSmartComponent],
  exports:[LogoComponent,SearchDummyComponent,SearchSmartComponent]
})
export class ModuleHeaderModule { }
