import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LanguageService} from './language.service';
import { QuotePipe } from './quote.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, ReactiveFormsModule
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
