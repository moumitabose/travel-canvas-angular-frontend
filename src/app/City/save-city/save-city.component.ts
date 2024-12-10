import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { formatDate } from '@angular/common';

import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, FormBuilder, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { TravelCanvasBackendServiceService } from 'src/app/Service/travel-canvas-backend-service.service';
import { PasswordValidatorService } from 'src/app/Misc/password-validator.service';

@Component({
  selector: 'app-save-city',
  templateUrl: './save-city.component.html',
  styleUrls: ['./save-city.component.css']
})
export class SaveCityComponent implements OnInit {

  SaveCityForm!: UntypedFormGroup

  countries: any[] = []; // Data from backend
  selectedCountryId: number | null = null; // Selected Role ID

  currentDateTime!: string;
  todaysDate: any;
  startTime!: any;

  pipe = new DatePipe('en-US');
  now = Date.now();



  constructor(private router: Router,
    private Svc: TravelCanvasBackendServiceService, private fb: UntypedFormBuilder, private snackBar: MatSnackBar,
    private passwordSvc: PasswordValidatorService,) {
  }

  ngOnInit(): void {


    this.SaveCityForm = this.fb.group({

      cityname: [''],
      countryid: ['', Validators.required],
      countryname: [''],
      createdt: [this.currentDateTime],
      createby: [''],

    })
    this.time();
    this.getAllCountries();
  }


  time() {
    this.todaysDate = this.pipe.transform(this.now, 'yyyy-MM-dd');
    const d1 = new Date();
  
    // Ensure two-digit formatting for hours, minutes, and seconds
    const hours = d1.getHours().toString().padStart(2, '0');
    const minutes = d1.getMinutes().toString().padStart(2, '0');
    const seconds = d1.getSeconds().toString().padStart(2, '0');
  
    this.startTime = `${hours}:${minutes}:${seconds}`;
    this.currentDateTime = `${this.todaysDate}T${this.startTime}`;
    console.log(this.currentDateTime);
  
    this.SaveCityForm.controls['createdt'].setValue(this.currentDateTime);
  }
  

  getAllCountries() {
    this.Svc.getAllCountries().subscribe(data => {

      console.log(data);
      this.countries = data;

    })
  }

  onCountryChange(event: any): void {
    const selectedCountryId = event.value;
    this.SaveCityForm.patchValue({
      countryid: selectedCountryId.countryid,
      countryname: selectedCountryId.countryname
  
    });
    
  }

  saveCity()
  {
    var payload = { 
      
      cityname: this.SaveCityForm.controls['cityname'].value,
      countryid:this.SaveCityForm.controls['countryid'].value,
      createdt: this.SaveCityForm.controls['createdt'].value,
      createby: this.SaveCityForm.controls['createby'].value,
      activeflag:'Y'
     };

     console.log(payload)


     
     this.Svc.saveDestinationPackageDetails(payload).subscribe(
      (data) => {
        console.log(data);
        this.snackBar.open('Package saved successfully!', 'Close', {
          duration: 3000, // Snackbar duration in milliseconds
          horizontalPosition: 'center', // Options: 'start', 'center', 'end', 'left', 'right'
          verticalPosition: 'top' ,// Options: 'top', 'bottom'
          // panelClass: ['custom-snackbar-success']
        });
        location.reload();
      },
      (error) => {
        console.error(error);
        this.snackBar.open('Failed to save package. Try again later.', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    );
  }

 

}
