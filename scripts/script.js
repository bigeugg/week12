const clickButton = document.querySelector('.click-me');
//console.log(clickButton);

function clickHandler()
{
    alert("You clicked me!");
    // clickButton.removeEventListener("click", clickHandler); //removes the function (alert()) after one click
}
clickButton.addEventListener("click", clickHandler, {once:true}); //gives it to us once


