/* eslint-disable camelcase, max-len */

'use strict';

exports.seed = function(knex) {
  return knex('cameras').del()
    .then(() => {
      return knex('cameras').insert([{
        id: 1,
        name: 'Nikon D3100 DSLR',
        image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
        rating: 4,
        price: 369.99,
        on_sale: true
      },
      {
        id: 2,
        name: 'Canon EOS 70D',
        image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
        rating: 2,
        price: 1099.80,
        on_sale: false
      },
      {
        id: 3,
        name: 'Nikon D810A',
        image: 'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
        rating: 3,
        price: 3796.95,
        on_sale: true
      },
      {
        id: 4,
        name: 'Canon EOS M10',
        image:'http://www.shutterbug.com/images/524_canon_m10_slant.jpg',
        rating: 3,
        price: 499.00,
        on_sale: true
      },
      {
        id: 5,
        name: 'Leica M6',
        image:'http://d1jqecz1iy566e.cloudfront.net/large/bf038.jpg',
        rating: 5,
        price: 7299.95,
        on_sale: false
      },
      {
        id: 6,
        name: 'Nikon D7200',
        image:'http://cdn.mos.cms.futurecdn.net/ef9f6ec0a94a4ddaa501e73edcb46da8-650-80.jpg',
        rating: 3,
        price: 831.95,
        on_sale: false
      },
      {
        id: 7,
        name: 'Panasonic LX100',
        image:'http://cdn.mos.cms.futurecdn.net/51b3bea2fd56f3b5fe281cf1d2f4965c-650-80.jpg',
        rating: 4,
        price: 500.00,
        on_sale: true
      },
      {
        id: 8,
        name: 'Fujifilm X-A2',
        image:'http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/13/2015/04/Fujifilm-X-A2-product-shot-13.jpg',
        rating: 3,
        price: 549.00,
        on_sale: false
      },
      {
        id: 9,
        name: 'Canon EOS-5D',
        image:'http://images-na.ssl-images-amazon.com/images/I/51CP7RH10ZL.jpg',
        rating: 5,
        price: 2489.00,
        on_sale: false
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('cameras_id_seq', (SELECT MAX(id) FROM cameras));"
      );
    });
};
