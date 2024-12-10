import { Component, OnInit } from '@angular/core';
import { TravelCanvasBackendServiceService } from 'src/app/Service/travel-canvas-backend-service.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, FormBuilder, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  displayedColumns: string[] = ['sl', 'countryid', 'countryname', 'activeflag', 'createby', 'createdt',
    'modby', 'moddt', 'actions'];
  dataSource!: MatTableDataSource<any>;
  addedTableData: any[] = []

  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  editableRow: any = null;
  editableValue: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private Svc: TravelCanvasBackendServiceService,
    private fb: UntypedFormBuilder, private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.getAllCountriesDetails();
  }

  getAllCountriesDetails() {
    this.Svc.getAllCountriesDetails().subscribe(data => {

      console.log(data);

      this.addedTableData = JSON.parse(JSON.stringify(data));
      this.dataSource = new MatTableDataSource(this.addedTableData);
    });
  }

   editCountry(element: any): void {
    this.editableRow = element;
    this.editableValue = element.countryname; // Set the initial value
    element.disableUpdateButton = true; // Disable Update button during edit
  }

  onCountryNameInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.editableValue = input.value; // Update the value on input
  }


  saveCountry(element: any): void {
    element.countryname = this.editableValue;
    this.editableRow = null;
    element.disableUpdateButton = false;
    this.updatecompany(element);
  }

  cancelEdit(): void {
    if (this.editableRow) {
      this.editableRow.disableUpdateButton = false; // Re-enable Update button for the row
    }
    this.editableRow = null; // Exit edit mode without saving
    this.editableValue = ''; // Clear the temporary value
  }



  updatecompany(element: any)
  {
    const updateCountryDetails = {
      countryname: element.countryname,
      countryid: element.countryid
    };
    console.log(updateCountryDetails); // Now this will print the object


    this.Svc.updateCountryDetails(updateCountryDetails).subscribe(data => {

      console.log(data);

      const snackbar = this._snackBar.open("Updated Successfully", "CLOSE", {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 2000,
      });
    })
  }




}
