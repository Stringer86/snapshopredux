class CartCtrl {
  constructor(cartSvc) {
    this.cartSvc = cartSvc;
  }

  cart() {
    return this.cartSvc.cart;
  }

  subtotal() {
    return this.cartSvc.subtotal;
  }

  addToCart(name, price) {
    this.cartSvc.addToCart(name, price);
  }

  removeFromCart(index) {
    this.cartSvc.removeFromCart(index);
  }

  increaseQuantity(index) {
    this.cartSvc.increaseQuantity(index);
  }

  decreaseQuantity(index) {
    this.cartSvc.decreaseQuantity(index);
  }

}

CartCtrl.$inject = ['CartService'];

export default CartCtrl;
