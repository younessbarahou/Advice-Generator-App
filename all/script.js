let cte = 0;
var getAdvice = function(){
    cte++;
fetch('https://api.adviceslip.com/advice?' + Math.random())
  .then(response => response.json())
  .then(yns => {
    console.log(yns.slip.advice);
    document.getElementById("num").innerText = cte;
    document.getElementById("hero").innerText = yns.slip.advice;
  })
  .catch(error => console.error('Error:', error));
}