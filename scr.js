const class1=document.getElementById('class1');
const rigesterBtn=document.getElementById('rigester');
const loginBtn=document.getElementById('login');
rigesterBtn.addEventListener('click',function() {class1.classList.add("active" )});

    loginBtn.addEventListener('click',function () {class1.classList.remove("active")});
