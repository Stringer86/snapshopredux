class SignInCtrl {
  constructor(signinSvc) {
    this.signinSvc = signinSvc;
    this.email = '';
    this.password = '';
  }

  signIn(email, password) {
    console.log("hello");
    return this.signinSvc.signIn(email, password);
    this.email = '';
    this.password = '';
  }

}

SignInCtrl.$inject = ['SignInService'];

export default SignInCtrl;
