import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import {MatFormFieldDefaultOptions,MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectComponent } from './select/select.component';
import { MatSelectModule } from '@angular/material/select';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MulticheckInputComponent } from './multicheck-input/multicheck-input.component';
import { MAT_CHECKBOX_DEFAULT_OPTIONS, MatCheckboxDefaultOptions, MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatButtonModule} from '@angular/material/button';
const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

export function ValidatorMessage(error: any, field: FormlyFieldConfig) {
  ValidatorMessage
  return `${field.props?.label} is Invalid`;
}


@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    MulticheckInputComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'pattern', message: ValidatorMessage },  
      ],
      types: [
        { name: 'multi_select',component:SelectComponent },
        { name: 'multi_checkbox',component:MulticheckInputComponent},
      ]
    }),
    FormlyMaterialModule
  ],
  providers: [{
    
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
  },
  
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
