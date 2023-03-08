function tax(price, tax){
  if (price>20000){
  return price*(1+tax/100)
  }
  else {
    return 0;
  }
} 

function discount(price, discount){
  
  if(price>20000){ 
    checkPrice = 1;
  }
  if (Boolean(checkPrice)){
  
  return price*(1-discount/100)
  }
  else { 
    return price
  }
}


function tax(price, tax){
  return price*(1+tax/100)
}


let bookName ="Sunrise Of The Moon";
const price = 100000
const taxValue = 5
const discountValue = 20
var checkPrice=0;
function sentences(){
    return `
Book Title : ${bookName}

Amount of discount : ${discountValue}% 

Price after discount : ${discount(price,discountValue)} Rupiah

Amount of tax : ${taxValue}

Price after tax : ${tax(price,taxValue)}
`
}


var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(sentences());
}).listen(8080);