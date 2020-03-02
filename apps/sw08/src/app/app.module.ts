import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreDataModule } from '@bb/core-data';
import { MaterialModule } from '@bb/material';
import { UiToolbarModule } from '@bb/ui-toolbar';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsListComponent,
    ProjectDetailsComponent,
  ],
  imports: [
    BrowserModule,
    CoreDataModule,
    MaterialModule,
    UiToolbarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
