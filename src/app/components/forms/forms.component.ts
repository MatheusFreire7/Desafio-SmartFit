import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
    results = [];
    formGroup!: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
      this.formGroup = this.formBuilder.group({
        hour: '',
        showClosed: true
      })
    }

    onSubmit(): void {
      let { showClosed, hour } = this.formGroup.value
    }
  
    onClean(): void {
      this.formGroup.reset();
    }
}
