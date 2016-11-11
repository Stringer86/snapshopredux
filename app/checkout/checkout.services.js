class CheckoutService {
  constructor($http, cartSvc) {
    this.$http = $http;
    this.cartSvc = cartSvc;
  }

  purchase(items, first, last, address1, address2, city, state, zip) {
    return this.$http.post('/orders', { items, address1, address2, city, state, zip })
      .then((response) => {
        Materialize.toast('Order Complete!', 4000, 'blue rounded');
        this.cartSvc.cart.length = 0;
        this.cartSvc.subtotal = 0;
        return response.data;
      })
      .catch((err) => {
        Materialize.toast(`${err.data}`, 4000, 'red rounded');
      });
  }
}

CheckoutService.$inject = ['$http', 'CartService'];

export default CheckoutService;
