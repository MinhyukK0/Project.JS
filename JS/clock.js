const clock = document.querySelector('h2.clock');

function getclock(){
    const date = new Date(); // 변수에 시간을 할당

    // 문자열에서 길이를 설정하고 비어있는 공간을 설정하는 함수 padStart(문자열 길이, '채울 문자'), padEnd(문자열 길이, '채울 문자')
    // 주의) pad함수는 string타입에 동작하는 함수
    const hour = String(date.getHours()).padStart(2,'0');
    const minute = String(date.getMinutes()).padStart(2,'0');
    const second = String(date.getSeconds()).padStart(2,'0');
    clock.innerText = `${hour}:${minute}:${second}`;
}


getclock(); // 시작하자마자 한번 실행

// 간격을 두고 명령을 실행하는 함수 setinterval(실행할 명령, 실행 주기(단위: ms))

setInterval(getclock, 1000);



