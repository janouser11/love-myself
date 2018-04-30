import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DocumentationComponent } from './components/pages/documentation/documentation.component';
import { ResearchComponent } from './components/pages/research/research.component';
import { DevelopmentComponent } from './components/pages/development/development.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StandardComponentComponent } from './components/standard-component/standard-component.component';
import { Subscription } from 'rxjs/Subscription';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { MatCardModule } from '@angular/material';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'development', component: DevelopmentComponent },
  { path: '**', component: PageNotFoundComponent }
];


// add new components here
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocumentationComponent,
    ResearchComponent,
    DevelopmentComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    StandardComponentComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgxCarouselModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



