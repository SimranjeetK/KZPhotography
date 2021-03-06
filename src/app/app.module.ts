import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PortraitComponent } from './portrait/portrait.component';
import { LandscapeComponent } from './landscape/landscape.component';
import { EventsComponent } from './events/events.component';
import { WildlifeComponent } from './wildlife/wildlife.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LightboxModule} from 'ngx-lightbox';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'portrait', component: PortraitComponent},
  {path: 'landscape', component: LandscapeComponent},
  {path: 'event', component: EventsComponent},
  {path: 'wildlife', component: WildlifeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PortraitComponent,
    LandscapeComponent,
    EventsComponent,
    WildlifeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
