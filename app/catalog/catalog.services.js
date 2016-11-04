class CatalogService {
  constructor() {
    this.cart = [];
    this.subtotal = 0;
    this.cameras = [{
      name: 'Nikon D3100 DSLR',
      image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
      rating: 4,
      price: 369.99,
      onSale: true
    }, {
      name: 'Canon EOS 70D',
      image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
      rating: 2,
      price: 1099.0,
      onSale: false
    }, {
      name: 'Nikon D810A',
      image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
      rating: 3,
      price: 3796.95,
      onSale: true
    }, {
      name: 'Leica M6',
      image:'https://d1jqecz1iy566e.cloudfront.net/large/bf038.jpg',
      rating: 5,
      price: 7299.95,
      onSale: false
    },
    {
      name: 'Nikon D7200',
      image:'http://cdn.mos.cms.futurecdn.net/ef9f6ec0a94a4ddaa501e73edcb46da8-650-80.jpg',
      rating: 3.8,
      price: 831.95,
      onSale: false
    },
    {
      name: 'Panasonic LX100',
      image:'http://cdn.mos.cms.futurecdn.net/51b3bea2fd56f3b5fe281cf1d2f4965c-650-80.jpg',
      rating: 4.8,
      price: 500.00,
      onSale: true
    },
    {
      name: 'Fujifilm X-A2',
      image:'http://www.adorama.com/images/Large/ifjxa2sl.jpg',
      rating: 3.5,
      price: 549.00,
      onSale: false
    },
    {
      name: 'Canon EOS-5D',
      image:'http://www.adorama.com/images/Large/ica5dm4k.jpg',
      rating: 5,
      price: 2489.00,
      onSale: false
    },
    {
      name: 'Nikon 1-J5',
      image:'http://www.adorama.com/images/Large/ink1j5wt3.jpg',
      rating: 3.6,
      price: 879.00,
      onSale: false
    }
  ];
}

  addToCart(name, price) {
    this.subtotal += price;
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

    Materialize.toast(`Added ${name}!`, 4000, 'blue rounded');
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

};

export default CatalogService;
