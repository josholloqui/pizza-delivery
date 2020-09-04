const Order = require('./order');

describe('Order class', () => {
  it('holds information about an order', () => {
    const pizzaOrder = new Order('Greg\'s Anchovy Pizza Galore', 60, 25);
        
    expect(pizzaOrder).toEqual({
      name: 'Greg\'s Anchovy Pizza Galore',
      deliveryMinute: 60,
      startMinute: 15
    });
  });
});
