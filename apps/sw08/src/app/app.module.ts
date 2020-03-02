import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreDataModule } from '@bb/core-data';
import { MaterialModule } from '@bb/material';
import { UiToolbarModule } from '@bb/ui-toolbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreDataModule,
    MaterialModule,
    UiToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
