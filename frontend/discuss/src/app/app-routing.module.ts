import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PostComponent } from './components/pages/post/post.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { CreatePostComponent } from './components/pages/create-post/create-post.component';
import { TopicComponent } from './components/pages/topic/topic.component';
import { DiscussionsComponent } from './components/pages/discussions/discussions.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { EditPostComponent } from './components/pages/edit-post/edit-post.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'posts/:id', component: PostComponent },
  { path: 'posts/:id/edit', component: EditPostComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'create-post',
    component: CreatePostComponent,
    canActivate: [AuthGuard],
  },
  { path: 'topics/:topicName', component: TopicComponent },
  { path: 'discussions', component: DiscussionsComponent },
  { path: 'profile/:username', component: ProfilePageComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
