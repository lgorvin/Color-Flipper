const body = document.getElementById('body');
const btn = document.getElementById('btn');
const shadow = document.getElementById('shadow');
const span = document.getElementById('span');

function getRandomColor(){
  var colorCodeGen = '0123456789ABCDEF';
  var code = '#';
  for(var count = 0; count < 6; count++){
    code = code+ colorCodeGen[Math.floor(Math.random()*16)];
  }
  return code;
}

function colorClick(){
  randomColor = getRandomColor();
  body.style.backgroundColor = randomColor;
  btn.style.backgroundColor = randomColor;
  shadow.style.textShadow = '2px 2px 2px ' + randomColor;
  console.log(randomColor);
  // colorCode.textContent = randomColor;
  // colorCode.style.color = randomColor;
  span.textContent = randomColor;
  span.style.color = randomColor;
}
