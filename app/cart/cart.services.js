class CartService {
  constructor() {
    this.cart = [];
    this.subtotal = 0;
  }

  addToCart(name, price) {
    this.subtotal += price;
    Materialize.toast(`Added ${name}!`, 4000, 'blue rounded');

    for (var i = 0; i < this.cart.length; i++) {
      if (name === this.cart[i].name) {
        return this.cart[i].quantity += 1;
      }
    }
    this.cart.push({
      name: name,
      price: price,
      quantity: 1
    })
  }

  removeFromCart(index) {
    for (var i = 0; i < this.cart[index].quantity; i++) {
      this.subtotal -= this.cart[index].price;
    }
    this.cart.splice(index, 1);
  }

  cartCount() {
    let total = 0;
    for (var i = 0; i < this.cart.length; i++) {
      total += this.cart[i].quantity;
    }
    return total;
  }

}

export default CartService;
