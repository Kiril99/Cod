// var word = prompt("input your word");
// var code="";
// for (var i = 0; i < word.length; i++) {
//   var codepoint = word[i].charCodeAt();
//   codepoint += 3;
//   code+= String.fromCharCode(codepoint)
// }
// alert(code);

var word = prompt("input your word");
var code="";
var sum=Number (prompt("Введит число:"));
for (var i = 0; i < word.length; i++) {
  var codepoint = word[i].charCodeAt();
  codepoint -= sum;
  code+= String.fromCharCode(codepoint)
}
alert(code);