class SignInCtrl {
  constructor(signinSvc) {
    this.signinSvc = signinSvc;
    this.email = '';
    this.password = '';
    this.sign = false;
  }

  signIn(email, password) {
    this.signinSvc.signIn(email, password);
    this.email = '';
    this.password = '';
    this.sign = true;
  }

}

SignInCtrl.$inject = ['SignInService'];

export default SignInCtrl;
