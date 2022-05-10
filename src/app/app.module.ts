import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilService } from './auth service/profil.service';
import { ProfilauthguardGuard } from './authgurd/profilauthguard.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    AdminloginComponent,
    AdminprofileComponent,
    ForgetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
  ],
  providers: [ProfilService,ProfilauthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
