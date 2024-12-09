import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidatorService {

  constructor() { }

  // Method to get the password validator
  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value;

      // Password validation rules
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      const isLengthValid = password.length >= 8;

      // Return null if password is valid
      if (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar && isLengthValid) {
        return null;
      } else {
        return { passwordStrength: 'Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character.' };
      }
    };
  }
}
