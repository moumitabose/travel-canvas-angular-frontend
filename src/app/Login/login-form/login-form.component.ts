import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { TravelCanvasBackendServiceService } from 'src/app/Service/travel-canvas-backend-service.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, FormBuilder, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Misc/auth-service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],

})
export class LoginFormComponent implements OnInit {

  loginForm!: UntypedFormGroup
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  constructor(private route: ActivatedRoute, private router: Router, private Svc: TravelCanvasBackendServiceService,
    private fb: UntypedFormBuilder, private authService: AuthService, private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({

      username: [''],

      password: [''],



    })
  }


  // login() {
  //   var payload = {

  //     username: this.loginForm.controls['username'].value,
  //     password: this.loginForm.controls['password'].value,
  //   };

  //   this.Svc.login(payload).subscribe(data => {
  //     console.log(data);
  //     this.authService.setLoginData(data);

  //     if (data.status === 'success') {
  //       localStorage.setItem("name", JSON.stringify(data.data.name));
  //       localStorage.setItem("role", JSON.stringify(data.data.role));

  //       const msg = "Successfully Logged In";
  //       this._snackBar.open(msg, "CLOSE", {
  //         duration: 2000,
  //         horizontalPosition: this.horizontalPosition,
  //         verticalPosition: this.verticalPosition
  //       }).afterDismissed().subscribe(() => {
  //         location.reload();
  //         this.router.navigate(['/travelCanvas']); // Redirect on successful login
  //       });
  //     }
  //     else if (data.status === 'error') {
  //       if (data.message === "Login not possible with this credentials") {
  //         this.handleError("Login not possible with this credentials");
  //       }
  //       else if (data.message === "Login not possible: account expired or inactive") {
  //         this.handleError("Login not possible: account expired or inactive");
  //       }

  //       else if (data.message === "Invalid role") {
  //         this.handleError("Invalid role");
  //       }
  //     }
  //   });
  // }


  login() {
    const payload = {
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
    };
  
    this.Svc.login(payload).subscribe(
      data => {
        console.log(data);
        this.authService.setLoginData(data);
  
        if (data.status === 'success') {
          localStorage.setItem("name", JSON.stringify(data.data.name));
          localStorage.setItem("role", JSON.stringify(data.data.role));
  
          const msg = "Successfully Logged In";
          this._snackBar.open(msg, "CLOSE", {
            duration: 2000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition
          }).afterDismissed().subscribe(() => {
            this.router.navigate(['/travelCanvas']); // Redirect on successful login
          });
        }
        else if (data.status === 'error') {
          this.handleError(data.message); // Handle error message dynamically
        }
      },
      error => {
        // Handle error if the request fails (e.g., network issues)
        this.handleError('An error occurred while logging in. Please try again.');
      }
    );
  }
  
  handleError(message: string) {
    this._snackBar.open(message, "CLOSE", {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
  



}
