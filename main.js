document.addEventListener('DOMContentLoaded', function() {
    let colorChangeElement = document.getElementById('color-box');
    let colorChangeBtnElement = document.getElementById('change-color-btn');
    function getRandomColor() {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
      
        var randomColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
        return randomColor;
    }
        let changeColorbtnElement = document.getElementById('change-color-btn');

  changeColorbtnElement.addEventListener('click', function() {
  let randomColor = getRandomColor();
  changeColorbtnElement.style.backgroundColor = randomColor;
});
  });