class CatalogCtrl {
  constructor(catalogSvc) {
    this.catalogSvc = catalogSvc;
    catalogSvc.getCameras()
    .then((cameras) => {
      this.cameras = cameras;
    })
    .catch((err) => console.log(err));
  }

}

CatalogCtrl.$inject = ['CatalogService'];

export default CatalogCtrl;
