import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { BobComponent } from './about/bob/bob.component';
import { SusanComponent } from './about/susan/susan.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, children: [
      { path: 'about', component: AboutComponent, children: [
          { path: 'about/bob', component: BobComponent},
          { path: 'about/susan', component: SusanComponent},
        ]},
      { path: 'contact', component: ContactComponent}
    ]},
    
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BobComponent,
    SusanComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }