import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ButtonComponent } from './components/button/button.component';
import { SongsComponent } from './pages/songs/songs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaylistComponent,
    SignupComponent,
    LoginComponent,
    SearchComponent,
    SongCardComponent,
    TopNavComponent,
    ButtonComponent,
    SongsComponent, 
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }





