const Driver = require('./driver');
const Schedule = require('./schedule');

describe('Order class', () => {
  it('holds information about an order', () => {
    const pizzaSchedule = new Schedule();
    const pizzaDriver = new Driver('Party God', pizzaSchedule);
        
    expect(pizzaDriver.name).toEqual('Party God');
  });
});
