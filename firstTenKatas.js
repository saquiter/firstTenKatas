  //Make a function that does arithmetic! 7 kyu
  function arithmetic(a, b, operator){
    if(operator === "add") {
      return a+b;
    }
    if(operator === "divide"){
     return a/b;
    }
    if(operator === "multiply"){
      return a*b;
    }
    if(operator ==="subtract"){
     return a-b;
    }
    else{
      return false;
    }
  }
  //Remove the minimum 7 kyu
  function removeSmallest(numbers) {
  numbers = numbers.slice(); //copy the array
  numbers.splice( numbers.indexOf(Math.min.apply(null,numbers)),1)
  return numbers;
  }
  //Highest and Lowest 7 kyu
  function highAndLow(numbers){
    let s = numbers.split(" ");
    let summ = "";
    summ+=Math.max.apply(null , s) + " " + Math.min.apply(null , s)
    return summ;
  }
  //Who likes it? 6 kyu 
  function likes(names) {
    let like = "likes this";
    let likes = "";
      if(names.length === 1){
      return likes+= names + " " + like;
      }
      if(names.length === 2){
      return likes+=names[0] + " and " + names[1] + " like this";
      }
      if(names.length === 3){
      return likes+=names[0] + "," + " " + names[1] + " and " + names[2] + ' like this';
      }
      if(names.length >= 4){
      return likes+= names[0] +"," + " " + names[1] + " and " + (names.length - 2) + " others like this"
      }
      if(names.length === 0){return "no one likes this"};
    }
  //Mexican Wave 6 kyu
  function wave(str){
    let res = [];
    for(let i = 0; i < str.length;i++){
      if(str[i] != " "){
         res.push(str.slice(0 , i) + str[i].toUpperCase() + str.slice(i + 1));
      }
    }
    return res;
  }
  //Sum of two lowest positive integers 7 kyu
  function sumTwoSmallestNumbers(numbers) {  
    var ordered = numbers.sort(function(a,b){return a-b;});
    var result=0;
    
    for(i=0; i<ordered.length; i++){
      if(i==0){
        result+=ordered[0];
      }
      if(i==1){
        result+=ordered[1];
      }
    }
    return result;
  }
  //Shortest Word 7 kyu
  function findShort(s){
    let e = String(s).split("").join("");
    let q = String(e).split(" ");
    return Math.min(...(q.map(el => el.length)));
    }
  //Create Phone Number 6 kyu
  function createPhoneNumber(numbers){
    let phoneNum = "";
    let firstPeace,
    secondPeace,
    thirdPeace;
    let string = String(numbers).split(",").join("");
    firstPeace = String(string).slice(0 , 3 );
    secondPeace = String(string).slice(3,6);
    thirdPeace = String(string).slice(6 , 10);
    phoneNum += `(${firstPeace}) ${secondPeace}-${thirdPeace}`;
    if(numbers === ""){
    return false;
    }
    else{
    return phoneNum;
  }
}
  //Friend or Foe? 7kyu
  function friend(friends){
    return friends.filter(item => item.length === 4);
  }
  //Descending Order 7kyu
  function descendingOrder(n){
    let s = new String(n);
    let d = s.split("").sort().reverse();
    let a = d.join("");
    return parseInt(a);
  }