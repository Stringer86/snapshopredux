class OrdersCtrl {
  constructor(ordersSvc) {
    this.ordersSvc = ordersSvc;
    ordersSvc.getOrders()
    .then((orders) => {
      this.orders = orders;
    })

    .catch((err) => { console.log(err); });
  }
}

OrdersCtrl.$inject = ['OrdersService'];

export default OrdersCtrl;
