import { Routes } from '@angular/router';
import {HomeComponentComponent} from './public/pages/home/home.component.component';
import {
  MedicalStateExamsComponentComponent
} from './public/pages/medical-state-exams/medical-state-exams.component.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponentComponent},
  {path: 'nursing/mental-state-exams', component: MedicalStateExamsComponentComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}

];
