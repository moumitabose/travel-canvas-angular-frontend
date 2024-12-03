import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { TravelCanvasBackendServiceService } from 'src/app/Service/travel-canvas-backend-service.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, FormBuilder, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Misc/auth-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
 
})
export class LoginFormComponent implements OnInit {

  loginForm!: UntypedFormGroup

  constructor(private route: ActivatedRoute, private router: Router, private Svc: TravelCanvasBackendServiceService,
    private fb: UntypedFormBuilder,private authService: AuthService
  ) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({

      username: [''],

      password: [''],



    })
  }

  login()
  {
    var payload = { 
      
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
     };

     this.Svc.login(payload).subscribe(data => {
      console.log(data);
      this.authService.setLoginData(data);
      this.router.navigate(['/travelCanvas']); // Redirect on successful login
    });
  }

  

}
