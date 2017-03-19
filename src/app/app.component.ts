import { Component } from '@angular/core';
import {LanguageService} from './language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  languages: any;

  constructor(private langService: LanguageService) {
    this.languages = langService.getLanguages();
  }


  isJavaScript(item: string): boolean {
    return item === 'JavaScript';
  }
}
