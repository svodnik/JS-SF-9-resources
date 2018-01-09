function createTaxCalculator(rate) {
  const taxRate = rate;
  function calcTax(value) {
    let tax = value * taxRate;
    let total = value + tax;
    console.log('Tax: $' + tax.toFixed(2));
    console.log('Total: $' + total.toFixed(2));
  }
  return calcTax;
}
const calcSFTax = createTaxCalculator(0.085);
calcSFTax(100); 
const calcOaklandTax = createTaxCalculator(0.0925);
calcOaklandTax(100);