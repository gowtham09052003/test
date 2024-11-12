import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent extends FieldType<any> implements OnInit{
  

  opt:any
  valueProp:any
  label:any
  public get thisFormControl() {
    return this.formControl as FormControl;
  }

  ngOnInit(){
    this.label = this.field.props?.label
    this.opt = this.field.props || {};
    this.valueProp = this.opt.valueProp;

  }

  selectionChange(){
if(this.formControl.value){
  if(this.formControl.value.length < this.opt.min){
    this.thisFormControl.setErrors({error:true})
    
  } else if(this.formControl.value.length >= this.opt.min){
    this.thisFormControl.setErrors(null)
  }

}

  }
}
