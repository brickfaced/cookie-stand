'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var firstAndPike = {
  customers: [],
  totalSales: 0,
  render: function() {
    var ulEl = document.getElementById('firstAndPike');

    for(var i = 0; i < hours.length; i++) {
      this.customers.push(Math.floor(Math.random() * (65 - 23 + 1) + 23));
      var liEl = document.createElement('li');
      this.totalSales += Math.round((this.customers[i] * 6.3));
      liEl.textContent = hours[i] + ': ' + Math.round((this.customers[i] * 6.3)) + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalSales + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var seatacAirport = {
  customers: [],
  totalSales: 0,
  render: function() {
    var ulEl = document.getElementById('seatac');

    for(var i = 0; i < hours.length; i++) {
      this.customers.push(Math.floor(Math.random() * (24 - 3 + 1) + 3));
      var liEl = document.createElement('li');
      this.totalSales += Math.round((this.customers[i] * 1.2));
      liEl.textContent = hours[i] + ': ' + Math.round((this.customers[i] * 1.2)) + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalSales + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var seattleCenter = {
  customers: [],
  totalSales: 0,
  render: function() {
    var ulEl = document.getElementById('seattleCenter');

    for(var i = 0; i < hours.length; i++) {
      this.customers.push(Math.floor(Math.random() * (38 - 11 + 1) + 11));
      var liEl = document.createElement('li');
      this.totalSales += Math.round((this.customers[i] * 3.7));
      liEl.textContent = hours[i] + ': ' + Math.round((this.customers[i] * 3.7)) + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalSales + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var capitolHill = {
  customers: [],
  totalSales: 0,
  render: function() {
    var ulEl = document.getElementById('capitolHill');

    for(var i = 0; i < hours.length; i++) {
      this.customers.push(Math.floor(Math.random() * (38 - 20 + 1) + 20));
      var liEl = document.createElement('li');
      this.totalSales += Math.round((this.customers[i] * 2.3));
      liEl.textContent = hours[i] + ': ' + Math.round((this.customers[i] * 2.3)) + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalSales + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var alki = {
  customers: [],
  totalSales: 0,
  render: function() {
    var ulEl = document.getElementById('alki');

    for(var i = 0; i < hours.length; i++) {
      this.customers.push(Math.floor(Math.random() * (16 - 2 + 1) + 2));
      var liEl = document.createElement('li');
      this.totalSales += Math.round((this.customers[i] * 4.6));
      liEl.textContent = hours[i] + ': ' + Math.round((this.customers[i] * 4.6)) + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalSales + ' cookies';
    ulEl.appendChild(liEl);
  }
};

firstAndPike.render();
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();