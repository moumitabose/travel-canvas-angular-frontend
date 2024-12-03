import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // This makes the service available application-wide
})

export class AuthService {

    private loginData: any = null;

    setLoginData(data: any) {
        this.loginData = data;
    }

    getLoginData(): any {
        return this.loginData;
    }
}
