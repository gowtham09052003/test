import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';


@Component({
  selector: 'app-multicheck-input',
  templateUrl: './multicheck-input.component.html',
  styleUrl: './multicheck-input.component.scss',
})
export class MulticheckInputComponent extends FieldType<any> implements OnInit {

opt:any
object:any={}

  ngOnInit(): void {
     this.opt = this.props
  }
  
  
  public get thisFormControl() {
    return this.formControl as FormControl;
  }

  
  onCheckBoxChanged(event: any,name:any) {
    if(this.formControl.value ){
      let names:any=this.opt.options[name].label
      this.object[names]=event
      this.model[this.field.key]=this.object
      this.opt.options[name].value=event
  
    } else {
      this.formControl.setErrors({invalid:true})
    }
  }
}
