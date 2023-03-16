var amountOfBooks = 100;

function bookOfPurchasing(amountOfStocks, amountOfPurchasedBooks){
    let amount = 0;
    let stokhabis = false;
    for(let i = 1; i<= amountOfPurchasedBooks; i++){
        if(amountOfStocks <= amount){
            stokhabis = true;
            break;
        }else{
            amount += 1;
        }
    }
    if(stokhabis == false){
        console.log(`Buku dibeli sejumlah ${amountOfPurchasedBooks}`)
        console.log(`Buku tersisa : ${amountOfStocks - amountOfPurchasedBooks}`);
        amountOfBooks -= amountOfPurchasedBooks;
       
    }else{
        console.log(`Buku hanya dapat dibeli sejumlah ${amount} dari ${amountOfPurchasedBooks} yang dipesan`)
        console.log(`Buku telah habis`);
        amountOfBooks = 0;
    }
}

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(bookOfPurchasing(6,5));
}).listen(8080);
