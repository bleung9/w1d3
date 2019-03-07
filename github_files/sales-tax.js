var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  let output = {};
  for (i = 0; i < salesData.length; i++) {
    let prov = salesData[i].province;
    let rate = salesTaxRates[prov];
    let companyName = salesData[i].name;
    let tax = 0;
    let sales = 0;
    if (output[companyName]) {
      sales = output[companyName].totalSales;
      tax = output[companyName].totalTaxes;
    }
    else { output[companyName] = {} };
    let arrOfSales = salesData[i].sales;
    arrOfSales.forEach(function(element) {
      tax += element * rate;
      sales += element;
    });
    output[companyName].totalSales = sales;
    output[companyName].totalTaxes = tax;
  }
  return output;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/