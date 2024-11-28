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
  selector: 'app-choose-destination',
  templateUrl: './choose-destination.component.html',
  styleUrls: ['./choose-destination.component.css']
})
export class ChooseDestinationComponent implements OnInit {

  ShowPackageListForm!: UntypedFormGroup

  destinations: any[] = []; // Data from backend
  selectedCityId: number | null = null; // Selected city ID
  selectedCountry: string = ''; // Corresponding country name
  selectedCity: string = ''; // Selected city name

  cityDropdown:boolean=false;

  constructor(private router: Router, private Svc: TravelCanvasBackendServiceService, private fb: UntypedFormBuilder,
    private formBuilder: FormBuilder, private _snackBar: MatSnackBar,
    public dialog: MatDialog, ) { }

  ngOnInit(): void {

    this.ShowPackageListForm = this.fb.group({

      // employeeid: [''],
      // name: [''],
      // username: [''],
      // password: [''],
      // sysuserroleid: [null],
      // locationid: [null],


    })

    this.getAllDestinationDetails();
  }

  goToCity()
  {
    this.cityDropdown=true;
  }

  goToCountry()
  {

  }

  getAllDestinationDetails()
  {
    this.Svc.getAllDestinationDetails().subscribe(data => {

      console.log(data);
      this.destinations = data;

    })

  }

  // onCityChange(): void {
  //   const selectedDestination = this.destinations.find(
  //     (dest) => dest.cityid === this.selectedCityId
  //   );
  //   if (selectedDestination) {
  //     this.selectedCity = selectedDestination.cityname;
  //     this.selectedCountry = selectedDestination.countryname;
  //   } else {
  //     this.selectedCity = '';
  //     this.selectedCountry = '';
  //   }
  // }


  onCityChange(): void {
    const selectedDestination = this.destinations.find(
      (dest) => dest.cityid === this.selectedCityId
    );
    if (selectedDestination) {
      this.selectedCity = selectedDestination.cityname;
      this.selectedCountry = selectedDestination.countryname;
      
      // Navigate to the new page with city and country as query parameters
      this.router.navigate(['/package'], {
        queryParams: { city: this.selectedCity, country: this.selectedCountry },
        queryParamsHandling: 'merge'
      });
    } else {
      this.selectedCity = '';
      this.selectedCountry = '';
    }
  }
  
  // this.router.navigate([], {
  //   queryParams: { city: this.selectedCity, country: this.selectedCountry },
  //   queryParamsHandling: 'merge'  // Keeps the existing query params intact
  // });



}
