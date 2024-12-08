import { Component, OnInit } from '@angular/core';
import { TravelCanvasBackendServiceService } from 'src/app/Service/travel-canvas-backend-service.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, FormBuilder, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  displayedColumns: string[] = ['sl', 'roleid', 'rolename', 'activeflag', 'createby', 'createdt',
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

    this.getAllRoleDetails();
  }

  getAllRoleDetails() {
    this.Svc.getAllRoleDetails().subscribe(data => {

      console.log(data);

      this.addedTableData = JSON.parse(JSON.stringify(data));
      this.dataSource = new MatTableDataSource(this.addedTableData);
    });
  }

  editRole(element: any): void {
    this.editableRow = element;
    this.editableValue = element.rolename; // Set the initial value
    element.disableUpdateButton = true; // Disable Update button during edit
  }

  onRoleNameInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.editableValue = input.value; // Update the value on input
  }

  saveRole(element: any): void {
    element.rolename = this.editableValue; // Update the rolename in the data source
    this.editableRow = null; // Exit edit mode
    element.disableUpdateButton = false; // Re-enable Update button for this row

    // Call the updaterole method with the updated element
    this.updaterole(element);
  }

  cancelEdit(): void {
    if (this.editableRow) {
      this.editableRow.disableUpdateButton = false; // Re-enable Update button for the row
    }
    this.editableRow = null; // Exit edit mode without saving
    this.editableValue = ''; // Clear the temporary value
  }



  updaterole(element: any) {


    console.log(element);
    console.log(element.rolename);//admin

    const updateRoleDetails = {
      rolename: element.rolename,
      roleid: element.roleid
    };

    console.log(updateRoleDetails); // Now this will print the object

    this.Svc.updateRoledetails(updateRoleDetails).subscribe(data => {

      console.log(data);

      const snackbar = this._snackBar.open("Updated Successfully", "CLOSE", {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 2000,
      });
    })
  }

}
