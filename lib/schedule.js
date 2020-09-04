class Schedule {
    #schedule = [...Array(1440).fill(false)];

    nextOpenMinute = () => this.#schedule.findIndex(open => !open);

    clear = () => this.#schedule = [...Array(1440).fill(false)];

    print = () => console.log(this.#schedule.map(minute => minute ? 'processing' : 'free'));

    addOrder = ({ startMinute, deliveryMinute }) => {
      for(let i = startMinute; i <= deliveryMinute; i++) {
        this.#schedule[i] = true;
      }
    }
    
}

module.exports = Schedule;
