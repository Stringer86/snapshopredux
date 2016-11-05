class CatalogCtrl {
  constructor(catalogSvc) {
    this.catalogSvc = catalogSvc;
  }

  cameras() {
    return this.catalogSvc.cameras;
  }

}

CatalogCtrl.$inject = ['CatalogService'];

export default CatalogCtrl;
