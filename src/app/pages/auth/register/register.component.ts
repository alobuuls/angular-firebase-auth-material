import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AuthService, Credential } from '../../../core/services/auth.service';
import { ButtonProviders } from '../components/button-providers/button-providers.component';

interface registerForm {
  names: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
};

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    NgIf,
    ButtonProviders
  ],
  templateUrl: './register.component.html',
  styles: []
})
export default class RegisterComponent {

  hide = true;

  formBuilder = inject(FormBuilder);

  form: FormGroup<registerForm> = this.formBuilder.group({
    names:this.formBuilder.control('', {
      validators: Validators.required,
      nonNullable: true,
    }),
    lastName:this.formBuilder.control('', {
    validators: Validators.required,
    nonNullable: true,
    }),
    email:this.formBuilder.control('', {
    validators: [Validators.required, Validators.email],
    nonNullable: true,
    }),
    password:this.formBuilder.control('', {
    validators: Validators.required,
    nonNullable: true,
    })
  });

  private authService = inject(AuthService);
  private _router = inject(Router);

  get isEmailValid(): string | boolean {
    const control = this.form.get('email');

    const isInvalid = control?.invalid && control.touched;

    if (isInvalid) {
      return control.hasError('required')
      ? 'This field is required'
      : 'Enter a valid email'
    }
    return false;
  }

  async register(): Promise<void> {
    if(this.form.invalid) return;

    const credential: Credential = {
      email: this.form.value.email || '',
      password: this.form.value.password || ''
    }

    try {
      const userCredentials = await this.authService.signUpWithEmailAndPassword(credential);
      console.log(userCredentials);
      this._router.navigateByUrl('/');
    } catch (error) {
      console.error(error);
    }
  }
}
