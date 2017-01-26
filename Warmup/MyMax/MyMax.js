function my_max(){
  var myArray = [91, 2, 34, 84, 55, 61, 57, 680, 29, 10];
  myArray.sort(sortNumber);
  var biggestNum = myArray[myArray.length-1];
  alert(biggestNum);
}

function sortNumber(a,b){
  return a-b;
}
