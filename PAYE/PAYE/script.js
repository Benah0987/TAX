function calculate() {
    // Get input values
    const basicSalary = parseFloat(document.getElementById('basic_salary').value);
    const benefits = parseFloat(document.getElementById('benefits').value);
  
    // Calculate taxable pay
    const taxablePay = basicSalary + benefits;
  
    // Calculate annual taxable pay
    const annualTaxablePay = taxablePay * 12;
  
    // Calculate total relief
    const totalRelief = 2400 + 5000 + 9000;
  
    // Calculate chargeable pay
    const chargeablePay = annualTaxablePay - totalRelief;
  
    // Calculate tax based on PAYE rates
    let tax = 0;
    if (chargeablePay > 0 && chargeablePay <= 288000) {
      tax = chargeablePay * 0.1;
    } else if (chargeablePay > 288000 && chargeablePay <= 388000) {
      tax = 24000 + (chargeablePay - 288000) * 0.25;
    } else if (chargeablePay > 388000) {
      tax = 39000 + (chargeablePay - 388000) * 0.3;
    }
  
    // Calculate monthly PAYE tax
    const monthlyTax = tax / 12;
  
    // Display monthly PAYE tax
    document.getElementById('payee_tax').value = monthlyTax.toFixed(2);
  }
  