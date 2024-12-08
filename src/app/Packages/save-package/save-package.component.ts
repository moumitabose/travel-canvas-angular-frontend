import { Component, OnInit, ViewChild } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, FormBuilder, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { TravelCanvasBackendServiceService } from 'src/app/Service/travel-canvas-backend-service.service';

@Component({
  selector: 'app-save-package',
  templateUrl: './save-package.component.html',
  styleUrls: ['./save-package.component.css']
})
export class SavePackageComponent implements OnInit {

  SavePackageForm!: UntypedFormGroup

  destinations: any[] = []; // Data from backend
  selectedCityId: number | null = null; // Selected city ID
  selectedCountry: string = ''; // Corresponding country name
  selectedCity: string = ''; // Selected city name
  selectedDestinationId: number | null = null;
  currentDateTime!: string;
  todaysDate: any;
  startTime!: any;

  pipe = new DatePipe('en-US');
  now = Date.now();


  constructor(private router: Router, private Svc: TravelCanvasBackendServiceService, private fb: UntypedFormBuilder,
    private formBuilder: FormBuilder, private snackBar: MatSnackBar,
    public dialog: MatDialog, ) { }

  ngOnInit(): void {

    this.SavePackageForm = this.fb.group({

      noofdays: [''],
      noofnight: [''],
      priceperperson: [''],
      destinationid: [''],
      createdt: [this.currentDateTime],
      createby: [''],


    })

    this.time();
    this.getAllDestinationDetails();
  }

  // time()
  // {
  //   this.todaysDate = this.pipe.transform(this.now, 'yyyy-MM-dd');
  //   var d1 = new Date();
  //   this.startTime = d1.getHours() + ":" + + d1.getMinutes() + ":" + d1.getSeconds();
  //   this.currentDateTime = this.todaysDate + "T" + this.startTime.toString();
  //   console.log(this.currentDateTime)

  //   this.SavePackageForm.controls['createdt'].setValue(this.currentDateTime)
  // }

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
  
    this.SavePackageForm.controls['createdt'].setValue(this.currentDateTime);
  }
  

  getAllDestinationDetails()
  {
    this.Svc.getAllDestinationDetails().subscribe(data => {

      console.log(data);
      this.destinations = data;

    })

  }

 

  
  onCityChange(): void {
    const selectedDestination = this.destinations.find(
      (dest) => dest.cityid === this.selectedCityId
    );
    if (selectedDestination) {
      this.selectedCity = selectedDestination.cityname;
      this.selectedCountry = selectedDestination.countryname;
      this.selectedDestinationId = selectedDestination.destinationid;
  
     }
  }

  savePackage()
  {
    var payload = { 
      
      noofdays: this.SavePackageForm.controls['noofdays'].value,
      noofnight: this.SavePackageForm.controls['noofnight'].value,
      priceperperson: this.SavePackageForm.controls['priceperperson'].value,
      destinationid:this.selectedDestinationId,
      createdt: this.SavePackageForm.controls['createdt'].value,
      createby: this.SavePackageForm.controls['createby'].value,
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
