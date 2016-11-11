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
    this.signinSvc.signIn(email, password)
  }

  signOut() {
    this.signinSvc.signOut();
    this.cartSvc.cart.length = 0;
  }
}

SignInCtrl.$inject = ['SignInService', 'CartService'];

export default SignInCtrl;
