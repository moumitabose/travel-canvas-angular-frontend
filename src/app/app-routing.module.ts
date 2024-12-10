import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveUserFormComponent } from './User/save-user-form/save-user-form.component';
import { HomePageComponent } from './Home-Page/home-page/home-page.component';
import { ShowPackageListComponent } from './Packages/show-package-list/show-package-list.component';
import { ChooseDestinationComponent } from './Destination/choose-destination/choose-destination.component';
import { QueryParameterGuard } from './Guard/query-parameter.guard';
import { LoginFormComponent } from './Login/login-form/login-form.component';
import { SaveImageComponent } from './Image/save-image/save-image.component';
import { SaveImageSubComponent } from './Image/save-image-sub/save-image-sub.component';
import { SaveRoleComponent } from './Role/save-role/save-role.component';
import { RoleListComponent } from './Role/role-list/role-list.component';
import { SavePackageComponent } from './Packages/save-package/save-package.component';
import { SignUpComponent } from './Login/sign-up/sign-up.component';
import { UserListComponent } from './User/user-list/user-list.component';
import { SaveCountryComponent } from './Country/save-country/save-country.component';
import { CountryListComponent } from './Country/country-list/country-list.component';
import { SaveCityComponent } from './City/save-city/save-city.component';



const routes: Routes = [
  { path: '', redirectTo: '/travelCanvas', pathMatch: 'full' },
  { path: 'travelCanvas', component: HomePageComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'roleCreation', component: SaveRoleComponent },
  { path: 'roleList', component: RoleListComponent },
  { path: 'userCreation', component: SaveUserFormComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'countryList', component: CountryListComponent },
  { path: 'countryCreation', component: SaveCountryComponent },
  { path: 'cityCreation', component: SaveCityComponent },
  { path: 'search', component: ChooseDestinationComponent },
  { path: 'package', component: ShowPackageListComponent },
  { path: 'savePacakage', component: SavePackageComponent },
  { path: 'uploadImage', component: SaveImageComponent },
  { path: 'uploadSubImage', component: SaveImageSubComponent },
  // { path: 'package', component: ShowPackageListComponent , canActivate: [QueryParameterGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
