import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesignModule } from '../@material-design/material-design.module';
import { AuthGuard } from '@auth0/auth0-angular';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
      path     : '',
      redirectTo: 'login',
      pathMatch: 'full'
  },
  {
      path     : 'login',
      component: LoginComponent
  },
  {
      path     : 'home',
      component: HomeComponent,
      canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MaterialDesignModule
  ]
})


export class ComponentsModule { }
