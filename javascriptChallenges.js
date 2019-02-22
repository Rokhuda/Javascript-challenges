//challenge 1

function check65(a,b){
if ((a == 65)||(b==65)){
  return true
} else if (a+b == 65){
  return true;
}
  else {
  return false;}
}
console.log(check65(65,40));

//challenge 2

function triangle(){
var a = 7;
var b = 8;
var c = 9;
var s = ( a + b + c )/2;
var area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));
return area;
}
console.log(triangle());

//challenge 3

function largest() {
    let num1 = (prompt('Enter a number'));
    let num2 = (prompt('Enter a number'));
    let num3 = (prompt('Enter a number'));
    var large = Math.max(num1, num2, num3);
    return large
  }
    console.log(largest());

// Challenge 4
var num = prompt( "Enter a number");

function time_convert()
 {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + ":" + minutes;
}

console.log(time_convert());

//challenge 5
function commonWord(word1, word2)
{
    var one = word1
    var two = word2
    var result = [];
    for (var i = 0;i< one.length; i++)
    {
        if (word1.indexOf(one[i]) !== -1 && result.indexOf(one[i]) === -1)
            {
            result.push(one[i]);
        }
}
 return result.join("");
}
console.log(commonWord("zaziwe","zawaziwa"));
