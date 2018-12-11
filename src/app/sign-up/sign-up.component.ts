import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  // Variable declarations
  public signUpForm: any;
  @ViewChild('signInModal') signInModal: any;

  /**
   * This method is called when component is loaded
   * @param formBuilder - instance of FormBuilder
   */
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, this.validateEmail]],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  /**
   * This method is used to check the entered email is valid or invalid
   * @param c - event from the email input feild
   */
  public validateEmail(c: FormControl) {
    const EMAIL_REGEXP =
      new RegExp(['^(([^<>()[\\]\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\.,;:\\s@\"]',
        '+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
        '[0-9]{1,3}\])|(([a-zA-Z\\-0-9]+\\.)+',
        '[a-zA-Z]{2,}))$'].join(''));
    return EMAIL_REGEXP.test(c.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }

}
