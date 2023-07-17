import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

//LIVE

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formGroup: FormGroup = new FormGroup({});
  constructor() {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      // (Task) Add 10 characters maximum length validator for the first name field
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl(''),
      sendCatalog: new FormControl(),
      
      // (Task) Create an address formControl that is required in the formGroup

      //
    })

    this.formGroup.valueChanges.subscribe((value) => {
      // console.log("Form model: ", this.formGroup);
      // console.log('Erorrs:', this.formGroup.get('firstName')?.errors);
      // console.log('New value:', value);
      // Perform additional actions with the new value
    });
  }

  setNotification(checkboxValue: boolean): void {
    const emailControl = this.formGroup.get('email');
    if (checkboxValue === true) {
      emailControl?.setValidators(Validators.required);
    } else {
      emailControl?.clearValidators();
    }
    // Reevaluate the email FormControl's validation state
    emailControl?.updateValueAndValidity();
  }

  submitForm() {
    if (this.formGroup.valid) {
      // Form submission logic
      console.log(this.formGroup.value);
    }
  }

  setOrPatchValue(): void {
    // this.formGroup.setValue({
    //   firstName: 'firstName',
    //   lastName: 'lastName',
    //   phone:'phone',
    //   email: 'email',
    //   sendCatalog: 'sendCatalog',
    //   //rating: 2
    // })

    // this.formGroup.patchValue({
    //   firstName: "First Name",
    //   lastName: "Last Name"
    // })

    this.formGroup.patchValue({
      firstName: 'firstName',
      lastName: 'lastName',
      phone:'phone',
      email: 'email',
      sendCatalog: 'sendCatalog',
      rating: 2
    })
  }
}
