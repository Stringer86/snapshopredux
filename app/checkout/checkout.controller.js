class CheckoutCtrl {
  constructor(cartSvc, checkoutSvc) {
    this.cartSvc = cartSvc;
    this.checkoutSvc = checkoutSvc;
    this.first = '';
    this.last = '';
    this.address1 = '';
    this.address2 = '';
    this.city = '';
    this.state = '';
    this.zip = '';
  }

  purchase(items, first, last, address1, address2, city, state, zip) {
    this.checkoutSvc.purchase(items, this.first, this.last, this.address1, this.address2, this.city, this.state, this.zip)
    .then((e) => {
      this.cartSvc.cart.length = 0;
      this.cartSvc.subtotal = 0;
    })
  }



}

CheckoutCtrl.$inject = ['CartService', 'CheckoutService'];

export default CheckoutCtrl;
