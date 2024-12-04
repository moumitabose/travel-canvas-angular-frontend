import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // This makes the service available application-wide
})

export class AuthService {

    private loginDataSubject = new BehaviorSubject<any>(null);
    loginData$ = this.loginDataSubject.asObservable();
  
    setLoginData(data: any) {
      this.loginDataSubject.next(data); // Update the BehaviorSubject
    }
  
    getLoginData(): any {
      return this.loginDataSubject.value;
    }
}
