var firstDiv=document.querySelector(".tx-hero-wrapper>.tx-hero.block>div>div");
var firstElement=document.createElement("h1");
firstElement.setAttribute("id","textOne");
firstElement.innerText="Risks of bad breadth: Market concentration in 5 charts";
firstDiv.appendChild(firstElement);

var secondElement=document.createElement("button");
secondElement.setAttribute("class","hero-button");
secondElement.innerText="Get Insights";
firstDiv.appendChild(secondElement);
