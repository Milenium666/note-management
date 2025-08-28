import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {
  TuiWrapperModule,
  TuiButtonModule,
  TuiLabelModule,
  TuiGroupModule,
} from '@taiga-ui/core';

import { TuiInputModule, TuiTabsModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TuiWrapperModule,
    TuiTabsModule,
    TuiInputModule,
    TuiLabelModule,
    TuiButtonModule,
    TuiGroupModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
