class CartCountCtrl {
  constructor(catalogSvc) {
    this.catalogSvc = catalogSvc;
  }

  cartCount() {
    return this.catalogSvc.cart.length;
  }
}

CartCountCtrl.$inject = ['CatalogService'];

export default CartCountCtrl;
