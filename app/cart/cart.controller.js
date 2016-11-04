class CartCtrl {
  constructor(catalogSvc) {
    this.catalogSvc = catalogSvc;
  }

  cart() {
    return this.catalogSvc.cart;
  }

  subtotal() {
    return this.catalogSvc.subtotal;
  }

  removeFromCart(index) {
    return this.catalogSvc.removeFromCart(index);
  }
}

CartCtrl.$inject = ['CatalogService'];

export default CartCtrl;
