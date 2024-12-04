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



@Component({
  selector: 'app-save-user-form',
  templateUrl: './save-user-form.component.html',
  styleUrls: ['./save-user-form.component.css']
})
export class SaveUserFormComponent implements OnInit {

  SaveUserForm!: UntypedFormGroup

  roles: any[] = []; // Data from backend
  countries: any[] = []; // Data from backend

  selectedRoleId: number | null = null; // Selected Role ID
  selectedCountryId: number | null = null; // Selected Role ID



  constructor(private router: Router, 
    private Svc: TravelCanvasBackendServiceService, private fb: UntypedFormBuilder, private _snackBar: MatSnackBar,) 
    {
  }

  ngOnInit(): void {

    this.SaveUserForm = this.fb.group({

      name: [''],
      email:[''],
      password: [''],
      roleid: [''],
      rolename:[''],
      countryid:[''],
      countryname:[''],


    })

    this.getAllRoles();
    this.getAllCountries();
  }

  getAllRoles()
  {
    this.Svc.getAllRoles().subscribe(data => {

      console.log(data);
      this.roles = data;

    })
  }

  getAllCountries ()
  {
    this.Svc.getAllCountries().subscribe(data => {

      console.log(data);
      this.countries = data;

    })
  }

  SaveUserDetails()
  {

  }

  reset()
  {

  }

  onRoleChange(event: any): void {
    const selectedRole = event.value;
    this.SaveUserForm.patchValue({
      roleid: selectedRole.roleid,
      rolename: selectedRole.rolename
    });
  }

  onCountryChange(event: any): void {
    const selectedCountryId = event.value;
    this.SaveUserForm.patchValue({
      countryid: selectedCountryId.countryid,
      countryname: selectedCountryId.countryname
    });
  }

}
