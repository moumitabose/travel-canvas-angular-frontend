import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class QueryParameterGuard implements CanActivate {
  constructor(private router: Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const city = route.queryParams['city'];
    const country = route.queryParams['country'];

    if (!city || !country) {
     
      this.router.navigate(['/travelCanvas']);
      
      return false;
    }
    return true;

  }

}
