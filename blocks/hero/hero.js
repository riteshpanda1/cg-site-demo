var firstDiv=document.querySelector(".hero-wrapper>.hero.block>div>div");
var firstElement=document.createElement("h1");
firstElement.setAttribute("id","textOne");
firstElement.innerText="Risks of bad breadth: Market concentration in 5 charts";
firstDiv.appendChild(firstElement);

var secondElement=document.createElement("p");
var thirdElement=document.createElement("a");
thirdElement.setAttribute("class","hero-button");
thirdElement.innerText="Get Insights";
secondElement.appendChild(thirdElement);
firstDiv.appendChild(secondElement);

