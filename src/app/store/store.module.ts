import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ModelModule,
      ],
      declarations: [
        StoreComponent,
      ],
      exports: [StoreComponent]
})

export class StoreModule { }
