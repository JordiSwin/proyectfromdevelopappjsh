import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisVideosComponent } from './pages/regis-videos/regis-videos.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './pages/menu/menu.component';
import { environment } from '../enviroments/enviroment.development';

@NgModule({
  declarations: [
    AppComponent,
    RegisVideosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
