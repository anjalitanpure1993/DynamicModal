import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  // Variable declarations
  public loginForm: any;
  @ViewChild('signInModal') signInModal: any;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])]
    });
  }

  /**
   * This method is used to get all user data
   * @param userData - user details
   */
  public login(userData) {
    this.signInModal.closePopup();
  }

}
