class SignInCtrl {
  constructor(signinSvc, cartSvc) {
    this.cartSvc = cartSvc;
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
    this.cartSvc.cart.length = 0;
  }

  changeView() {
    this.sign = !this.sign;
  }

}

SignInCtrl.$inject = ['SignInService', 'CartService'];

export default SignInCtrl;
