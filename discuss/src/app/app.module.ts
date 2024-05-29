import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PostComponent } from './components/pages/post/post.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { CreatePostComponent } from './components/pages/create-post/create-post.component';
import { TopicComponent } from './components/pages/topic/topic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    PostComponent,
    LoginComponent,
    RegisterComponent,
    CreatePostComponent,
    TopicComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
