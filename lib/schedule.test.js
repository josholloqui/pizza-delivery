const Schedule = require('./schedule');
const Order = require('./order');

describe('Schedule class', () => {
  it('holds information about the schedule', () => {
    const { nextOpenMinute } = new Schedule();

    expect(nextOpenMinute()).toEqual(0);
  });

  it('holds information about the schedule when order is added', () => {
    const { nextOpenMinute, addOrder, print } = new Schedule();

    const pizzaOrder = new Order('Greg\'s Anchovy Pizza Galore', 60, 40);

    addOrder(pizzaOrder);
    print();

    expect(nextOpenMinute()).toEqual(61);
  });

  it('clears information about the schedule', () => {
    const { nextOpenMinute, addOrder, clear } = new Schedule();

    const pizzaOrder = new Order('Greg\'s Anchovy Pizza Galore', 60, 40);

    addOrder(pizzaOrder);

    clear();

    expect(nextOpenMinute()).toEqual(0);
  });
});
