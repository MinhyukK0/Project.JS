const image = ['0.jpeg', '1.jpeg', '2.jpeg'];
const chosenimage = image[Math.floor(Math.random()*image.length)];

const bg_image = document.createElement('img')
bg_image.src = `../IMAGE/${chosenimage}`;
bg_image.classList.add('bgimage');
// src주소만 사용해서 배경이미지로 사용
document.querySelector('.container .bgimage').style.background = `url(${bg_image.src})`;



