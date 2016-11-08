class CartService {
  constructor() {
    this.cart = [];
    this.subtotal = 0;
  }

  addToCart(name, price) {
    this.subtotal += parseInt(price);
    Materialize.toast(`Added ${name}!`, 4000, 'blue rounded');

    for (var i = 0; i < this.cart.length; i++) {
      if (name === this.cart[i].name) {
        return this.cart[i].quantity += 1;
      }
    }
    this.cart.push({
      name: name,
      price: parseInt(price),
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

  increaseQuantity(index) {
    this.cart[index].quantity += 1;
    this.subtotal += this.cart[index].price;
  }

  decreaseQuantity(index) {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity -= 1;
      this.subtotal -= this.cart[index].price;
    }
    else {
      this.removeFromCart(index);
    }
  }

};

export default CartService;
