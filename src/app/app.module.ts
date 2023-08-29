import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DefaultComponent } from './admin/default/default.component';
import { SidbarComponent } from './admin/sidbar/sidbar.component';
import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { DashboardComponent } from './admin/dashboard/dashboard/dashboard.component';
import { CommentsComponent } from './admin/dashboard/comments/comments.component';
import { SettingComponent } from './admin/dashboard/setting/setting.component';
import { PagesComponent } from './admin/dashboard/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    SidbarComponent,
    PostsComponent,
    DashboardComponent,
    CommentsComponent,
    SettingComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule ,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
