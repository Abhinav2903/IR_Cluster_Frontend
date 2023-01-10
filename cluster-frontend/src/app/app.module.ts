import { BrowserModule } from '@angular/platform-browser';
import { NgModule,} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './component/search-page/search-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
