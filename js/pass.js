var x = document.getElementById('show-pass');
var y = document.getElementById('pass');
var img = x.querySelector("img")
x.addEventListener('click' , function() {
   if(y.type === 'password'){
        y.type ='text';
   }else{
    y.type='password';
   }
   if(img.src.includes('open')){
        img.src='../image/eye close.svg';
   }
   else{
        img.src='../image/eye open.svg';
   }
})
function func(event){
     event.preventDefault();
     var name =document.getElementById("user").value;
     var password =document.getElementById("pass").value;
     localStorage.setItem('Username',name);
     localStorage.setItem('pass',password);
     window.location.href = "./index.html";
}
function funch(event){
     event.preventDefault();
     var password =document.getElementById("pass").value;
     localStorage.setItem('pass',password);
     window.location.href = "./index.html";
}
