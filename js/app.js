'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var firstAndPike = {
  customers: [],
  render: function() {
    var ulEl = document.getElementById('firstAndPike');

    for(var i = 0; i < hours.length; i++) {
      this.customers.push(Math.floor(Math.random() * (65 - 23 + 1) + 23));
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + Math.round((this.customers[i] * 6.3)) + ' cookies.';
      ulEl.appendChild(liEl);
    }
  }
};

var seatacAirport = {
  customers: [],
  render: function() {
    var ulEl = document.getElementById('seatac');

    for(var i = 0; i < hours.length; i++) {
      this.customers.push(Math.floor(Math.random() * (24 - 3 + 1) + 3));
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + Math.round((this.customers[i] * 1.2)) + ' cookies.';
      ulEl.appendChild(liEl);
    }
  }
}

var seattleCenter = {
  
}

firstAndPike.render();
seatacAirport.render();