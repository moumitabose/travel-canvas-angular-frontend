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

  ///////////////////////////////////////////DESTINATION//////////////////////////////////////////////////////////////////


  getAllDestinationDetails() {
    return this.http.get<any>(environment.url.getAllDestinationDetails)
  }


  // getAllDetailsByEmployeeid(data: any): Observable<any> {
  //   return this.http.post(`${environment.url.getAllDetailsByEmployeeid}`, data,
  //     {
  //       headers: new HttpHeaders({
  //         'custom-header': 'application/json'
  //       })
  //     });
  // }

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


}
