'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let listOfCookies = document.getElementById('cookietest');

function Cookiestore (location, min, max, avg) {
    this.location = location;
    this.min = min; 
    this.max = max; 
    this.avg = avg; 
    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.cookiesTotal = 0;

    this.getRandomNumber = function(min,max) {
        let randomNumber = Math.floor(((Math.random() * (max - min)) + min) + 1);
        return randomNumber;
    };

    this.renderCustomerPerHour = function(min,max) {
        for (let i = 0; i < hours.length; i++) {
          let num = this.getRandomNumber(this.min, this.max)
          this.customersPerHour.push(num);
        }
      console.log(this.customersPerHour); 
      };

    this.renderCookiesPerHour = function() {
        for (let i = 0; i < this.customersPerHour.length; i++) {
          this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avg))
        }
        console.log(this.cookiesPerHour);
      };

    this.renderCity = function() {
        let h3 = document.createElement('h3');
            h3.textContent = `${this.location}`;
            listOfCookies.appendChild(h3);
            let tr = document.createElement('tr');
            let total = 0;
            for (let i = 0; i < hours.length; i++) {
                let td = document.createElement('td');
                td.textContent = `${hours[i]}: ${this.cookiesPerHour[i]}`;
                tr.appendChild(td);
                total += this.cookiesPerHour[i];
        }
        let td = document.createElement('td');
        td.textContent = `Total cookies: ${total}`;
        tr.appendChild(td); 
        listOfCookies.appendChild(tr);
    }

    this.callUponAll = function() {
      this.renderCustomerPerHour();
      this.renderCookiesPerHour();
      this.renderCity();
    }
    this.callUponAll();
    this.shopArray.push(this);
  }
  
  Cookiestore.prototype.shopArray = [];
  
  const seattle = new Cookiestore('Seattle', 23, 65, 6.3);
  const tokyo = new Cookiestore('Tokyo', 3, 24, 1.2);
  const dubai = new Cookiestore('Dubai', 11, 38, 3,7);
  const paris = new Cookiestore('Paris', 20, 38, 2.3);
  const lima = new Cookiestore('Lima', 2, 16, 0.6);
  
  console.log(Cookiestore.prototype.shopArray);



 