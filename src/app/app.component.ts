import { Component } from '@angular/core';
import {LanguageService} from './language.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  userForm: FormGroup;

  languages: any;

  constructor(private langService: LanguageService, formBuilder: FormBuilder) {
    this.languages = langService.getLanguages();
    this.userForm = formBuilder.group({
        userName : formBuilder.control('', [Validators.required])
    });
  }


  isJavaScript(item: string): boolean {
    return item === 'JavaScript';
  }

  save() {
    console.log('Saved!');
  }
}
