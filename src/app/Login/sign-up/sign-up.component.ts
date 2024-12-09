import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { formatDate } from '@angular/common';

import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { UntypedFormBuilder, UntypedFormGroup, FormBuilder, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { TravelCanvasBackendServiceService } from 'src/app/Service/travel-canvas-backend-service.service';
import { PasswordValidatorService } from 'src/app/Misc/password-validator.service';
import { MatDialog } from '@angular/material/dialog';
import { OtpDialogComponent } from 'src/app/Dialog Box/otp-dialog/otp-dialog.component';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  SignUpForm!: UntypedFormGroup


  countries: any[] = []; // Data from backend
  selectedCountryId: number | null = null; // Selected Role ID
  usernameChecked: boolean = false;  // Track whether the username check has been done
  isCapsLockOn = false;


  constructor(private router: Router,
    private Svc: TravelCanvasBackendServiceService, private fb: UntypedFormBuilder,
    private passwordSvc: PasswordValidatorService,
    private snackBar: MatSnackBar,private dialog: MatDialog,) {
  }

  ngOnInit(): void {
    this.SignUpForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, this.passwordSvc.passwordValidator()]],  // Password field
      repassword: ['', Validators.required],  // Re-enter password field
      roleid: [3],
      countryid: ['', Validators.required],
      countryname: [''],
      createby: [2],
    }, { validators: this.passwordMatchValidator });  // Apply the password match validator here

    this.getAllCountries();
  }




  getAllCountries() {
    this.Svc.getAllCountries().subscribe(data => {
      console.log(data);
      this.countries = data;
    });
  }

  onCountryChange(event: any): void {
    const selectedCountryId = event.value;
    this.SignUpForm.patchValue({
      countryid: selectedCountryId.countryid,
      countryname: selectedCountryId.countryname
    });
  }

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
    const username = this.SignUpForm.get('name')?.value;

    // Simulate a username check (replace with actual API call logic)
    if (username && username.length > 0) {
      console.log('Checking availability for:', username);
      // Here you can implement the actual API call for username availability

      // Assuming username is available:
      this.usernameChecked = true;
    }
  }

  generateEmailBody(): string {
    const userName = this.SignUpForm.controls['username'].value;  // Assuming you have a 'username' control
    return `
      Hello ${userName},
  
      Welcome to TravelCanvas! We're excited to have you on board.
  
      Your new account has been successfully created, and you can now explore our features and start planning your travel adventures. You can log in anytime to manage your trips, explore new destinations, and access personalized travel recommendations.
  
      If you have any questions or need assistance, feel free to reach out to our support team.
  
      Happy travels,
      The TravelCanvas Team
    `;
  }

  // saveSignInForm() {
  //   if (this.SignUpForm.valid) {
  //     console.log('Form Submitted', this.SignUpForm.value);
  
  //     const payload = {
  //       username: this.SignUpForm.controls['username'].value,
  //       email: this.SignUpForm.controls['email'].value,
  //       phone: this.SignUpForm.controls['phone'].value,
  //       password: this.SignUpForm.controls['password'].value,
  //       roleid: this.SignUpForm.controls['roleid'].value,
  //       countryid: this.SignUpForm.controls['countryid'].value,
  //       createby: this.SignUpForm.controls['createby'].value,
  //       activeflag: 'Y'
  //     };
  
  //     // Start saving user details
  //     this.Svc.saveUserDetails(payload).subscribe(
  //       userSaveRes => {
  //         console.log(userSaveRes);
  
  //         // Prepare payload for email save
  //         const payloadForEmailSave = {
  //           recipient: this.SignUpForm.controls['recipient'].value,
  //           subject: this.SignUpForm.controls['subject'].value,
  //           body: this.generateEmailBody(),
  //           createby: this.SignUpForm.controls['createby'].value,
  //           activeflag: 'Y',
  //           userid: userSaveRes.userid,
  //         };
  
  //         // Save email details
  //         this.Svc.saveEmailDetails(payloadForEmailSave).subscribe(
  //           emailSaveRes => {
  //             console.log(emailSaveRes);
  
  //             // Prepare payload for sending the email
  //             const payloadForEmailSend = {
  //               recipient: this.SignUpForm.controls['recipient'].value,
  //               subject: this.SignUpForm.controls['subject'].value,
  //               body: this.generateEmailBody()
  //             };
  
  //             // Send the email
  //             this.Svc.sendEmail(payloadForEmailSend).subscribe(
  //               emailSendRes => {
  //                 console.log(emailSendRes);
  
  //                 // Show success message via snackbar
  //                 this.snackBar.open(
  //                   `User ${payload.username} created and email has been sent to ${payload.email}.`,
  //                   'Close',
  //                   { duration: 5000 }
  //                 );
  //               },
  //               error => {
  //                 console.error('Error sending email:', error);
  //               }
  //             );
  //           },
  //           error => {
  //             console.error('Error saving email details:', error);
  //           }
  //         );
  //       },
  //       error => {
  //         console.error('Error saving user details:', error);
  //         // Optionally show an error message via snackbar
  //         this.snackBar.open('Failed to create user. Please try again.', 'Close', { duration: 5000 });
  //       }
  //     );
  //   }
  // }


  saveSignInForm() {
    if (this.SignUpForm.valid) {
      console.log('Form Submitted', this.SignUpForm.value);
  
      const email = this.SignUpForm.controls['email'].value;
  
      // Open the OTP dialog for validation
      const dialogRef = this.dialog.open(OtpDialogComponent, {
        width: '300px',
        data: { email: email } // Pass email to dialog
      });
  
      // Handle dialog close
      dialogRef.afterClosed().subscribe(otp => {
        if (otp) {
          console.log('OTP entered:', otp);
  
          // Validate OTP before proceeding
          this.Svc.validateOtp({ email: email, otp: otp }).subscribe(
            otpValidationRes => {
              if (otpValidationRes.valid) {
                console.log('OTP is valid. Proceeding with user creation.');
  
                const payload = {
                  username: this.SignUpForm.controls['username'].value,
                  email: email,
                  phone: this.SignUpForm.controls['phone'].value,
                  password: this.SignUpForm.controls['password'].value,
                  roleid: this.SignUpForm.controls['roleid'].value,
                  countryid: this.SignUpForm.controls['countryid'].value,
                  createby: this.SignUpForm.controls['createby'].value,
                  activeflag: 'Y'
                };
  
                // Save user details
                this.Svc.saveUserDetails(payload).subscribe(
                  userSaveRes => {
                    console.log('User saved:', userSaveRes);
  
                    // Prepare payload for email save
                    const payloadForEmailSave = {
                      recipient: this.SignUpForm.controls['recipient'].value,
                      subject: this.SignUpForm.controls['subject'].value,
                      body: this.generateEmailBody(),
                      createby: this.SignUpForm.controls['createby'].value,
                      activeflag: 'Y',
                      userid: userSaveRes.userid,
                    };
  
                    // Save email details
                    this.Svc.saveEmailDetails(payloadForEmailSave).subscribe(
                      emailSaveRes => {
                        console.log('Email details saved:', emailSaveRes);
  
                        // Prepare payload for sending email
                        const payloadForEmailSend = {
                          recipient: this.SignUpForm.controls['recipient'].value,
                          subject: this.SignUpForm.controls['subject'].value,
                          body: this.generateEmailBody()
                        };
  
                        // Send the email
                        this.Svc.sendEmail(payloadForEmailSend).subscribe(
                          emailSendRes => {
                            console.log('Email sent:', emailSendRes);
  
                            // Show success message via snackbar
                            this.snackBar.open(
                              `User ${payload.username} created and email sent to ${payload.email}.`,
                              'Close',
                              { duration: 5000 }
                            );
                          },
                          error => {
                            console.error('Error sending email:', error);
                            this.snackBar.open('Error sending email. Please try again.', 'Close', { duration: 5000 });
                          }
                        );
                      },
                      error => {
                        console.error('Error saving email details:', error);
                        this.snackBar.open('Error saving email details. Please try again.', 'Close', { duration: 5000 });
                      }
                    );
                  },
                  error => {
                    console.error('Error saving user details:', error);
                    this.snackBar.open('Failed to create user. Please try again.', 'Close', { duration: 5000 });
                  }
                );
              } else {
                console.error('Invalid or expired OTP');
                this.snackBar.open('Invalid or expired OTP. Please try again.', 'Close', { duration: 5000 });
              }
            },
            error => {
              console.error('Error validating OTP:', error);
              this.snackBar.open('Failed to validate OTP. Please try again.', 'Close', { duration: 5000 });
            }
          );
        } else {
          console.log('OTP dialog was closed without input.');
        }
      });
    }
  }
  



}
