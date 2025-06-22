
$(".banner_slider").slick({
  'arrows': false,
  'autoplay': true
});
var navLinks = document.getElementById('navLinks');
function showMenu() {
  navLinks.style.left = '0%';
  navLinks.style.boxShadow = "0px 1px 20px rgba(0,0,0,0.4)";
}
function hideMenu() {
  navLinks.style.left = "-90%";
  navLinks.style.boxShadow = "0px 1px 20px rgba(0,0,0,0.0)";
}
let numb = document.forms.myForm.num;
function valid() {
  return numb.value == '' ? (alert("Number field cannot be empty"), false) : numb.value == '29SB9218' || numb.value == "30SB9222" || numb.value == "31SB9224" || numb.value == "32SB9226" || numb.value == "33SB9228" || numb.value == "34SB9230" || numb.value == '123SIG65' || numb.value == "GHO225A8" || numb.value == "TAS67A2Q" || numb.value == "AQF202S8" || numb.value == "REB142AA" || numb.value == 'JUG333A3' || numb.value == "RGA202A2" || numb.value == 'DAD101Q0' || numb.value == "SUL445QS" || numb.value == "JEM667PP" || numb.value == "PAM339PS" || numb.value == 'GAL545ZE' || numb.value == 'DAS888B2' || numb.value == "BBO567AE" || numb.value == "CON939GE" || numb.value == "REQ343HN" || numb.value == "CNN115KK" || numb.value == "JAQ869SE" || numb.value == "YAN992SO" || numb.value == "YAS442TP" || numb.value == "LIO900SE" || numb.value == "SIC664SC" || numb.value == "TAL112TA" || numb.value == "JIB190YE" || numb.value == 'EES389PE' || numb.value == "UAE323CB" || numb.value == "BAN536CN" || numb.value == "BBC290BF" || numb.value == "KIN395UN" || numb.value == "BBB555BS" || numb.value == "PWE555CP" || numb.value == "PAS043PQ" || numb.value == 'RAN123MX' || numb.value == "BOD942SX" || numb.value == "MAQ125QS" || numb.value == "UYE333PN" || numb.value == 'DEF084RT' || numb.value == 'POP303HG' || numb.value == "LEC000QW" || numb.value == "PFL333YS" || numb.value == "EYS874XX" || numb.value == 'UAX987ZZ' || numb.value == "JEQ340PQ" || numb.value == "KAL399FR" || numb.value == 'MWQ899VT' || numb.value == "295B9218" || numb.value == '335B9228' || numb.value == 'AQF20258' || numb.value == 'AQF20258'|| 
  numb.value == '7X530Z7M'|| 
  numb.value == 'RFR30Z7M'||
  numb.value == '7Q930FNT'||
  numb.value == 'GH0225A8'||
  numb.value == '0S930J7M'||
  numb.value == '2B930B7M'||
  numb.value == '2B93OB7M'||
  numb.value == '4S930X7X'||
  numb.value == '4S93OX7X'||
  numb.value == '74430Z7M'||
  numb.value == '42932Z7M'||
  numb.value == '7AAA0Z7M' ?(document.getElementById("demo").innerHTML = "আপনার পণ্য টি অরিজিনাল<img src='./img/verify.png'>", false) : (document.getElementById("demo").innerHTML = "আপনার পণ্য টি অরিজিনাল না<img src='./img/notverify.png'>", false);
  return true;
}
window.addEventListener("scroll", function () {
  var _0x1278d2 = document.querySelector(".fa-chevron-up");
  _0x1278d2.classList.toggle('arrowUp', window.scrollY > 0x1f4);
});
 

 