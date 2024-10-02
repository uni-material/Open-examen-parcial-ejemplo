import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './language-switcher.component.component.html',
  styleUrl: './language-switcher.component.component.css'
})
export class LanguageSwitcherComponentComponent {
  protected currentLanguage = 'en';
  protected languages = ['en', 'es'];


  constructor(private translate: TranslateService) {
    this.currentLanguage = translate.currentLang;
  }

  useLanguage(language:string){
    this.translate.use(language);
    this.currentLanguage = language;
  }

}
