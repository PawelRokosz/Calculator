function vowel_count(myStr){
  var strLowerCase = myStr.toLowerCase();
  var myArray = strLowerCase.split("");
  var vowels = 'aeiouy';
  var vowelSum = 0;

  for(var i = 0; i < myArray.length ; i++){
    if (vowels.indexOf(myArray[i]) !== -1){
      vowelSum += 1;
    }
  }

  return vowelSum;
}
alert(vowel_count("aaaaAEe"));
