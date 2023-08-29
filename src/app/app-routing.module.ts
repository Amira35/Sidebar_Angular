import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './admin/default/default.component';
import { DashboardComponent } from './admin/dashboard/dashboard/dashboard.component';
import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { CommentsComponent } from './admin/dashboard/comments/comments.component';
import { PagesComponent } from './admin/dashboard/pages/pages.component';
import { SettingComponent } from './admin/dashboard/setting/setting.component';

const routes: Routes = [
  {path : '' , component : DefaultComponent , children : [

    {path : 'home' , component : DashboardComponent} ,
    {path : 'posts' , component : PostsComponent} ,
    {path : 'comments' , component : CommentsComponent},
    {path : 'pages' , component : PagesComponent} ,
    {path : 'setting' , component : SettingComponent} ,
    {
      path : '**' , component : DashboardComponent
    }
  ]} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
