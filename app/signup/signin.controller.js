class SignInCtrl {
  constructor(signinSvc) {
    this.signinSvc = signinSvc;
    this.email = '';
    this.password = '';
  }

  getState() {
    return this.signinSvc.getState()
  }

  signIn(email, password) {
    this.signinSvc.signIn(email, password);
    this.email = '';
    this.password = '';
    console.log(this.sign);
  }

  signOut() {
    this.signinSvc.signOut();
  }

  changeView() {
    this.sign = !this.sign;
  }

}

SignInCtrl.$inject = ['SignInService'];

export default SignInCtrl;
