function calculateNssfDeduction() {
    const pensionablePay = document.getElementById("pensionable-pay").value;
    const tier = document.getElementById("tier").value;
    let employeeContribution = 0;
    let employerContribution = 0;
    
    if (pensionablePay <= 6000) {
        employeeContribution = pensionablePay * 0.06;
        employerContribution = pensionablePay * 0.06;
    } else if (pensionablePay > 6000 && pensionablePay <= 18000 && tier == 2) {
        employeeContribution = 360;
        employerContribution = 360;
    } else {
        employeeContribution = 180;
        employerContribution = 180;
    }
    
    const nssfDeduction = employeeContribution + employerContribution;
    document.getElementById("result").innerHTML = `NSSF Deduction: Ksh${nssfDeduction}`;
  }