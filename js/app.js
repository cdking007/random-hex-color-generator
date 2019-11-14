const btn = document.getElementById('btn');
const hexValue = document.getElementById('hex-value');
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
btn.addEventListener('click',function(){
    randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    hexValue.textContent = randomColor;
});