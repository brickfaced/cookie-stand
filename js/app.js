'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var stores = [];

var results = [];

var storeTable = document.getElementById('stores');

var storeForm = document.getElementById('newStoreForm');

function Store(location,maxCustomers,minCustomers,avgCookies) {
  this.customers = [];
  this.sales = [];
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
    if(this.sales.length !== hours.length) {
      this.customers.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers));
      this.sales.push(Math.round((this.customers[i] * this.avgCookies)));
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = this.sales[i];
    trEl.appendChild(tdEl);
    storeTable.appendChild(trEl);
  }
};

function hourlyResults() {
  results = [];
  for(var i = 0; i < hours.length; i++) {
    var temp = 0;
    for(var j = 0; j < stores.length; j++) {
      temp += stores[j].sales[i];
    }
    results.push(temp);
  }
}

function makeHeader() {
  var trEl = document.createElement('tr');
  var hour = document.createElement('th');
  hour.textContent = 'Location/Hours';
  trEl.appendChild(hour);
  for(var i = 0; i <= hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  storeTable.appendChild(trEl);
}

function makeFooter() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  for(var h = 0; h < results.length; h++){
    thEl = document.createElement('th');
    thEl.textContent = results[h];
    trEl.appendChild(thEl);
  }
  storeTable.appendChild(trEl);
}

function allStoreSales() {
  for(var i in stores) {
    stores[i].totalSales();
  }
}

function addNewStore(event) {
  event.preventDefault();
  var newLocation = event.target.storeLocation.value;
  var newMaxCustomer = event.target.maxCustomers.value;
  var newMinCustomer = event.target.minCustomers.value;
  var newAvgCookies = event.target.avgCookies.value;

  new Store(newLocation,newMaxCustomer,newMinCustomer,newAvgCookies);

  storeTable.innerHTML = '';
  makeHeader();
  allStoreSales();
  hourlyResults();
  makeFooter();
}

new Store('1st and Pike',65,23,6.3);
new Store('SeaTac Airport',24,3,1.2);
new Store('Seattle Center',38,11,3.7);
new Store('Capitol Hill',38,20,2.3);
new Store('Alki',16,2,4.6);

storeForm.addEventListener('submit',addNewStore);

makeHeader();
allStoreSales();
hourlyResults();
makeFooter();