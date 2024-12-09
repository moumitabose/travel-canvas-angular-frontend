import { Component, OnInit } from '@angular/core';
import { TravelCanvasBackendServiceService } from 'src/app/Service/travel-canvas-backend-service.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, FormBuilder, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['sl', 'username', 'email', 'rolename','countryname','activeflag',
     'createby', 'createdt','modby', 'moddt'];

    dataSource!: MatTableDataSource<any>;
    addedTableData: any[] = []

    constructor(private route: ActivatedRoute, private router: Router, private Svc: TravelCanvasBackendServiceService,
      private fb: UntypedFormBuilder, private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {

    this.getAllUserDetails();
  }

  getAllUserDetails() {
    // this.Svc.getAllRoleDetails().subscribe(data => {

    //   console.log(data);

    //   this.addedTableData = JSON.parse(JSON.stringify(data));
    //   this.dataSource = new MatTableDataSource(this.addedTableData);
    // });
  }


}
