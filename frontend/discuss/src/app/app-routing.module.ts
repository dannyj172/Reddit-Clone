import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PostComponent } from './components/pages/post/post.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { CreatePostComponent } from './components/pages/create-post/create-post.component';
import { TopicComponent } from './components/pages/topic/topic.component';
import { DiscussionsComponent } from './components/pages/discussions/discussions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post', component: PostComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'topic', component: TopicComponent },
  { path: 'discussions', component: DiscussionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
