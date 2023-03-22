// A function to calculate NHIF deduction based on gross pay
function calculateNhifDeduction() {

    // An array of NHIF rates based on gross pay
    const nhifRates = [
      { min: 0, max: 5999, rate: 150 },
      { min: 6000, max: 7999, rate: 300 },
      { min: 8000, max: 11999, rate: 400 },
      { min: 12000, max: 14999, rate: 500 },
      { min: 15000, max: 19999, rate: 600 },
      { min: 20000, max: 24999, rate: 750 },
      { min: 25000, max: 29999, rate: 850 },
      { min: 30000, max: 34999, rate: 900 },
      { min: 35000, max: 39999, rate: 950 },
      { min: 40000, max: 44999, rate: 1000 },
      { min: 45000, max: 49999, rate: 1100 },
      { min: 50000, max: 59999, rate: 1200 },
      { min: 60000, max: 69999, rate: 1300 },
      { min: 70000, max: 79999, rate: 1400 },
      { min: 80000, max: 89999, rate: 1500 },
      { min: 90000, max: 99999, rate: 1600 },
      { min: 100000, max: Infinity, rate: 1700 },
    ];
  
    // Get the gross pay entered by the user
    const grossPay = Number(document.getElementById('gross-pay').value);
  
    // Set the initial deduction amount to zero
    let deduction = 0;
  
    // Iterate through the NHIF rates array to find the correct rate based on gross pay
    for (let i = 0; i < nhifRates.length; i++) {
      const { min, max, rate } = nhifRates[i];
      if (grossPay >= min && grossPay <= max) {
        deduction = rate;
        break;
      }
    }
  
    // Display the result on the HTML page
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your NHIF deduction is Ksh ${deduction}.`;
  }
  