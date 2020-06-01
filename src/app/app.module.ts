import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { postDetail } from './postDetail/postDetail.component';
import { RouterModule } from '@angular/router';
import { rootComponent } from './root/root.component';
import { FormsModule } from '@angular/forms';
import { PostDetailGuardGuard } from './postDetail/post-detail-guard.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component'

const routes = [
  { path : 'posts/:id', canActivate : [PostDetailGuardGuard], component : postDetail },
  { path : 'posts', component : AppComponent },
  { path : 'welcome', component : WelcomePageComponent },
  { path : '' , redirectTo: "welcome", pathMatch : 'full'},
  { path : '**', component : NotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent, postDetail, rootComponent, NotFoundComponent, WelcomePageComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot( routes ), FormsModule
  ],
  providers: [ PostsService ],
  bootstrap: [rootComponent]
})
export class AppModule { }
