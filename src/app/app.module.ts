import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { StartComponentComponent } from './start-component/start-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SkillsComponentComponent } from './skills-component/skills-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { RouterModule } from '@angular/router';
import {routes} from './route';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    StartComponentComponent,
    HomeComponentComponent,
    SkillsComponentComponent,
    ProjectsComponentComponent,
    ProfileComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [StartComponentComponent]
})
export class AppModule { }
