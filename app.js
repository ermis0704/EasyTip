
const currencyChange = () => {
  const currency = document.querySelectorAll('.currency');
  switch(document.getElementById('currencies').value) {
    case '$':
      currency.forEach(cur => {cur.innerHTML = '$'})
      break;
    case 'HK$':
      currency.forEach(cur => {cur.innerHTML = 'HK$'});
      break;
    case '€':
      currency.forEach(cur => {cur.innerHTML = '€'});
      break;
  }
}

const formatMoney = (val) =>{
  val = Math.ceil(val * 100) / 100;
  return val;
}

const update = () => {
  let bill = Number(document.getElementById('bill').value);
  let tipInput = document.getElementById('tipInput').value;
  let ppInput = document.getElementById('ppInput').value;

  let tip = bill * tipInput / 100;
  let total = bill + tip;
  // let billEach = bill / ppInput;
  // let tipEach = tip / ppInput;
  // let totalEach = total / ppInput;

  document.getElementById('tipPercent').innerHTML = tipInput;
  document.getElementById('tip').innerHTML = formatMoney(tip);
  document.getElementById('total').innerHTML = total;
  document.getElementById('people').innerHTML = ppInput;
  document.getElementById('billEach').innerHTML = formatMoney(bill / ppInput);
  document.getElementById('tipEach').innerHTML = formatMoney(tip / ppInput);
  document.getElementById('totalEach').innerHTML = formatMoney(total / ppInput);

  if(ppInput > 1) {
    document.getElementById('person').innerHTML = 'people';
  }


}

let container = document.getElementById('container');
container.addEventListener('input', update);
let currencies = document.getElementById('currencies');
currencies.addEventListener('click', currencyChange);