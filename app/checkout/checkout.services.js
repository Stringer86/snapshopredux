class CheckoutService {
  constructor($http) {
    this.$http = $http;

}
purchase(items, first, last, address1, address2, city, state, zip) {
    return this.$http.post('/orders', { items, address1, address2, city, state, zip })
      .then((response) => {
      Materialize.toast('Order Complete!', 4000, 'blue rounded');
      return response.data;
      })
      .catch((err) => {
        Materialize.toast(`${err.data}`, 4000, 'red rounded');
      })
  }
};


export default CheckoutService;
