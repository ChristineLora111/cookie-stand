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
            let num = Math.floor(this.customersPerHour[i] * this.avg);
            this.cookiesTotal += num;
          this.cookiesPerHour.push(num);
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
    //   this.renderCity();
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

// Actually making the table:

  const divElement = document.getElementById('cookietest'); 

  const tableElement = document.createElement('table');
  divElement.appendChild(tableElement);

  function renderNewHeader() {
      const rowHeader = document.createElement('tr');
      tableElement.appendChild(rowHeader);

      const rowCellHeader= document.createElement('th');
      tableElement.appendChild(rowCellHeader);

      for (let i = 0; i < hours.length; i++) {
          const rowCellHeader = document.createElement('th');
          rowCellHeader.textContent = hours[i];
          tableElement.appendChild(rowCellHeader); 
      }
  };

  function renderActualTable() {
      for (let i = 0; i < Cookiestore.prototype.shopArray.length; i++) {
          let actualShop = Cookiestore.prototype.shopArray[i];
          const shopTableElem = document.createElement('tr');
          tableElement.appendChild(shopTableElem);

          const shopCellElem = document.createElement('th');
          shopCellElem.textContent = actualShop.location;
          shopTableElem.appendChild(shopCellElem); 

          for (let j = 0; j < actualShop.cookiesPerHour.length; j++) {
              const shopCellElem2 = document.createElement('td');
              shopCellElem2.textContent = `${actualShop.cookiesPerHour[j]}`;
              shopTableElem.appendChild(shopCellElem2); 
          }
          const shopCellElem3 = document.createElement('td');
          shopCellElem3.textContent = 'Total Cookies: ' + actualShop.cookiesTotal;
          shopTableElem.appendChild(shopCellElem3);
      }
  }

  function renderFooterTable() {
      const footerElem = document.createElement('tr');
      tableElement.appendChild(footerElem);

      const rowFooterElem = document.createElement('th');
      rowFooterElem.textContent = 'Total Hourly Cookies Sold for All Cities';
      footerElem.appendChild(rowFooterElem);

      let dailyTotalCookies = [];
      for (let h = 0; h < hours.length; h++) {
          let cookieHourlyTotal = 0;
          for (let i = 0; i < Cookiestore.prototype.shopArray.length; i++) {
              let currentStore = Cookiestore.prototype.shopArray[i];
              cookieHourlyTotal += currentStore.cookiesPerHour[h];
          }
          const shopCellElem2 = document.createElement('td');
          shopCellElem2.textContent = `${cookieHourlyTotal}`;
          footerElem.appendChild(shopCellElem2); 
          dailyTotalCookies.push(cookieHourlyTotal);
      }
      let cookieDailyTotal = 0;
      for (let i = 0; i < dailyTotalCookies.length; i++) {
          cookieDailyTotal += dailyTotalCookies[i];
      }
      const shopCellElem3 = document.createElement('td');
      shopCellElem3.textContent = `Ultimate Total: ` + cookieDailyTotal;
      footerElem.appendChild(shopCellElem3);
  }

  renderNewHeader();
  renderActualTable();
  renderFooterTable();




 