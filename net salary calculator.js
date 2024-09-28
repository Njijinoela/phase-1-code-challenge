//calculates the gross salary by adding the basic salary and benefits
//computes Payee and defines nhif and nssf deductions
//calculate total deductions and then net salary

function netsalarycalculator(basicsalary, benefits){
    //constants for deduction and tax rates
    const NHIFdeductions = 850;
    const NSSFdeductionrate = 0.06;
    const NSSFdeductions = basicsalary * NSSFdeductionrate;

    //calculate the gross pay
    const grosspay =basicsalary + benefits;

    //calculate the PAYE
    let payee = 0;
    if (grosspay <= 29000) {
        payee = grosspay * 0.25;
        
    }else if (grosspay <= 40000) {
        payee = 7250 + (grosspay - 29000) * 0.30;
    
    }else {
        payee = 7250 + 10550 + (grosspay - 40000) * 0.325;
    }


//calculate total deductions
const totalDeductions = payee + NHIFdeductions + NSSFdeductions;

// calculate net salary
const netSalary = grosspay -totalDeductions;

return {
    grosspay,
    payee,
    NHIFdeductions,
    NSSFdeductions,
    netSalary
};

}

// prompts the user for the basic salary and benefits then validates the inputs 
// calls the function calculatenetsalary and displays result using alert.
function main() {
    const basicsalaryInput = prompt("Enter your Basic salary");
    const benefitsInput = prompt ("Enter your benefits:");

    const basicsalary = parseFloat(basicsalaryInput);
    const benefits = parseFloat(benefitsInput);

    if (!isNaN(basicsalary) && basicsalary >= 0 && !isNaN(benefits) && benefits >=0) {
        const salaryDetails = netsalarycalculator(basicsalary, benefits);
        alert (`Gross Pay : Kshs. ${salaryDetails.grosspay.toFixed(2)}\n` +
    `PAYE (TAX): Kshs. ${salaryDetails.payee.toFixed(2)}\n` +
   ` NHIF Deduction : Kshs. ${salaryDetails.NHIFdeductions.toFixed(2)}\n` +
   `NSSF Deduction : Kshs. ${salaryDetails.NSSFdeductions.toFixed(2)}\n` +
`Net Salary: Kshs. ${salaryDetails.netSalary.toFixed(2)}`);
    }else {
        alert("Please enter a valid numeric value for Basic salary and benefits");
    }
}
 
main();