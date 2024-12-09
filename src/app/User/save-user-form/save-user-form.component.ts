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
import { PasswordValidatorService } from 'src/app/Misc/password-validator.service';



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
  usernameChecked: boolean = false;  // Track whether the username check has been done
  isCapsLockOn = false;



  constructor(private router: Router,
    private Svc: TravelCanvasBackendServiceService, private fb: UntypedFormBuilder, private snackBar: MatSnackBar,
    private passwordSvc: PasswordValidatorService,) {
  }

  ngOnInit(): void {

    this.SaveUserForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, this.passwordSvc.passwordValidator()]],  // Password field
      repassword: ['', Validators.required],  // Re-enter password field
      roleid: ['', Validators.required],
      //countryid: ['', Validators.required],
      rolename: [''],

      countryname: [''],
      createby: [1],
    }, { validators: this.passwordMatchValidator });  // Apply the password match validator here


    this.getAllRoles();
    // this.getAllCountries();
  }

  getAllRoles() {
    this.Svc.getAllRoles().subscribe(data => {

      console.log(data);
      this.roles = data;

    })
  }

  // getAllCountries ()
  // {
  // this.Svc.getAllCountries().subscribe(data => {

  // console.log(data);
  // this.countries = data;

  // })
  // }



  saveUserDetails() {
    if (this.SaveUserForm.valid) {
      console.log('Form Submitted', this.SaveUserForm.value);

      const payload = {
        username: this.SaveUserForm.controls['name'].value,
        email: this.SaveUserForm.controls['email'].value,
        phone: this.SaveUserForm.controls['phone'].value,
        password: this.SaveUserForm.controls['password'].value,
        roleid: this.SaveUserForm.controls['roleid'].value,
        // countryid: this.SaveUserForm.controls['countryid'].value,
        createby: this.SaveUserForm.controls['createby'].value,
        activeflag: 'Y'
      };

      // Start saving user details
      this.Svc.saveUserDetails(payload).subscribe(
        userSaveRes => {
          console.log(userSaveRes);

          // Prepare payload for email save
          const payloadForEmailSave = {
            recipient: userSaveRes.email,
            subject: "hello",
            body: "Welcome to TravelCanvas! We're excited to have you on board.",
            // body: this.generateEmailBody(),
            //   createby: this.SaveUserForm.controls['createby'].value,
            activeflag: 'Y',
            userid: userSaveRes.userid,
          };

          console.log(payloadForEmailSave)

          // Save email details
          this.Svc.saveEmailDetails(payloadForEmailSave).subscribe(
            emailSaveRes => {
              console.log(emailSaveRes);

              // Prepare payload for sending the email
              const payloadForEmailSend = {
                // recipient: this.SaveUserForm.controls['recipient'].value,
                // subject: this.SaveUserForm.controls['subject'].value,
                recipient: userSaveRes.email,
                subject: "hello",
                // body: this.generateEmailBody()
                body: "Welcome to TravelCanvas! We're excited to have you on board."
              };

              // Send the email
              this.Svc.sendEmail(payloadForEmailSend).subscribe(
                emailSendRes => {
                  console.log(emailSendRes);

                  // Show success message via snackbar
                  this.snackBar.open(
                    `User ${payload.username} created and email has been sent to ${payload.email}.`,
                    'Close',
                    { duration: 5000 }
                  );
                },
                error => {
                  console.error('Error sending email:', error);
                }
              );
            },
            error => {
              console.error('Error saving email details:', error);
            }
          );
        },
        error => {
          console.error('Error saving user details:', error);
          // Optionally show an error message via snackbar
          this.snackBar.open('Failed to create user. Please try again.', 'Close', { duration: 5000 });
        }
      );
    }
  }

 
 
 
 
 
 
 
 
 


  reset() {

  }

  onRoleChange(event: any): void {
    const selectedRole = event.value;
    this.SaveUserForm.patchValue({
      roleid: selectedRole.roleid,
      rolename: selectedRole.rolename
    });
  }

  // onCountryChange(event: any): void {
  // const selectedCountryId = event.value;
  // this.SaveUserForm.patchValue({
  // countryid: selectedCountryId.countryid,
  // countryname: selectedCountryId.countryname
  // });
  // }

  checkCapsLock(event: KeyboardEvent): void {
    this.isCapsLockOn = event.getModifierState('CapsLock');
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const repassword = form.get('repassword')?.value;

    // If passwords do not match, return an error object
    if (password !== repassword) {

      return { passwordMismatch: true };
    }

    return null;
  }


  checkUsernameAvailability() {
    const username = this.SaveUserForm.get('name')?.value;

    // Simulate a username check (replace with actual API call logic)
    if (username && username.length > 0) {
      console.log('Checking availability for:', username);
      // Here you can implement the actual API call for username availability

      // Assuming username is available:
      this.usernameChecked = true;
    }
  }

  generateEmailBody(): string {
    const userName = this.SaveUserForm.controls['username'].value;  // Assuming you have a 'username' control
    return `
      Hello ${userName},
  
      Welcome to TravelCanvas! We're excited to have you on board.
  
      Your new account has been successfully created, and you can now explore our features and start planning your travel adventures. You can log in anytime to manage your trips, explore new destinations, and access personalized travel recommendations.
  
      If you have any questions or need assistance, feel free to reach out to our support team.
  
      Happy travels,
      The TravelCanvas Team
    `;
  }



}
