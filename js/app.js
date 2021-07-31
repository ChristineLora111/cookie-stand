'use strict'
// for Seattle:
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let listOfCookies = document.getElementById('cookietest');

function Cookiestore (location, min, max, avg) {
    this.location = location;
    this.min = min; 
    this.max = max; 
    this.avg = avg; 
    this.customers = [];
    this.cookiesPerHour = [];
    this.cookiesTotal = 0;
    this.getRandomNumber = function(min,max) {
      let cookieCustomerArray = [];
      for (let i = 0; i < hours.length; i++) {
        let cookeCustomer = Math.floor(((Math.random() * (max - min)) + min) + 1);
        cookieCustomerArray.push(cookeCustomer);
      }
    this.customers = Array.from(cookieCustomerArray);
    console.log(this.customer);
    };
    this.getCustPerHour = function() {
        let cookieArray = [];
        for (let i = 0; i < this.customer.length; i++) {
          cookieArray.push(Math.floor(this.customer[i] * this.avg))
        }
        this.hour = Array.from(cookieArray);
      };
    this.getTotalCookies = function() {
      let cookie = 0;
      for (let i = 0; i < this.perHour.length; i++) {
        cookie += this.perHour[i];
      }
      this.cookieTotal = cookie;
    };
    this.callUponAll = function() {
      this.getRandomNumber(min,max);
      this.getCustPerHour();
      this.getTotalCookies();
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



  // ----------------------

let seattle = {
        name: 'Seattle',
        min: 23,
        max: 65,
        avg: 6.3,
    
        getRandomCustomer: function() {
            return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);    
        },
        cookiesPurchased: function() {
            return Math.ceil(this.getRandomCustomer()*this.avg);
        },
        render: function() {
            let seattleHeader = document.createElement('h3');
            seattleHeader.textContent = 'Seattle Cookies Sold by the Hour';
            listOfCookies.appendChild(seattleHeader);

            let ul = document.createElement('ul');

            listOfCookies.appendChild(ul);

            let total = 0;
            for (let i = 0; i < hours.length; i++) {
                let seattleCookiesSold = seattle.cookiesPurchased();
                let li = document.createElement('li');
                li.textContent = `${hours[i]}: ${seattleCookiesSold} cookies`;
                ul.appendChild(li);
                total = total + seattleCookiesSold;
                console.log(seattleCookiesSold);
        }
        let li = document.createElement('li');
        li.textContent = `Total cookies: ${total}`;
        ul.appendChild(li); 
    }
} 

seattle.render();

// for Tokyo:

let tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,

    getRandomCustomer: function() {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
    },
    cookiesPurchased: function() {
        return Math.ceil(this.getRandomCustomer()*this.avg);
    },
    render: function() {
        let tokyoHeader = document.createElement('h3');
        tokyoHeader.textContent = 'Tokyo Cookies Sold by the Hour';
        listOfCookies.appendChild(tokyoHeader);

        let ul = document.createElement('ul');

        listOfCookies.appendChild(ul);

        let total = 0;
        for (let i = 0; i < hours.length; i++) {
            let tokyoCookiesSold = tokyo.cookiesPurchased();
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${tokyoCookiesSold} cookies`;
            ul.appendChild(li);
            total = total + tokyoCookiesSold;
            console.log(tokyoCookiesSold);
        }
        let li = document.createElement('li');
        li.textContent = `Total cookies: ${total}`;
        ul.appendChild(li);
    }

}

tokyo.render(); 

// for Dubai

let dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,

    getRandomCustomer: function() {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    cookiesPurchased: function() {
        return Math.ceil(this.getRandomCustomer()*this.avg);
    }, 
    render: function() {
        let dubaiHeader = document.createElement('h3');
        dubaiHeader.textContent = 'Dubai Cookies Sold by the Hour';
        listOfCookies.appendChild(dubaiHeader);

        let ul = document.createElement('ul');

        listOfCookies.appendChild(ul);

        let total = 0;
        for (let i = 0; i < hours.length; i++) {
            let dubaiCookiesSold = dubai.cookiesPurchased(); 
            let li = document.createElement('li'); 
            li.textContent = `${hours[i]}: ${dubaiCookiesSold} cookies`;
            ul.appendChild(li);
            total = total + dubaiCookiesSold;
            console.log(dubaiCookiesSold);
        }
    let li = document.createElement('li');
    li.textContent = `Total cookies: ${total}`;
    ul.appendChild(li);

    }
}

dubai.render(); 

// for Paris: 20, 38, 2.3

let paris = {
    name: 'Paris',
    min: 20,
    max: 38, 
    avg: 2.3, 

    getRandomCustomer: function() {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
    },
    cookiesPurchased: function() {
        return Math.ceil(this.getRandomCustomer() * this.avg); 
    },
    render: function() {
        let parisHeader = document.createElement('h3');
        parisHeader.textContent = 'Paris Cookies Sold by the Hour';
        listOfCookies.appendChild(parisHeader);

        let ul = document.createElement('ul'); 

        listOfCookies.appendChild(ul);

        let total = 0;
        for (let i = 0; i < hours.length; i++) {
            let parisCookiesSold = this.cookiesPurchased();
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${parisCookiesSold} cookies`;
            ul.appendChild(li);
            total = total + parisCookiesSold;
            console.log(parisCookiesSold);
        }
    let li = document.createElement('li');
    li.textContent = `Total cookies: ${total}`;
    ul.appendChild(li);
    }
}

paris.render();

// for Lima: 2, 16, 4.6

let lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,

    getRandomCustomer: function() {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    cookiesPurchased: function() {
        return Math.ceil(this.getRandomCustomer() * this.avg);
    },
    render: function() {
        let limaHeader = document.createElement('h3');
        limaHeader.textContent = 'Lima Cookies Sold by the Hour';
        listOfCookies.appendChild(limaHeader);

        let ul = document.createElement('ul');

        listOfCookies.appendChild(ul);

        let total = 0
        for (let i = 0; i < hours.length; i++) {
            let limaCookiesSold = this.cookiesPurchased();
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${limaCookiesSold} cookies`;
            ul.appendChild(li);
            total = total + limaCookiesSold;
            console.log(limaCookiesSold);
        }
    let li = document.createElement('li');
    li.textContent = `Total cookies: ${total}`;
    ul.appendChild(li);
    }
}

lima.render(); 