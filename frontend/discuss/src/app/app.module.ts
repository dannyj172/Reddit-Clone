import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { DiscussionsComponent } from './components/pages/discussions/discussions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditPostComponent } from './components/pages/edit-post/edit-post.component';
import { ConfirmationComponent } from './components/partials/confirmation/confirmation.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ElapsedTimePipe } from './shared/pipes/elapsed-time.pipe';
import { SlicePipe } from './shared/pipes/slice.pipe';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { LoadingComponent } from './components/partials/loading/loading.component';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { hasUpvotedPipe } from './shared/pipes/has-upvoted.pipe';
import { hasDownvotedPipe } from './shared/pipes/has-downvoted.pipe';

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
    DiscussionsComponent,
    NotFoundComponent,
    EditPostComponent,
    ConfirmationComponent,
    ElapsedTimePipe,
    SlicePipe,
    hasUpvotedPipe,
    hasDownvotedPipe,
    ProfilePageComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      newestOnTop: false,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
