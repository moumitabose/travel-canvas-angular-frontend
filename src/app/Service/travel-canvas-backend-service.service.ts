import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class TravelCanvasBackendServiceService {

  servicedata = true;

  constructor(private http: HttpClient) {
  }

  ///////////////////////////////////////////LOGIN//////////////////////////////////////////////////////////////////

  login(data: any): Observable<any> {
    return this.http.post(`${environment.url.login}`, data,
      {
        headers: new HttpHeaders({
          'custom-header': 'application/json'
        })
      });
  }

  ///////////////////////////////////////////ROLE//////////////////////////////////////////////////////////////////


  saveRoledetails(data: any): Observable<any> {
    return this.http.post(`${environment.url.saveRoledetails}`, data,
      {
        headers: new HttpHeaders({
          'custom-header': 'application/json'
        })
      });
  }

  getAllRoles() {
    return this.http.get<any>(environment.url.getAllRoles)
  }

  getAllRoleDetails() {
    return this.http.get<any>(environment.url.getAllRoleDetails)
  }

  updateRoledetails(data: any): Observable<any> {
    return this.http.post(`${environment.url.updateRoledetails}`, data,
      {
        headers: new HttpHeaders({
          'custom-header': 'application/json'
        })
      });
  }

 ///////////////////////////////////////////USER//////////////////////////////////////////////////////////////////

 getAllUserDetails() {
  return this.http.get<any>(environment.url.getAllUserDetails)
}

saveUserDetails(data: any): Observable<any> {
  return this.http.post(`${environment.url.saveUserDetails}`, data,
    {
      headers: new HttpHeaders({
        'custom-header': 'application/json'
      })
    });
}


  ///////////////////////////////////////////COUNTRY//////////////////////////////////////////////////////////////////

  

  getAllCountries() {
    return this.http.get<any>(environment.url.getAllCountries)
  }

  getAllCountriesDetails() {
    return this.http.get<any>(environment.url.getAllCountriesDetails)
  }

  saveCountryDetails(data: any): Observable<any> {
    return this.http.post(`${environment.url.saveCountryDetails}`, data,
      {
        headers: new HttpHeaders({
          'custom-header': 'application/json'
        })
      });
  }

  updateCountryDetails(data: any): Observable<any> {
    return this.http.post(`${environment.url.updateCountryDetails}`, data,
      {
        headers: new HttpHeaders({
          'custom-header': 'application/json'
        })
      });
  }

   ///////////////////////////////////////////CITY//////////////////////////////////////////////////////////////////

   saveCityDetails(data: any): Observable<any> {
    return this.http.post(`${environment.url.saveCityDetails}`, data,
      {
        headers: new HttpHeaders({
          'custom-header': 'application/json'
        })
      });
  }

  ///////////////////////////////////////////DESTINATION//////////////////////////////////////////////////////////////////


  getAllDestinationDetails() {
    return this.http.get<any>(environment.url.getAllDestinationDetails)
  }



  ///////////////////////////////////////////DESTINATION PACKAGE////////////////////////////////////////////////////////////////////


  saveDestinationPackageDetails(data: any): Observable<any> {
    return this.http.post(`${environment.url.saveDestinationPackageDetails}`, data,
      {
        headers: new HttpHeaders({
          'custom-header': 'application/json'
        })
      });
  }

  getAllPackageDetailsByDestinationId(data: any): Observable<any> {
    return this.http.post(`${environment.url.getAllPackageDetailsByDestinationId}`, data,
      {
        headers: new HttpHeaders({
          'custom-header': 'application/json'
        })
      });
  }

  ///////////////////////////////////////////IMAGE//////////////////////////////////////////////////////////////////


  getImageDetailsByDestinationId(data: any): Observable<any> {
    return this.http.post(`${environment.url.getImageDetailsByDestinationId}`, data,
      {
        headers: new HttpHeaders({
          'custom-header': 'application/json'
        })
      });
  }



  uploadImage(data: any): Observable<any> {
    return this.http.post(`${environment.url.uploadImage}`, data,
      {
        headers: new HttpHeaders({
          'custom-header': 'application/json'
        })
      });
  }


  ///////////////////////////////////////////SUB-IMAGE//////////////////////////////////////////////////////////////////

  uploadSubImage(data: any): Observable<any> {
    return this.http.post(`${environment.url.uploadSubImage}`, data,
      {
        headers: new HttpHeaders({
          'custom-header': 'application/json'
        })
      });
  }



  getAllSubImageDetailsByDestinationId(data: any): Observable<any> {
    return this.http.post(`${environment.url.getAllSubImageDetailsByDestinationId}`, data,
      {
        headers: new HttpHeaders({
          'custom-header': 'application/json'
        })
      });
  }

  ///////////////////////////////////////////EMAIL-REQUEST//////////////////////////////////////////////////////////////////


  sendEmail(data: any): Observable<any> {
    return this.http.post(`${environment.url.sendEmail}`, data,
      {
        headers: new HttpHeaders({
          'custom-header': 'application/json'
        })
      });
  }

  saveEmailDetails(data: any): Observable<any> {
    return this.http.post(`${environment.url.saveEmailDetails}`, data,
      {
        headers: new HttpHeaders({
          'custom-header': 'application/json'
        })
      });
  }



  sendotp(data: any): Observable<any> {
    return this.http.post(`${environment.url.sendotp}`, data,
      {
        headers: new HttpHeaders({
          'custom-header': 'application/json'
        })
      });
  }

 ////////////////////////////////////////////////////////OTP-VALIDATE/////////////////////////////////////////////////


 validateOtp(data: any): Observable<any> {
  return this.http.post(`${environment.url.validateOtp}`, data,
    {
      headers: new HttpHeaders({
        'custom-header': 'application/json'
      })
    });
}


}
