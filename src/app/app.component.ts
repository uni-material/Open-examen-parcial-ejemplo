import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatAnchor} from '@angular/material/button';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatAnchor, RouterLink, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hartfordopen';
  options =[
    { path: '/home', title: 'Home'},
    { path: '/coso', title: 'coso'}
  ]
}
