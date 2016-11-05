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
    return this.cartSvc.addToCart(name, price);
  }

  removeFromCart(index) {
    return this.cartSvc.removeFromCart(index);
  }

  increaseQuantity(index) {
    return this.cartSvc.increaseQuantity(index);
  }

  decreaseQuantity(index) {
    return this.cartSvc.decreaseQuantity(index);
  }

}

CartCtrl.$inject = ['CartService'];

export default CartCtrl;
