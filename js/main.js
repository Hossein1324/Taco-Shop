const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear;

function mood () {
    document.getElementById('darkmood').classList.toggle('bgcolor');
};
let price = 0;
function reset(){
    price=0;
    document.querySelector('.yourprice').innerHTML = `${price}$`;
}

function  yourprice1() {
   const g = document.querySelector('.yourprice');
   price = price+2;
    g.innerHTML = `${price} $`
}


function  yourprice2() {
    const g = document.querySelector('.yourprice');
    price = price+2.50;
     g.innerHTML = `${price} $`
 }

 function  yourprice3() {
    const g = document.querySelector('.yourprice');
    price = price+3.25;
     g.innerHTML = `${price} $`
 }

 
function  yourprice1s() {
    const g = document.querySelector('.yourprice');
    price = price+2;
     g.innerHTML = `${price} $`
 }
 
 function  yourprice2s() {
     const g = document.querySelector('.yourprice');
     price = price+3.50;
      g.innerHTML = `${price} $`
  }
 
  function  yourprice3s() {
     const g = document.querySelector('.yourprice');
     price = price+4.50;
      g.innerHTML = `${price} $`
  }
     
