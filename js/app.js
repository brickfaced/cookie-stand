'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var stores = [];

var storeTable = document.getElementById('stores');

function Store(location,maxCustomers,minCustomers,avgCookies) {
  this.customers = [];
  this.location = location;
  this.maxCustomers = maxCustomers;
  this.minCustomers = minCustomers;
  this.avgCookies = avgCookies;
  stores.push(this);
}

Store.prototype.totalSales = function () {
  var trEl = document.createElement('tr');
  trEl.textContent = this.location;
  for(var i = 0; i < hours.length; i++) {
    this.customers.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers));
    var tdEl = document.createElement('td');
    tdEl.textContent = Math.round((this.customers[i] * this.avgCookies));
    trEl.appendChild(tdEl);
    storeTable.appendChild(trEl);
  }
};

function makeHeader() {
  var trEl = document.createElement('tr');
  var hour = document.createElement('th');
  hour.textContent = 'Hours/Location';
  trEl.appendChild(hour);
  for(var i = 0; i <= hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  storeTable.appendChild(trEl);
}

var firstAndPike = new Store('1st and Pike',65,23,6.3);
var seatacAirport = new Store('SeaTac Airport',24,3,1.2);
var seattleCenter = new Store('Seattle Center',38,11,3.7);
var capitolHill = new Store('Capitol Hill',38,20,2.3);
var alki = new Store('Alki',16,2,4.6);

makeHeader();
firstAndPike.totalSales();
seatacAirport.totalSales();
seattleCenter.totalSales();
capitolHill.totalSales();
alki.totalSales();