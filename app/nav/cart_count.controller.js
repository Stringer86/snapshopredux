class CartCountCtrl {
  constructor(catalogSvc) {
    this.catalogSvc = catalogSvc;
  }

  cartCount() {
    return this.catalogSvc.cartCount();
  }
}

CartCountCtrl.$inject = ['CatalogService'];

export default CartCountCtrl;
