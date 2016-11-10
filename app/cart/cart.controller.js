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

  addToCart(name, price, cameraId) {
    this.cartSvc.addToCart(name, price, cameraId);
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
