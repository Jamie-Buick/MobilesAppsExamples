import { Routes } from '@angular/router';
import { StarComponent } from './star/star.component';


export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'star'},
    {path: 'star', component: StarComponent}
];