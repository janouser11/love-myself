import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MissionComponent } from './components/pages/mission/mission.component';
import { DocumentationComponent } from './components/pages/documentation/documentation.component';
import { CampaignComponent } from './components/pages/campaign/campaign.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StandardComponentComponent } from './components/standard-component/standard-component.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mission', component: MissionComponent },
  {
    path: 'documentation',
    component: DocumentationComponent
  },
  { path: 'campaigns', component: CampaignComponent
  },
  { path: '**', component: PageNotFoundComponent }
];


// add new components here
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MissionComponent,
    DocumentationComponent,
    CampaignComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    StandardComponentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



