
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule,MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { MatToolbar } from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
// import {MatDatepickerModule,MatCalendarCellClassFunction} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LocationStrategy, HashLocationStrategy, DatePipe } from '@angular/common';

import {MatStepperModule} from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {TextFieldModule} from '@angular/cdk/text-field';
import { MatSelectModule } from "@angular/material/select";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaveUserFormComponent } from './User/save-user-form/save-user-form.component';
import { HomePageComponent } from './Home-Page/home-page/home-page.component';
import { HeaderComponent } from './Home-Page/header/header.component';
import { ShowPackageListComponent } from './Packages/show-package-list/show-package-list.component';
import { ChooseDestinationComponent } from './Destination/choose-destination/choose-destination.component';


@NgModule({
  declarations: [
    AppComponent,
    SaveUserFormComponent,
    HomePageComponent,
    HeaderComponent,
    ShowPackageListComponent,
    ChooseDestinationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    RouterModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatAutocompleteModule,
    TextFieldModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatRadioModule,
    // MatDatepickerModule,
    MatNativeDateModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
