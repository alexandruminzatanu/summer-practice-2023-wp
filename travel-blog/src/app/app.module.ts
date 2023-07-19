import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, BlogModule,
   //import ReactiveFormsModule for building and managing reactive forms
   ReactiveFormsModule,
   //import FormsModule for building and managing template-driven forms
   FormsModule,
   HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
