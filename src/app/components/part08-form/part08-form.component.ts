import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-part08-form',
  templateUrl: './part08-form.component.html',
})
export class Part08FormComponent implements OnInit {
  // template-driven form
  public loginUser(signInForm: NgForm) {
    const login = signInForm.value.loginInput;
    const password = signInForm.value.passwordInput;
    const check = signInForm.value.checkRem;
    alert(`${login}, ${password}, ${check}`);
  }

  // reactive form
  public nameControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  // formControl
  public nameValue: string = '';
  public nameStatus: string = '';
  getName() {
    alert(this.nameControl.value);
  }

  //formgroup

  public fullNameControll: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
  });

  public getNamefromFormGroup(): void {
    let firstName = this.fullNameControll.value.firstName;
    alert(firstName);
  }

  ngOnInit(): void {
    // reactive form

    // formControl
    this.nameControl.valueChanges.subscribe(
      (value) => (this.nameValue = value)
    );
    this.nameControl.statusChanges.subscribe(
      (status) => (this.nameStatus = status)
    );

    //formgroup
    this.fullNameControll.valueChanges.subscribe((value) => console.log(value));
  }
}

// Later: add formArray, custome Validation, asyc Validation, formBuilder
