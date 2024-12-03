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



@Component({
  selector: 'app-save-user-form',
  templateUrl: './save-user-form.component.html',
  styleUrls: ['./save-user-form.component.css']
})
export class SaveUserFormComponent implements OnInit {

  SaveUserForm!: UntypedFormGroup



  constructor(private router: Router, private fb: UntypedFormBuilder, private _snackBar: MatSnackBar,) 
    {
  }

  ngOnInit(): void {

    this.SaveUserForm = this.fb.group({

      name: [''],
      email:[''],
      password: [''],



    })
  }

  SaveUserDetails()
  {

  }

  reset()
  {

  }

}
