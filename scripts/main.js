//更改内容
const myHeading = document.querySelector('h2');
myHeading.textContent = "Hello world";

//改变图片
let aaa = document.querySelector('img');

aaa.onclick = function(){
    let mySrc = aaa.getAttribute('src');
    if(mySrc === 'images/aphelios.jpg'){
        aaa.setAttribute('src','images/ashe.jpg');
    }else{
        aaa.setAttribute('src','images/aphelios.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading1 = document.querySelector('h2');

setUserName()
function setUserName(){
    //prompt类似于alert。该函数显示一个对话框。可以输入数据，在点击确认后并将其存储在变量中。
    let myName = prompt('Please enter your name.');
    if(!myName){
        alert('必须输入name！');
        setUserName();
    }
    localStorage.setItem('name',myName);
    myHeading1.innerHTML = '请开始你的表演，'+myName
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading1.textContent = '请开始你的表演，'+storedName
}

myButton.onclick = function(){
    setUserName();
}