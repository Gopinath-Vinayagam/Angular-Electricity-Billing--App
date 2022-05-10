import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfilauthguardGuard } from './authgurd/profilauthguard.guard';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
// import { AuthGuard } from './core/auth/';

const routes: Routes = [
{path:'registration',component:RegistrationComponent},
{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'profile',component:ProfileComponent,
canActivate:[ProfilauthguardGuard]
},
{path:'adminlogin',component:AdminloginComponent},
{path:'forgetpassword',component:ForgetpasswordComponent},
{path:'adminprofile',component:AdminprofileComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
// {path: 'login' ,loadChildren: './pages/login/login.module#LoginPageModule'
//   }, {
//   path: '',
//   loadChildren: './tabs/tabs.module#TabsPageModule',
//   canActivate: [AuthGuard]
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
