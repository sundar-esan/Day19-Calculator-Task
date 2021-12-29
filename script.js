//creating table element
var table=document.createElement('table')
table.style.height="250px";
table.style.width="280px";
table.style.direction="flex";
table.style.flexDirection="row";
table.style.flexWrap="wrap";
table.style.backgroundColor="aqua";
table.style.padding="20px";
document.body.append(table);

//creating input element
var input =document.createElement('input');
input.style.height="50px";
input.style.width="240px";
input.style.fontSize="30px";
input.style.color="white";
input.style.backgroundColor="gray";
input.style.margin="20px 0px 20px 0px";
input.setAttribute('type','text');
input.setAttribute('id','result');
input.setAttribute('dir', 'rtl')
table.append(input);

//creating button Element
var btn=document.createElement('button');
btn.addEventListener('click',function(){dis('1');});
btn.style.height="50px";
btn.style.width="60px";
btn.style.fontSize="30px";
btn.style.backgroundColor="orange";
btn.style.borderRadius="25px";
btn.innerHTML="1";
table.append(btn);


var btn=document.createElement('button');
btn.addEventListener('click',function(){dis('2');});
btn.style.height="50px";
btn.style.width="60px";
btn.style.fontSize="30px"
btn.style.backgroundColor="orange";
btn.style.borderRadius="25px";
btn.innerHTML="2";
table.append(btn);


var btn=document.createElement('button');
btn.addEventListener('click',function(){dis('3');});
btn.style.height="50px";
btn.style.width="60px";
btn.style.fontSize="30px";
btn.style.backgroundColor="orange";
btn.style.borderRadius="25px";
btn.innerHTML="3";
table.append(btn);


var btn=document.createElement('button');
btn.addEventListener('click',function(){clr();});
btn.style.height="50px";
btn.style.width="60px";
btn.style.fontSize="30px";
btn.style.backgroundColor="lime";
btn.style.borderRadius="25px";
btn.innerHTML="C";
table.append(btn);

var btn=document.createElement('button');
btn.addEventListener('click',function(){dis('4');});
btn.style.height="50px";
btn.style.width="60px";
btn.style.fontSize="30px";
btn.style.backgroundColor="orange";
btn.style.borderRadius="25px";
btn.innerHTML="4";
table.append(btn);

var btn=document.createElement('button');
btn.addEventListener('click',function(){dis('5');});
btn.style.height="50px";
btn.style.width="60px";
btn.style.fontSize="30px";
btn.style.backgroundColor="orange";
btn.style.borderRadius="25px";
btn.innerHTML="5";
table.append(btn);

var btn=document.createElement('button');
btn.addEventListener('click',function(){dis('6');});
btn.style.height="50px";
btn.style.width="60px";
btn.style.fontSize="30px";
btn.style.backgroundColor="orange";
btn.style.borderRadius="25px";
btn.innerHTML="6";
table.append(btn);


var btn=document.createElement('button');
btn.addEventListener('click',function(){dis('*');});
btn.style.height="50px";
btn.style.width="60px";
btn.style.fontSize="30px";
btn.style.backgroundColor="lime";
btn.style.borderRadius="25px";
btn.innerHTML="*";
table.append(btn);


var btn=document.createElement('button');
btn.addEventListener('click',function(){dis('7');});
btn.style.height="50px";
btn.style.width="60px";
btn.style.fontSize="30px";
btn.style.backgroundColor="orange";
btn.style.borderRadius="25px";
btn.innerHTML="7";
table.append(btn);


var btn=document.createElement('button');
btn.addEventListener('click',function(){dis('8');});
btn.style.height="50px";
btn.style.width="60px";
btn.style.fontSize="30px";
btn.style.backgroundColor="orange";
btn.style.borderRadius="25px";
btn.innerHTML="8";
table.append(btn);


var btn=document.createElement('button');
btn.addEventListener('click',function(){dis('9');});
btn.style.height="50px";
btn.style.width="60px";
btn.style.fontSize="30px";
btn.style.backgroundColor="orange";
btn.style.borderRadius="25px";
btn.innerHTML="9";
table.append(btn);


var btn=document.createElement('button');
btn.addEventListener('click',function(){dis('/');});
btn.style.height="50px";
btn.style.width="60px";
btn.style.fontSize="30px";
btn.style.backgroundColor="lime";
btn.style.borderRadius="25px";
btn.style.margin="5px 2px 2px 5px";
btn.style.padding="5px";
btn.innerHTML="/";
table.append(btn);

var btn=document.createElement('button');
btn.addEventListener('click',function(){dis('0');});
btn.style.height="50px";
btn.style.width="60px";
btn.style.fontSize="30px";
btn.style.backgroundColor="orange";
btn.style.borderRadius="25px";
btn.innerHTML="0";
table.append(btn);


var btn=document.createElement('button');
btn.addEventListener('click',function(){dis('.');});
btn.style.height="50px";
btn.style.width="40px";
btn.style.fontSize="30px";
btn.style.backgroundColor="lime";
btn.style.borderRadius="25px";
btn.innerHTML=".";
table.append(btn);


var btn=document.createElement('button');
btn.addEventListener('click',function(){dis('+');});
btn.style.height="50px";
btn.style.width="40px";
btn.style.fontSize="30px";
btn.style.backgroundColor="lime";
btn.style.borderRadius="25px";
btn.innerHTML="+";
table.append(btn);

var btn=document.createElement('button');
btn.addEventListener('click',function(){dis('-');});
btn.style.height="50px";
btn.style.width="40px";
btn.style.fontSize="30px";
btn.style.backgroundColor="lime";
btn.style.borderRadius="25px";
btn.innerHTML="-";
table.append(btn);


var btn=document.createElement('button');
btn.addEventListener('click',function(){solve();});
btn.style.height="50px";
btn.style.width="60px";
btn.style.fontSize="30px";
btn.style.backgroundColor="silver";
btn.style.borderRadius="50px";
btn.innerHTML="=";
table.append(btn);


//creating function to display the val in input element tag

function dis(val){
    document.getElementById('result').value+= val
}


//creating function to clr the value 

function clr(){
    document.getElementById('result').value = ""
}


//creating function to evaluate the value

function solve(){
   let x= document.getElementById('result').value
   let y=eval(x)
   document.getElementById('result').value = y
}






















//function to create Button element
//function createbtn(){
    //var newbtn= documnet.createElement('button');
    //return newbtn;}

