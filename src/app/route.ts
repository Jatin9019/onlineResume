import {Routes} from '@angular/router';
import {StartComponentComponent} from './start-component/start-component.component';
import {ProjectsComponentComponent} from './projects-component/projects-component.component';
import {ProfileComponentComponent} from './profile-component/profile-component.component';
import {HomeComponentComponent} from './home-component/home-component.component';
import {SkillsComponentComponent} from './skills-component/skills-component.component';

export const routes : Routes=[
    {path:'projects' , component:ProjectsComponentComponent , data:{animation:"isRight"}},
    {path:'profile' , component:ProfileComponentComponent, data:{animation:"isRight"}},
    {path:'home' , component:HomeComponentComponent, data:{animation:"isRight"}},
    {path:'skills' , component:SkillsComponentComponent, data:{animation:"isRight"}},

]