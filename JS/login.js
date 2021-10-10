const loginform = document.querySelector('.logincontainer .loginform');
const loginInput = document.querySelector('.loginform input');
const greeting = document.querySelector('#greeting');
const logoutbtn = document.querySelector('.logincontainer .logoutbtn')

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username'



function onSubmit(event){
    /*
    const username = loginInput.value;

    아래의 코드들은 이미 html 폼양식의 required maxlength라는 속성값이 해결해주었다.

    if(username === ''){
        alert('Please write your ID');
    }else if(username.length >= 15){
      alert('ID is too long');
    }
    console.log(username);
    */

    event.preventDefault();
    loginform.classList.add(HIDDEN_CLASSNAME);
    document.querySelector('.loginform input').classList.add(HIDDEN_CLASSNAME);
    document.querySelector('.loginform .submit').classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // localstorage에 값을 저장
    paintgreeting(username); // <-- 반복된 사용보다 함수를 만듦
}

function paintgreeting(name){
    /* 백틱을 사용하고 백틱 범위 안에서 변수이름을 그대로 사용하기 `${변수이름}` */
    greeting.innerText = `Hello ${name}!`; // 'Hello ' + username; <-- + 연산을 사용하는것은 바람직하지 않다. 
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutbtn.classList.remove(HIDDEN_CLASSNAME);
    document.querySelector('.logged .logoutbtn').style.display = 'inline-block';
}

function reset(){
    localStorage.removeItem(USERNAME_KEY);
    location.reload();
}

/*
localStorage 사용법
localStorage.setitem('키값', '요소값'); <- localstorage에 key와 value값을 저장
localStorage.getitem('키값'); <- localstorage에 저장된 value값을 호출
localStorage.removeitem('키값'); <- localstorage에 저장된 key와 value값을 제거
*/

document.querySelector('.logged .logoutbtn').style.display = 'none';
logoutbtn.addEventListener('click',reset);

const savedusername = localStorage.getItem(USERNAME_KEY);

if(savedusername === null){
    // Show the login form
    loginform.classList.remove(HIDDEN_CLASSNAME);
    document.querySelector('.loginform input').classList.remove(HIDDEN_CLASSNAME);
    document.querySelector('.loginform .submit').classList.remove(HIDDEN_CLASSNAME);
    loginform.addEventListener('submit', onSubmit);
} else {
    // Show Greetings
    paintgreeting(savedusername);
}
