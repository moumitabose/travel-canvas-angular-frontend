import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveUserFormComponent } from './User/save-user-form/save-user-form.component';
import { HomePageComponent } from './Home-Page/home-page/home-page.component';
import { ShowPackageListComponent } from './Packages/show-package-list/show-package-list.component';
import { ChooseDestinationComponent } from './Destination/choose-destination/choose-destination.component';
import { QueryParameterGuard } from './Guard/query-parameter.guard';
import { LoginFormComponent } from './Login/login-form/login-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/travelCanvas', pathMatch: 'full' },
  { path: 'travelCanvas', component: HomePageComponent },
  {path:'login',component:LoginFormComponent},
  { path: 'userCreation', component: SaveUserFormComponent },
  { path: 'search', component: ChooseDestinationComponent },
  { path: 'package', component: ShowPackageListComponent },
  // { path: 'package', component: ShowPackageListComponent , canActivate: [QueryParameterGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
