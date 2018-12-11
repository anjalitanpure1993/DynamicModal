import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'signIn',
    component: SignInComponent,
    outlet: 'modal'
  },
  {
    path: 'signUp',
    component: SignUpComponent,
    outlet: 'modal'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
