import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'viza-task';
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      props: {
        label: 'Name',
        placeholder: 'Name',
        pattern: "^[a-zA-Z]+( [a-zA-Z]+|\\.[a-zA-Z]+)*$",
        required: true,
      },
    },
    {
      key: 'mobile_number',
      type: 'input',
      props: {
        label: 'Mobile Number',
        placeholder: 'Mobile Number',
        required: true,
        pattern:'^[0-9]{10}$'
      },
      validation: {
        messages: {
          pattern: "Mobile Number should be in correct format",
        }
      },
    },
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email',
        placeholder: 'Email',
        pattern: "[a-z._%+-]+[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$",
        required: true,
      },
      validation: {
            messages: {
              pattern: "Email ID should be in correct format",
            }
          },
    },
    {
      key: 'gender',
      type: 'radio',
      props: {
        label: 'Gender',
        required: true,
        options: [
          { label: 'Female', value: 'female' },
          { label: 'Male', value: 'male' },
        ],
      },
    },
    {
      key: 'marital_status',
      type: 'select',
      props: {
        label: 'Marital Status',
        placeholder: 'Marital Status',
        required: true,
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
        ],
      },
    },
    {
      key: 'skills',
      type: 'multi_select',
      props: {
        label: 'Skills',
        placeholder: 'Skills',
        required: true,
        min:1,
        options: [
          { name: 'HTML' },
          { name: 'CSS' },
          { name: 'Javascript'},
          { name: 'Typescript' },
          { name: 'Angular' },
          { name: 'React' },
          { name: 'Nodejs' },
          { name: 'Expressjs' },
          { name: 'Mongo db' },
          { name: 'C#' },
          { name: 'Deveops' },
          { name: 'Python' },
        ],
        valueProp: "name"
      },
      validation: {
          messages: {
            required: "This field is required",
            msg:"Skills Should be minimum  10"
          }
        }
    },
   
    {
      key: 'language',
      type: 'multi_checkbox',
      props: {
        label: 'Language',
        required:true,
        options: [
          { label: 'Tamil', value: false },
          { label: 'English', value: false },
        ],
      },
      validation: {
        messages: {
          required: "This field is required",
        }
      }
      
    },
   
    
  ];

  submit(form:any){
  debugger
    if (!form.valid) {
      form.markAllAsTouched();
      
    }
    console.log('form' + form.value);
  }

  reset(){
    this.form.reset()
  }

  
}
