import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar-component/nav-bar.component';
import { ConstructionComponent } from './construction/construction.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { CheckersComponent } from './games/checkers/checkers.component';
import { ChessComponent } from './games/chess/chess.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConstructionComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    BlogComponent,
    ProjectsComponent,
    CheckersComponent,
    ChessComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA] 
})
export class AppModule { }
