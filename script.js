function calculateAge(dob,currentdob){
const result = document.getElementById('result');
const dobb = new Date(dob);
const currentdobb = new Date(currentdob);

console.log(currentdob);

let ageYears = currentdobb.getFullYear() - dobb.getFullYear();
let ageMonth = currentdobb.getMonth() - dobb.getMonth();
let ageDay = currentdobb.getDate() - dobb.getDate();
console.log(ageDay);

if(ageYears < 0){
  result.textContent = `Age can't be negative`;
  return;
}
else if(ageMonth < 0){
  ageYears -= 1;
  ageMonth += 12;
  return {
    years: ageYears,
    months: ageMonth,
    days: ageDay
  };

}
else if(ageDay < 0){
  ageMonth -= 1;
  if(ageMonth <= 1){
    if(currentdobb.getDate() < dobb.getDate()){
      ageYears -= 1;
      ageMonth += 12;
      ageDay += 30;
    }
    else{
      return {
        years: ageYears,
        months: ageMonth,
        days: ageDay
      };
    }
  }
  return {
    years: ageYears,
    months: ageMonth,
    days: ageDay
  };

}


return {
  years: ageYears,
  months: ageMonth,
  days: ageDay
};
}

  function displayAge(){
  const dob = document.getElementById('dob').value;
  const currentdob = document.getElementById('current').value;
  const result = document.getElementById('result');

  const age = calculateAge(dob,currentdob);

  if(!dob || !currentdob){
    result.textContent = `Please Select both Dates`;
    return;
  }

  result.textContent = `Age: ${age.years} years, ${age.months} months, ${age.days} days`;
};