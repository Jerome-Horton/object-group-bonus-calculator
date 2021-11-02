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

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// declared function that takes in one **Employee**
// object (as an argument to the function), and returns a new **object**

for ( let aEmployee of employees ){
  getEmployeeBonus(aEmployee);
  console.log(getEmployeeBonus(aEmployee));
}

 function getEmployeeBonus(aEmployee){  
  //create a new object
   let employeeCompensation = {
    name: aEmployee.name,
    bonusPercentage: bonusPercentage
    // totalCompensation:
    // totalBonus:
  } 

  let bonusPercentage = {
    if (aEmployee.reviewRating < 3){
      return 'no bonus'
    }
  }

  return employeeCompensation;
}




//   employeeCompensation.employees.name;
//   employeeCompensation.employees.employeeNumber;
//   employeeCompensation.employees.annualSalary;
//   employeeCompensation.employees.reviewRating;
// }; 

  
//   return aEmployee;
//  }


 
// console.log(getEmployeeBonus(employees));

//Jerome and Yasir worked on this


