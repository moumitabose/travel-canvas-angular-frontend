import { Component, OnInit, ViewChild } from '@angular/core';
import { formatDate } from '@angular/common';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, FormBuilder, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { TravelCanvasBackendServiceService } from 'src/app/Service/travel-canvas-backend-service.service';


@Component({
  selector: 'app-show-package-list',
  templateUrl: './show-package-list.component.html',
  styleUrls: ['./show-package-list.component.css']
})
export class ShowPackageListComponent implements OnInit {

  city: string = '';
  country: string = '';
  destinationid: number | null = null;
  imageData: string | null = null;
  imageList: string[] = []; // Array to store multiple 
  packageDetails: { noofdays: number; noofnight: number }[] = [];


  constructor(private route: ActivatedRoute, private router: Router, private Svc: TravelCanvasBackendServiceService,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.city = params['city'];
      this.country = params['country'];
      this.destinationid = params['destinationid'];
      //this.lockQueryParams();

      this.getImageDetailsByDestinationId();
      this.getAllSubImageDetailsByDestinationId();
      this.getAllPackageDetailsByDestinationId();
    });
  }




  getImageDetailsByDestinationId() {
    var payload = { destinationid: this.destinationid };

    this.Svc.getImageDetailsByDestinationId(payload).subscribe(data => {

      if (data && data.imageData) {
        this.imageData = atob(data.imageData); // Decoding Base64
      }
    }, error => {
      console.error('Error fetching image:', error);
    });
  }


  getAllSubImageDetailsByDestinationId() {
    const payload = { destinationid: this.destinationid };

    this.Svc.getAllSubImageDetailsByDestinationId(payload).subscribe(data => {
      if (Array.isArray(data)) {
        this.imageList = data
          .filter(item => item.imageSubData) // Ensure each item has imageSubData
          .map(item => item.imageSubData); // Map to the Base64 data
      } else {
        console.error('Unexpected response format:', data);
      }
    }, error => {
      console.error('Error fetching images:', error);
    });
  }

// 
  // getAllPackageDetailsByDestinationId() {
    // const payload = { destinationid: this.destinationid };
// 
    // this.Svc.getAllPackageDetailsByDestinationId(payload).subscribe(data => {
// 
      // console.log(data)
// 
// 
    // })
  // }

  getAllPackageDetailsByDestinationId() {
    const payload = { destinationid: this.destinationid };
    this.Svc.getAllPackageDetailsByDestinationId(payload).subscribe(
      (data) => {
        if (Array.isArray(data)) {
          this.packageDetails = data.map((item) => ({
            noofdays: item.noofdays,
            noofnight: item.noofnight,
          }));
        } else {
          console.error('Unexpected response for packages:', data);
        }
      },
      (error) => {
        console.error('Error fetching package details:', error);
      }
    );
  }
  






  // lockQueryParams() {
  //   // Whenever the URL changes, reset the query parameters if they are modified
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationStart) {
  //       // Recheck query params to ensure they remain fixed
  //       const currentParams = this.route.snapshot.queryParams;
  //       if (currentParams['city'] !== this.city || currentParams['country'] !== this.country) {
  //         this.router.navigate(['/travelCanvas'], {
  //           queryParams: { city: this.city, country: this.country },
  //           queryParamsHandling: 'merge', // Keeps other query params
  //         });
  //       }
  //     }
  //   });
  // }






}


















