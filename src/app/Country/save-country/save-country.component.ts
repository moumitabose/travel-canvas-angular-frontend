import { Component, OnInit } from '@angular/core';
import { TravelCanvasBackendServiceService } from 'src/app/Service/travel-canvas-backend-service.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, FormBuilder, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-save-country',
  templateUrl: './save-country.component.html',
  styleUrls: ['./save-country.component.css']
})
export class SaveCountryComponent implements OnInit {

  SaveCountryForm!: UntypedFormGroup
  currentDateTime!: string;
  todaysDate: any;
  startTime!: any;

  pipe = new DatePipe('en-US');
  now = Date.now();

  constructor(private route: ActivatedRoute, private router: Router, private Svc: TravelCanvasBackendServiceService,
    private fb: UntypedFormBuilder,private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {

   this.time();

    this.SaveCountryForm = this.fb.group({

      countryname: [''],
      createdt: [this.currentDateTime],
      createby: [''],



    })
  }

  time()
  {
    this.todaysDate = this.pipe.transform(this.now, 'yyyy-MM-dd');
    var d1 = new Date();
    this.startTime = d1.getHours() + ":" + + d1.getMinutes() + ":" + d1.getSeconds();
    this.currentDateTime = this.todaysDate + "T" + this.startTime.toString();
  }

  saveCountry() {
    var payload = { 
      countryname: this.SaveCountryForm.controls['rolename'].value,
      createdt: this.SaveCountryForm.controls['createdt'].value,
      createby: this.SaveCountryForm.controls['createby'].value,
      activeflag: 'Y'
    };
  
    this.Svc.saveCountryDetails(payload).subscribe(data => {
      console.log(data);
      
      // Show success Snackbar
      this.snackBar.open('Country saved successfully!', 'Close', {
        duration: 3000, // Duration in milliseconds
        horizontalPosition: 'right', // Position horizontally
        verticalPosition: 'top', // Position vertically
      });
    }, error => {
      // Show error Snackbar if the request fails
      this.snackBar.open('Failed to save country. Try again later.', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    });
  }

}
