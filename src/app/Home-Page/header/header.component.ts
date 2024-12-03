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
    // Subscribe to loginData changes
    this.authService.loginData$.subscribe(data => {
      this.loginData = data;
      console.log(this.loginData);
    });
  }

}
