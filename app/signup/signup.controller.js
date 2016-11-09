class SignUpCtrl {
  constructor(signupSvc) {
    this.signupSvc = signupSvc;
    this.first = '';
    this.last = '';
    this.email = '';
    this.password = '';
  }

  signUp(first, last, email, password) {
    return this.signupSvc.signUp(first, last, email, password);
    this.first = '';
    this.last = '';
    this.email = '';
    this.password = '';
  }

}

SignUpCtrl.$inject = ['SignUpService'];

export default SignUpCtrl;
