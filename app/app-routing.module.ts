import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';


@NgModule({
    exports: [RouterModule]
 
})
export class AppRoutingModule { }

export const AppRoutes: any = [
  {
    path: '',
    redirectTo: "/login",
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: "display", component: DisplayComponent }
];

export const AppComponents: any = [
  LoginComponent,
  DisplayComponent
];
