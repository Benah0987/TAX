function calculateNetSalary() {
    // Retrieve form values
    const pensionContribution = Number(document.getElementById("pensionContribution").value);
    const nhifDeduction = Number(document.getElementById("nhifDeduction").value);
    const housingRelief = Number(document.getElementById("housingRelief").value);
    const ownerInterest = Number(document.getElementById("ownerInterest").value);
    const disabilityExemption = Number(document.getElementById("disabilityExemption").value);
  
    // Retrieve PAYE parameters
    const personalRelief = 2400;
    const insuranceRelief = 5000;
    const allowablePensionContribution = 20000;
    const allowableHospContribution = 0;
    const affordableHousingRelief = 9000;
    const allowableOwnerOccupierInterest = 25000;
    const monthlyTaxablePay = calculateMonthlyTaxablePay();
  
    // Calculate PAYE
    let paye = 0;
    if (monthlyTaxablePay <= 24000) {
      paye = monthlyTaxablePay * 0.1;
    } else if (monthlyTaxablePay <= 32333) {
      paye = 2400 + (monthlyTaxablePay - 24000) * 0.25;
    } else {
      paye = 6008.25 + (monthlyTaxablePay - 32333) * 0.3;
    }
  
    // Calculate net salary
    const grossSalary = monthlyTaxablePay + personalRelief + insuranceRelief + pensionContribution + nhifDeduction + housingRelief + ownerInterest + disabilityExemption;
    const taxableIncome = monthlyTaxablePay - allowablePensionContribution - nhifDeduction - allowableHospContribution - paye - affordableHousingRelief - allowableOwnerOccupierInterest - personalRelief - insuranceRelief;
    const netSalary = grossSalary - paye;
  
    // Display net salary
    document.getElementById("netSalary").innerHTML = `Your net salary is KES ${netSalary.toFixed(2)} per month.`;
  
    function calculateMonthlyTaxablePay() {
      // Assume a fixed gross salary of KES 100,000 per month
      const grossSalary = 100000;
  
      // Calculate non-taxable income
      const nonTaxableIncome = personalRelief + insuranceRelief + allowablePensionContribution + allowableHospContribution + affordableHousingRelief + allowableOwnerOccupierInterest + disabilityExemption;
  
      // Calculate taxable income
      const taxableIncome = grossSalary - nonTaxableIncome;
  
      // Calculate monthly taxable pay
      const monthlyTaxablePay = taxableIncome / 12;
  
      return monthlyTaxablePay;
    }
  }
  