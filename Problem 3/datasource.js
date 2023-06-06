class Price {
    constructor(pair, buy, sell) {
        this.pair = pair;
        this.buy = buy;
        this.sell = sell;
    }

    mid() {
        return (this.buy + this.sell) / 2;
    }

    quote() {
        return this.pair.slice(-3);
    }
}

class Datasource {
    constructor(url) {
        this.url = url;
    }

    getPrices() {
        return fetch(this.url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.data.prices);
                return data.data.prices.map(
                    (price) => new Price(price.pair, price.buy, price.sell)
                );
            })
            .catch((error) => {
                throw new Error(error);
            });
    }
}
//How the code is used:
//ds.getPrices()
// .then(prices => {
//     prices.forEach(price => {
//         console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
//     });
// }).catch(error => {
//     console.err(error);
// });

// function fetchData() {
//     var ds = new Datasource("https://interview.switcheo.com/test.json");
//     var field = document.getElementById("fetchedData");
//     field.textContent = "Fetched";
//     ds.getPrices()
//         .then((prices) => {
//             prices.forEach((price) => {
//                 console.log(
//                     `Mid price for ${
//                         price.pair
//                     } is ${price.mid()} ${price.quote()}.`
//                 );
//             });
//         })
//         .catch((error) => {
//             console.err(error);
//         });
// }
