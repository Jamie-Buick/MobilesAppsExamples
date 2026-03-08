import { Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'ppl'},
    {path: 'ppl', component: PeopleComponent}
];