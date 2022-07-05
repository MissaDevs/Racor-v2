import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandsComponent } from './components/home/commands/commands.component';
import { ServersComponent } from './components/home/servers/servers.component';
import { PremiumComponent } from './components/home/premium/premium.component';
import { Error404Component } from './components/errors/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarDashboardComponent } from './components/navbars/navbar-dashboard/navbar-dashboard.component';
import { NavbarHomeComponent } from './components/navbars/navbar-home/navbar-home.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadingComponent } from './components/loading/loading.component';

import { environment } from 'src/environments/environment';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CookieService } from 'ngx-cookie-service';
import { ServersDashboardComponent } from './components/dashboard/servers-dashboard/servers-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommandsComponent,
    ServersComponent,
    PremiumComponent,
    PremiumComponent,
    Error404Component,
    DashboardComponent,
    NavbarDashboardComponent,
    NavbarHomeComponent,
    SidebarComponent,
    LoadingComponent,
    ServersDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FontAwesomeModule,

    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
