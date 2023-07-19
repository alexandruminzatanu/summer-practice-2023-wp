import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

function ratingRange(c: AbstractControl): { [key: string]: boolean } | null {
  if (c.value  && (isNaN(c.value) || c.value < 1 || c.value > 5 ))
    return { 'range': true };
  return null;
}

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
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl(''),
      sendCatalog: new FormControl(),
      rating: new FormControl('', ratingRange),
      
      // (Task) Create an address formControl that is required in the formGroup
      address: new FormControl('', [Validators.required, Validators.minLength(5)])
    })

    this.formGroup.valueChanges.subscribe((value) => {
      // console.log("Form model: ", this.formGroup);
      // console.log('First name erorrs:', this.formGroup.get('firstName')?.errors);
      console.log('New value:', value);
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
    this.formGroup.setValue({
      firstName: 'firstName',
      lastName: 'lastName',
      phone:'phone',
      email: 'email',
      sendCatalog: 'sendCatalog',
      rating: 2,
      address: 'asd'
    })

    // this.formGroup.patchValue({
    //   firstName: "First Name",
    //   lastName: "Last Name"
    // })

    // this.formGroup.patchValue({
    //   firstName: 'firstName',
    //   lastName: 'lastName',
    //   phone:'phone',
    //   email: 'email',
    //   sendCatalog: 'sendCatalog',
    //   rating: 2,
    //   address: 'asd'
    // })
  }
}
