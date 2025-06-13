
let isearch=document.getElementById('i-search');
let mainsearch=document.getElementById('main-search');
isearch.onclick=function(){
  mainsearch.style.height="135px";
  
}

function search(){
let searchBar=document.querySelector('.search').value.toUpperCase();
let list=document.querySelector('.product-list-search');
let productsearch=document.querySelectorAll('.product-search');
let p=document.getElementsByTagName('p');


for(let i=0;i<p.length;i++){
    if(p[i].innerHTML.toUpperCase().indexOf(searchBar)>=0){
        productsearch[i].style.display="";
    }
    else{
        productsearch[i].style.display="none";
    }
}

}
let night=document.getElementById('night');
let sun=document.getElementById('sun');
night.onclick=function(){
body.style.background="#08161f";

}
sun.onclick=function(){
body.style.background="white";

}
if(localStorage.length>0){
  text.value=localStorage.getItem('text')
}
text.onkeyup=function(){
  localStorage.setItem('text',text.value)
}

if(localStorage.length>0){
 pass.value=localStorage.getItem('pass')
}
pass.onkeyup=function(){
  localStorage.setItem('pass',pass.value)
}

let tx=document.getElementById('tx');
let pass=document.getElementById('pass');
let eye=document.getElementById('eye');
let main =document.getElementById('main');
let signIn=document.getElementById('sign in');
let b=document.getElementById('x');
let hd=document.getElementById('hd');
let icon=document.getElementById('icon');
let section=document.querySelectorAll('#Main');
let btn =document.getElementById('btn');






window.onscroll=function(){
if(scrollY>=500){
      btn.style.display='block';
}
else{
  btn.style.display='none';

}

}
btn.onclick=function(){

  scroll({
  left:0,
  top:0,
  behavior:'smooth'
})
}


let test1=document.getElementById('test1');
let test2=document.getElementById('test2');
let test3=document.getElementById('test3');
let test4=document.getElementById('test4');
let test5=document.getElementById('test5');
test1.onclick=function(){
 test1.style.color='#5790AB';
}
test2.onclick=function(){
  test1.style.color='#5790AB';
  test2.style.color='#5790AB';
}
test3.onclick=function(){
  test1.style.color='#5790AB';
  test2.style.color='#5790AB';
  test3.style.color='#5790AB';
}
test4.onclick=function(){
  test1.style.color='#5790AB';
  test2.style.color='#5790AB';
  test3.style.color='#5790AB';
  test4.style.color='#5790AB';
}
test5.onclick=function(){
  test1.style.color='#5790AB';
  test2.style.color='#5790AB';
  test3.style.color='#5790AB';
  test4.style.color='#5790AB';
  test5.style.color='#5790AB';
}



let btnOpen=document.getElementById('open');

let Menu=document.getElementById('menu');
let Ex=document.getElementById('ex');

btnOpen.onclick=function(){
 btnOpen.classList.add('hide');
 Menu.classList.remove('hide');


}
Ex.onclick=function(){
Menu.classList.add('hide');
btnOpen.classList.remove('hide');
}




eye.onclick=function(){
if(pass.type==='password'){
      pass.type='text';
}
else{
    pass.type='password';
}
}

signIn.onclick=function(){
main.classList.remove('hid');
hd.classList.add('hid');
section.classList.add('z');
}

icon.onclick=function(){
main.classList.add('hid');
hd.classList.remove('hid');
section.classList.remove('z');


}
let scrollContainer=document.querySelector('.m-scrole-img');
let backBtn=document.getElementById('back');
let nextBtn=document.getElementById('next');
let priceDrop=document.querySelector('.p-price-drop');


nextBtn.onclick=function(){
  scrollContainer.style.scrollBehavior="smooth"
  scrollContainer.scrollLeft +=300;
}
backBtn.onclick=function(){
  scrollContainer.style.scrollBehavior="smooth"
  scrollContainer.scrollLeft-=300;
}


setInterval(
function(){
  priceDrop.style.color='rgb(160, 41, 41)';
},1100)
setInterval(
function(){
  priceDrop.style.color='white';
},1000)