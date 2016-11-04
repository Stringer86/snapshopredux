class CatalogCtrl {
  constructor(catalogSvc) {
    this.catalogSvc = catalogSvc;
  }

  cameras() {
    return this.catalogSvc.cameras;
  }

  addToCart(name, price) {
    return this.catalogSvc.addToCart(name, price);
  }
}

CatalogCtrl.$inject = ['CatalogService'];

export default CatalogCtrl;
