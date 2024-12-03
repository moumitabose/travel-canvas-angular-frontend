import { Component, OnInit } from '@angular/core';
import { TravelCanvasBackendServiceService } from 'src/app/Service/travel-canvas-backend-service.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, FormBuilder, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-save-role',
  templateUrl: './save-role.component.html',
  styleUrls: ['./save-role.component.css']
})
export class SaveRoleComponent implements OnInit {

  SaveRoleForm!: UntypedFormGroup
  currentDateTime!: string;
  todaysDate: any;
  startTime!: any;

  pipe = new DatePipe('en-US');
  now = Date.now();

  constructor(private route: ActivatedRoute, private router: Router, private Svc: TravelCanvasBackendServiceService,
    private fb: UntypedFormBuilder,
  ) { }

  ngOnInit(): void {

   this.time();



    this.SaveRoleForm = this.fb.group({

      rolename: [''],
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

}
