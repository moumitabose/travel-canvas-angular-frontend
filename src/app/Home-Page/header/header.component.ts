import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Misc/auth-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginData: any;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.loginData = this.authService.getLoginData();
  }

}
