import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveUserFormComponent } from './User/save-user-form/save-user-form.component';

const routes: Routes = [
  {path:'userCreation', component:SaveUserFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
