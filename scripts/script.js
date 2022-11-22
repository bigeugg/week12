const clickButton = document.querySelector('.click-me');
//console.log(clickButton);

function clickHandler()
{
    alert("You clicked me!");
    // clickButton.removeEventListener("click", clickHandler); //removes the function (alert()) after one click
}
clickButton.addEventListener("click", clickHandler, {once:true}); //gives it to us once



const pink = document.querySelector(".body");

function changeBGPink()
{
    // document.body.style.backgroundColor = `pink` //this way was done in quiz: one way
    document.body.classList.add("pinkBG");
}
clickButton.addEventListener('click', changeBGPink)