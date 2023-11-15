function myfun(){
    var day,month,year;
    day = (document.getElementById("DAY").value);
    month =(document.getElementById("MONTH").value);
    year = (document.getElementById("YEAR").value);
    if (day =="" || month=="" || year==""){
         console.log('ht');
         error();
    }
  else{
    day=parseInt(day);
    month=parseInt(month);
    year=parseInt(year);
  if(day>31){
  errors(0);
   }
   else if(day>30 &  (month%2)){
    errors(0);
   }
   else if(month>12){
     errors(1)
   }
  else if(year<1850 && year>3000){
    errors(2)
   }
   else{
    date(day,month,year);
   }
  }
  
}
function red(){
  console.log('red');
    const input = document.querySelectorAll('input');
    const label = document.querySelectorAll('label');
    for (let i=0;i<input.length;i++){
    input[i].style.border='1px solid red'; 
    for (let i=0;i<label.length;i++){
    label[i].style.color='red';
  }
}
}
  function error(){
    red();
    console.log('hi');
    const nodeList = document.querySelectorAll("#error");
    for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].innerHTML =   "This field is required";
  }
  }
  
  function errors(i){
    red();
    document.getElementsByTagName("span")[i].innerHTML = "Must be Valid"
  }

  function date(day,month,year){
    
    const date = new Date();
    console.log(date); 
    let day1 = date.getDate();
    let month1 = date.getMonth() + 1;
    let year1 = date.getFullYear();
    if(year>year1){
      errors(2);
    }
    if(day>day1){
      month1 = month1-1;
      day1 = day1+31;
    }
    if(month>month1){
      year1 = year1-1;
      month1 = month1+12;
    }
    document.getElementById('days').innerHTML = day1 - day;
    document.getElementById('months').innerHTML = month1 - month;
    document.getElementById('years').innerHTML = year1 - year;
  }