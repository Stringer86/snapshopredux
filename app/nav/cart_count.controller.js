class CartCountCtrl {
  constructor(cartSvc) {
    this.cartSvc = cartSvc;
  }

  cartCount() {
    return this.cartSvc.cartCount();
  }
}

CartCountCtrl.$inject = ['CartService'];

export default CartCountCtrl;
