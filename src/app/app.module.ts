import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactInfoComponent } from './Components/contact-info/contact-info.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { SocialAdsComponent } from './components/social-ads/social-ads.component';

const appRoutes: Routes = [
   { path: 'aboutMe', component: AboutMeComponent },
   { path: 'contactInfo', component: ContactInfoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactInfoComponent,
    NavigationBarComponent,
    MainViewComponent,
    SocialAdsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
