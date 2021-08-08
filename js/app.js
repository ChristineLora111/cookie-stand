'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let listOfCookies = document.getElementById('cookie store');

function CookieStore (location, min, max, avg) {
    this.location = location;
    this.min = min; 
    this.max = max; 
    this.avg = avg; 
    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.cookiesTotal = 0;

    this.getRandomNumber = function(min,max) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return randomNumber;
    };

    this.renderCustomerPerHour = function(){
        for (let i = 0; i < hours.length; i++) {
          let num = this.getRandomNumber(this.min, this.max)
          this.customersPerHour.push(num);
        }

    };

    this.renderCookiesPerHour = function() {
        for (let i = 0; i < this.customersPerHour.length; i++) {
            let num = Math.floor(this.customersPerHour[i] * this.avg);
            this.cookiesTotal += num;
          this.cookiesPerHour.push(num);
        }

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
        }
        this.callUponAll();
        this.shopArray.push(this);
        console.log(this.shopArray);
    }

  CookieStore.prototype.shopArray = [];
  
  const seattle = new CookieStore('Seattle', 23, 65, 6.3);
  const tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
  const dubai = new CookieStore('Dubai', 11, 38, 3,7);
  const paris = new CookieStore('Paris', 20, 38, 2.3);
  const lima = new CookieStore('Lima', 2, 16, 0.6);
  
  // Start of table: 
  // -----------------------------------------------------------
  const tableCookies = document.getElementById('cookie store')

  const newTableCookies = document.createElement('table');
  tableCookies.appendChild(newTableCookies);

  function renderNewHeader() {
    const rowHeader = document.createElement('tr');
    newTableCookies.appendChild(rowHeader);

    const rowCellHeader= document.createElement('th');
    newTableCookies.appendChild(rowCellHeader);

    for (let i = 0; i < hours.length; i++) {
        const rowCellHeader = document.createElement('th');
        rowCellHeader.textContent = hours[i];
        newTableCookies.appendChild(rowCellHeader); 
    }
};

function renderActualTable() {
    for (let i = 0; i < CookieStore.prototype.shopArray.length; i++) {
        let actualShop = CookieStore.prototype.shopArray[i];
        const shopTableElem = document.createElement('tr');
        newTableCookies.appendChild(shopTableElem);

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
        newTableCookies.appendChild(footerElem);

        const rowFooterElem = document.createElement('th');
        rowFooterElem.textContent = 'Total Hourly Cookies: ';
        footerElem.appendChild(rowFooterElem);

        let dailyTotalCookies = [];
        for (let h = 0; h < hours.length; h++) {
            let cookieHourlyTotal = 0;
            for (let i = 0; i < CookieStore.prototype.shopArray.length; i++) {
                let currentStore = CookieStore.prototype.shopArray[i];
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


  let cookieForm = document.getElementById('cookieForm');

  function handleSubmit(event) {
      event.preventDefault();
    let cookieLocation = event.target.cookieLocation.value;
    let cookieMin = +event.target.cookieMin.value;
    let cookieMax = +event.target.cookieMax.value;
    let cookieAvg = +event.target.cookieAvg.value;
  
  new CookieStore (
      cookieLocation,
      cookieMin,
      cookieMax,
      cookieAvg,
  );

    newTableCookies.innerHTML = '';
    renderNewHeader();
    renderActualTable();
    renderFooterTable();
    clearAllForm();

    function clearAllForm () {
        event.target.cookieLocation.value = null;
        event.target.cookieMin.value = null;
        event.target.cookieMax.value = null;
        event.target.cookieAve.value = null;
    }
  }
  
  cookieForm.addEventListener('submit', handleSubmit);


