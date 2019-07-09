import { NgModule } from '@angular/core';
import {NgbDatepickerI18n, NgbDateParserFormatter  } from '@ng-bootstrap/ng-bootstrap';
import {CustomDatePickerComponent} from './custom-date-picker';
import {LANG_VALUES, Languages } from './lang-date-picker';
import {NgbDateCustomParserFormatter } from './ngb-date-custom-parser-formatter';
import {CustomDatepickerI18n} from './custom-date-picker-i18n';

@NgModule(
  { 
    declarations: [CustomDatePickerComponent],     
    exports: [CustomDatePickerComponent],
    providers: [Languages,
    {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter},
    {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}]
  }
  )
export class CustomDatePickerModule {}