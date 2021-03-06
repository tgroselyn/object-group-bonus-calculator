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

//bonus calculator takes data from each employee, calculates their bonus, and spits out new data regarding their bonus percentage, amount, and total compensation
function bonusCalculator(employee){

  //initialize new object
  let employeeBonus = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0,
  }
  
  //if rating is 3, set bonus to 4%
  if ( employee.reviewRating === 3){
    employeeBonus.bonusPercentage = 4;
  
  //else if rating is 4, set bonus to 6%
  } else if( employee.reviewRating === 4){
    employeeBonus.bonusPercentage = 6;
  
  //else if rating is 5, set bonus to 10%
  } else if( employee.reviewRating === 5){
    employeeBonus.bonusPercentage = 10; 
  } 

  //if empl num is 4 digits, add 5% to bonus
  if ( employee.employeeNumber.length === 4 ){
    employeeBonus.bonusPercentage += 5; 
  }

  //if previous salary exceeds 65K, take 1% off bonus
  if ( employee.annualSalary > 65000){
    employeeBonus.bonusPercentage -= 1; 
  }

  //if bonus > 13%, make it 13%
  if ( employeeBonus.bonusPercentage > 13){
    employeeBonus.bonusPercentage = 13; 
  }
  
  //else if bonus < 0%, make it 0%
  else if (employeeBonus.bonusPercentage < 0){
    employeeBonus.bonusPercentage = 0; 
  }

  //set totalBonus to previous salary times bonus percentage
  employeeBonus.totalBonus = employee.annualSalary * (employeeBonus.bonusPercentage / 100);
  
  //set totalCompensation to previous salary plus totalBonus
  employeeBonus.totalCompensation = Number(employee.annualSalary) + employeeBonus.totalBonus; 
  //return object employeeBonus
  return employeeBonus; 
} //end bonusCalculator

//loop through employees array and call bonusCalculator for each employee
for (let employee of employees){
  console.log( bonusCalculator(employee));
};

//manipulating the DOM using jQuery
$(document).ready(readyNow);

//outputToDom outputs the initial employee list to the DOM
function outputToDom() {
//clear out ul's
$('#employeeList1').empty();
$('#employeeList2').empty();
$('#employeeList3').empty();
$('#employeeList4').empty();

  for (let employee of employees) {

    //append each item to its desired ul
    $('#employeeList1').append('<li>' + employee.name + '</li>');
    $('#employeeList2').append('<li>' + employee.employeeNumber + '</li>');
    $('#employeeList3').append('<li>$' + employee.annualSalary + '</li>');
    $('#employeeList4').append('<li>' + employee.reviewRating + '</li>');
  }
} //end outputToDom

//outputBonusToDom runs the bonusCalculator and outputs its results to the DOM
function outputBonusToDom() {

  //clear out ul's
  $('#bonusList1').empty();
  $('#bonusList2').empty();
  $('#bonusList3').empty();
  $('#bonusList4').empty();
  
  for (let employee of employees) {
    //run bonus calculator
    let empBonusInfo = bonusCalculator(employee);

    //append each item to its desired ul
    $('#bonusList1').append('<li>' + empBonusInfo.name + '</li>');
    $('#bonusList2').append('<li>' + empBonusInfo.bonusPercentage + '% </li>');
    $('#bonusList3').append('<li>$' + empBonusInfo.totalBonus + '</li>');
    $('#bonusList4').append('<li>$' + empBonusInfo.totalCompensation + '</li>');
  }
} //end outputBonusToDom

function readyNow() {
  console.log('jquery loaded')
  
  outputToDom();
  $('#calcButton').on('click', outputBonusToDom);
}