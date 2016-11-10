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
          // let orderz = [];
          let orderIds = orders.map((order) => order.id);
          return orderIds
        })
        .then(orderIds => {
          let orderPromises = orderIds.map(id => this.$http.get(`/api/orders/${id}`));
          return this.$q.all(orderPromises)
        })
        .then(orderInfo => orderInfo)
          // this.$q.all(orderIds)
          //   .then((orderId) => {
          //     this.$http.get(`/api/orders/${orderId}`)
          //       .then((orderInfo) => {
          //         orderz.push(orderInfo)
          //       })
          //   })
          //   return orderz;
        .catch((err) => {
          console.log(err);
        })
    }
}

OrdersService.$inject = ['$http', '$q'];

export default OrdersService;
