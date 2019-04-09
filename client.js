const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

function bonusCalculator(employee){

  let employeeBonus = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0,
  }
  
  if ( employee.reviewRating === 3){
    employeeBonus.bonusPercentage = 4;
  
  } else if( employee.reviewRating === 4){
    employeeBonus.bonusPercentage = 6;
  
  } else if( employee.reviewRating === 5){
    employeeBonus.bonusPercentage = 10; 
  } 

  if ( employee.employeeNumber.length === 4 ){
    employeeBonus.bonusPercentage += 5; 
  }

  if ( employee.annualSalary > 65000){
    employeeBonus.bonusPercentage -= 1; 
  }

  if ( employeeBonus.bonusPercentage > 13){
    employeeBonus.bonusPercentage = 13; 
  } else if (employeeBonus.bonusPercentage < 0){
    employeeBonus.bonusPercentage = 0; 
  }

  employeeBonus.totalBonus = employee.annualSalary * (employeeBonus.bonusPercentage / 100);
  employeeBonus.totalCompensation = Number(employee.annualSalary) + employeeBonus.totalBonus; 

  return employeeBonus; 
}

for ( employee of employees){

  console.log( bonusCalculator(employee));

}; 
