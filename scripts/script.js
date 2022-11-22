const clickButton = document.querySelector('.click-me');
//console.log(clickButton);

function clickHandler()
{
    alert("You clicked me!");
    // clickButton.removeEventListener("click", clickHandler); //removes the function (alert()) after one click
}
clickButton.addEventListener("click", clickHandler, {once:true}); //gives it to us once



function changeBGPink()
{
    // document.body.style.backgroundColor = `pink` //this way was done in quiz: one way
    document.body.classList.add("pinkBG");
}
clickButton.addEventListener('click', changeBGPink);

function changeText()
{
    if (clickButton.textContent === 'Click Me!') //make sure the text is the exact
    {
        clickButton.textContent = 'clicked!'
    }
    else if (clickButton.textContent === 'clicked!')
    {
        clickButton.textContent = 'Click Me!'
    }
}
clickButton.addEventListener('click', changeText);



function updateImage()
{
    const image = document.querySelector("#shoppingCart");
    image.src = "";
    image.alt = "shopping cart";
    image.width = "100";
    image.height = "100";
    // image.src = 'Images/shoppingCart.png'
    // image.setAttribute('src', 'images/shoppingCart')
}
clickButton.addEventListener('click', updateImage);