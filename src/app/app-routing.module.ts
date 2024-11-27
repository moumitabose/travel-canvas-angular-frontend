import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveUserFormComponent } from './User/save-user-form/save-user-form.component';
import { HomePageComponent } from './Home-Page/home-page/home-page.component';

const routes: Routes = [
  {path:'travelCanvas', component:HomePageComponent},
  {path:'userCreation', component:SaveUserFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
