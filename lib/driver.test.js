const Driver = require('./driver');

describe('Order class', () => {
  it('holds information about an order', () => {
    const pizzaDriver = new Driver('Party God');
        
    expect(pizzaDriver.name).toEqual('Party God');
  });
});
