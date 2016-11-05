class OrdersCtrl {
  constructor(ordersSvc) {
    this.ordersSvc = ordersSvc;
  }

  orders() {
    return this.ordersSvc.orders;
  }

}

OrdersCtrl.$inject = ['OrdersService'];

export default OrdersCtrl;
