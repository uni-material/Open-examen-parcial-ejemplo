import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatAnchor} from '@angular/material/button';
import {NgForOf} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import {
  LanguageSwitcherComponentComponent
} from './public/components/language-switcher.component/language-switcher.component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatAnchor, RouterLink, NgForOf, LanguageSwitcherComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hartford';
  options =[
    { path: '/home', title: 'Home'},
    { path: 'nursing/mental-state-exams', title: 'Mental State Exams'}
  ]


}
