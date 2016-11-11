class OrdersService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }
  getOrders() {
    return this.$http.get('/api/orders')
        .then((orders) => {
          return orders.data;
        })
        .then((orders) => {
          const orderIds = orders.map((order) => order.id);

          return orderIds;
        })
        .then((orderIds) => {
          const orderPromises = orderIds.map((id) => this.$http.get(`/api/orders/${id}`));

          return this.$q.all(orderPromises);
        })
        .then((orderInfo) => orderInfo)
        .catch((err) => {
          console.log(err);
        });
  }
}

OrdersService.$inject = ['$http', '$q'];

export default OrdersService;
