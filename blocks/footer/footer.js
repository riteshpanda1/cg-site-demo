import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  // fetch footer content
  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

  if (resp.ok) {
    const html = await resp.text();

    // decorate footer DOM
    const footer = document.createElement('div');
    footer.innerHTML = html;

    decorateIcons(footer);
    block.append(footer);
     //hiding content
   var footerContent = document.querySelector('.footer-wrapper > .footer.block > div');
   footerContent.style.display = 'none';
  var mainFooter = document.querySelector('.footer-wrapper > .footer.block');
   mainFooter.setAttribute('class','footerwt');
   mainFooter.setAttribute('role','contentinfo');
   mainFooter.setAttribute('aria-labelledby','un-footer-id');
   mainFooter.classList.add('aem-GridColumn', 'aem-GridColumn--default--12');
  //var footerContentOne = document.querySelectorAll('.footerwt > div > div')[0].innerText
  var firstDiv = document.createElement('div');
    firstDiv.classList.add('wrap-footer', 'noindex');
    mainFooter.appendChild(firstDiv);

 var firstHeader = document.createElement('h2');
 firstHeader.setAttribute('class','sr-only');
   firstHeader.setAttribute('tabindex','-1');
   firstHeader.setAttribute('id','un-footer-id');
   firstHeader.setAttribute('data-unptsign','ppr-0101');
   firstHeader.innerHTML = `Footer`;
firstDiv.appendChild(firstHeader);
  var firstStyle = document.createElement('style'); 
   firstStyle.innerHTML = `
                             a.evidon-consent-link {
   display: inline-block;
   line-height: 14px;
   text-decoration: none;
   background-color: transparent;
   color: #00294B !important;
   padding: 6px;
 }

 #evidon-prefdiag-tabcontent-2 {
   margin: 0px 10px !important;
 }

 #evidon-prefdiag-tabcontainer {

   width: 400px !important;
 }

 #evidon-prefdiag-nav-1 {

   display: none !important;
 }

 @media only screen and (max-width: 768px) {
   .evidon-prefdiag-tabcontainer {
     max-height: 300px;
     background-color: #FFF;
   }

   a.evidon-consent-link {
     font-size: 12px !important;
     margin: 0px 13px;
     padding: 0px;
   }

   .legal .legalContainer ul.footer-nav {
     margin: 13px 13px;
   }

   .row.legalContainer {
     display: flex;
     flex-direction: column-reverse;
   }
 }

 @media (min-width: 768px) and (max-width: 1024px) {
   .wrap-footer a.evidon-consent-link {
     font-size: 12px !important;
     margin: 0px 13px;
     padding: 0px;
   }

   .wrap-footer .legal .legalContainer ul.footer-nav {
     margin: 13px 13px !important;
   }

   .wrap-footer .legal .legalContainer ul.footer-nav li:first-child a {
     padding-left: 0px;
   }

   .wrap-footer .legal .row.legalContainer {
     display: flex;
     flex-direction: column-reverse;
   }
 }

 .cmp-footer__social-media-icons a {
   width: 30px;
   height: 30px;
   border-radius: 100%;
   background-color: #f7f7f7;

   display: flex;
   justify-content: center;
   align-items: center;
 }

 .cmp-footer__social-media-icons svg {
   width: 15px;
   height: 15px;
   fill: #7f7f7f;
 }
                         `;
firstDiv.append(firstStyle);

var secondDiv = document.createElement('div');
secondDiv.classList.add('footer-wide', 'black10','noindex');
secondDiv.setAttribute('data-dig-nav','Footer');
firstDiv.appendChild(secondDiv);
     var thirdDiv = document.createElement('div');
  thirdDiv.setAttribute('class','ns-outer-control');
   secondDiv.appendChild(thirdDiv);
   var footerInsideDiv = document.createElement('footer');
   footerInsideDiv.classList.add('container', 'about', 'black10');
   footerInsideDiv.setAttribute('role','presentation');
   thirdDiv.appendChild(footerInsideDiv);
   var fourthDiv = document.createElement('div');
  fourthDiv.setAttribute('class','row');
   footerInsideDiv.appendChild(fourthDiv);
     var fifthDiv = document.createElement('div');
  fifthDiv.setAttribute('class','span12');
   fourthDiv.appendChild(fifthDiv);
var fifthDivContent = document.querySelector('.footer-wrapper > .footerwt > div > div >ul');
 var firstliContent =  document.querySelectorAll('.footer-wrapper > .footerwt > div > div >ul > li')[3];
   document.querySelectorAll('.footer-wrapper > .footerwt > div > div >ul')[1].classList.add('social-media-badges');
   var firstUl =  document.querySelectorAll('.footer-wrapper > .footerwt > div > div >ul')[1];
   firstliContent.appendChild(firstUl);
fifthDiv.appendChild(fifthDivContent);
   var sixthDiv = document.createElement('div');
   sixthDiv.setAttribute('class','row');
  sixthDiv.innerHTML = `
        <div class="span12">
     <ul></ul>
     </div>
        `;
footerInsideDiv.appendChild(sixthDiv);
var counter = document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5').length;
  var SeventhDiv = document.createElement('div');
  SeventhDiv.classList.add('footer-menu', 'parbase');
        firstDiv.appendChild(SeventhDiv);
   var eigthDiv = document.createElement('div');
eigthDiv.classList.add('footer-wide', 'black40','noindex');
eigthDiv.setAttribute('data-dig-nav','Footer');
SeventhDiv.appendChild(eigthDiv);
     var ninethDiv = document.createElement('div');
  ninethDiv.setAttribute('class','ns-outer-control');
   eigthDiv.appendChild(ninethDiv);
   var footerInsiderDiv = document.createElement('footer');
   footerInsiderDiv.classList.add('container', 'concise-sitemap', 'black40');
   footerInsiderDiv.setAttribute('role','presentation');
   ninethDiv.appendChild(footerInsiderDiv);
   var tenthDiv = document.createElement('div');
  tenthDiv.setAttribute('class','row');
   footerInsiderDiv.appendChild(tenthDiv);
for(let i = 0; i < counter ;i++){

 if(i == 0){
   var footerSpan = document.createElement('span');
  footerSpan.classList.add('icon', 'hidden-desktop');
   var elevenDiv = document.createElement('div');
      elevenDiv.classList.add('span2', 'inverse');
   elevenDiv.appendChild(footerSpan);
   document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].classList.add('triangle-right'); 
   document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].setAttribute('aria-level','3');
   var elevenHeader = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > h5')[0];
   var elevenUL = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > ul')[0];
   elevenDiv.appendChild(elevenHeader); 
   elevenDiv.appendChild(elevenUL);
   tenthDiv.appendChild(elevenDiv);
 }else if(i == 1){
     var footerSpan = document.createElement('span');
  footerSpan.classList.add('icon', 'hidden-desktop');
   var twleveDiv = document.createElement('div');
      twleveDiv.classList.add('span2', 'inverse');
   twleveDiv.appendChild(footerSpan);
   document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].classList.add('triangle-right'); 
   document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].setAttribute('aria-level','3');
   var twleveHeader = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > h5')[0];
   var twleveUL = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > ul')[0];
   twleveDiv.appendChild(twleveHeader); 
   twleveDiv.appendChild(twleveUL);
   tenthDiv.appendChild(twleveDiv);
 }else if(i == 2){
       var footerSpan = document.createElement('span');
  footerSpan.classList.add('icon', 'hidden-desktop');
   var thirteenDiv = document.createElement('div');
      thirteenDiv.classList.add('span2', 'inverse');
   thirteenDiv.appendChild(footerSpan);
   document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].classList.add('triangle-right'); 
   document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].setAttribute('aria-level','3');
   var thirteenHeader = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > h5')[0];
   var thirteenUL = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > ul')[0];
   thirteenDiv.appendChild(thirteenHeader); 
   thirteenDiv.appendChild(thirteenUL);
   tenthDiv.appendChild(thirteenDiv);
 }else if(i == 3){
       var footerSpan = document.createElement('span');
  footerSpan.classList.add('icon', 'hidden-desktop');
   var fourteenDiv = document.createElement('div');
      fourteenDiv.classList.add('span2', 'inverse');
   fourteenDiv.appendChild(footerSpan);
   document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].classList.add('triangle-right'); 
   document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].setAttribute('aria-level','3');
   var fourteenHeader = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > h5')[0];
   var fourteenUL = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > ul')[0];
   fourteenDiv.appendChild(fourteenHeader); 
   fourteenDiv.appendChild(fourteenUL);
   tenthDiv.appendChild(fourteenDiv);
 }else if(i == 4){
   var footerSpan = document.createElement('span');
  footerSpan.classList.add('icon', 'hidden-desktop');
   var fifteenDiv = document.createElement('div');
      fifteenDiv.classList.add('span2', 'inverse');
   fifteenDiv.appendChild(footerSpan);
   document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].classList.add('triangle-right'); 
   document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].setAttribute('aria-level','3');
   var fifteenHeader = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > h5')[0];
   var fifteenUL = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > ul')[0];
   fifteenDiv.appendChild(fifteenHeader); 
   fifteenDiv.appendChild(fifteenUL);
   tenthDiv.appendChild(fifteenDiv);
 }else if(i == 5){
  var footerSpan = document.createElement('span');
  footerSpan.classList.add('icon', 'hidden-desktop');
   var sixteenDiv = document.createElement('div');
      sixteenDiv.classList.add('span2', 'inverse');
   sixteenDiv.appendChild(footerSpan);
   document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].classList.add('triangle-right'); 
   document.querySelectorAll('.footer-wrapper > .footerwt > div > div >h5')[0].setAttribute('aria-level','3');
   var sixteenHeader = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > h5')[0];
   var sixteenUL = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > ul')[0];
   sixteenDiv.appendChild(sixteenHeader); 
   sixteenDiv.appendChild(sixteenUL);
   tenthDiv.appendChild(sixteenDiv);  
 }

}

var seventeenthDiv = document.createElement('div');
seventeenthDiv.classList.add('footer-wide', 'black10','noindex');
seventeenthDiv.setAttribute('data-dig-nav','Footer');
firstDiv.appendChild(seventeenthDiv);
     var eighteenthDiv = document.createElement('div');
  eighteenthDiv.setAttribute('class','ns-outer-control');
   seventeenthDiv.appendChild(eighteenthDiv);
   var footerInsideOneDiv = document.createElement('footer');
   footerInsideOneDiv.classList.add('container', 'legal', 'black10');
   footerInsideOneDiv.setAttribute('role','presentation');
   eighteenthDiv.appendChild(footerInsideOneDiv);
   var nineteenthDiv = document.createElement('div');
  nineteenthDiv.setAttribute('class','row');
   footerInsideOneDiv.appendChild(nineteenthDiv);
     var twentyDiv = document.createElement('div');
  twentyDiv.setAttribute('class','span12');
   nineteenthDiv.appendChild(twentyDiv);
   var twentyOneDiv = document.createElement('div');
  twentyOneDiv.classList.add('row','legalContainer');
   footerInsideOneDiv.appendChild(twentyOneDiv);
     var twentytwoDiv = document.createElement('div');
  twentytwoDiv.setAttribute('class','span6');
   twentyOneDiv.appendChild(twentytwoDiv);
   var twentyThreeDiv = document.createElement('p');
 twentyThreeDiv.innerHTML = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > .copyright > div > div')[0].innerText;
   twentytwoDiv.appendChild(twentyThreeDiv);
var twentyFourDiv = document.createElement('div');
  twentyFourDiv.setAttribute('class','span6');
   twentyOneDiv.appendChild(twentyFourDiv);
   var twentyFiveDiv = document.createElement('ul');
   twentyFiveDiv.classList.add('nav', 'footer-nav');
   twentyFourDiv.appendChild(twentyFiveDiv);
   var counterLength = document.querySelectorAll('.footer-wrapper > .footerwt > div > div > div > div > div > a').length;
    for(let j = 0; j < counterLength ;j++){
 if(j == 0){
    var twentyFiveLIOne = document.createElement('li');
   twentyFiveLIOne.appendChild(document.querySelectorAll('.footer-wrapper > .footerwt > div > div > .copyright > div > div > a')[0]);
       twentyFiveDiv.appendChild(twentyFiveLIOne);
 } else if(j == 1){
    var twentyFiveLITwo = document.createElement('li');
   twentyFiveLITwo.appendChild(document.querySelectorAll('.footer-wrapper > .footerwt > div > div > .copyright > div > div > a')[0]);
       twentyFiveDiv.appendChild(twentyFiveLITwo);
 } else if(j == 2){
    var twentyFiveLIThree = document.createElement('li');
   twentyFiveLIThree.appendChild(document.querySelectorAll('.footer-wrapper > .footerwt > div > div > .copyright > div > div > a')[0]);
       twentyFiveDiv.appendChild(twentyFiveLIThree);
 } else if(j == 3){
      var twentyFiveLIFour = document.createElement('li');
   twentyFiveLIFour.appendChild(document.querySelectorAll('.footer-wrapper > .footerwt > div > div > .copyright > div > div > a')[0]);
       twentyFiveDiv.appendChild(twentyFiveLIFour);
 }
 // else if(j == 4){
  //   var twentyFiveLIFive = document.createElement('li');
  //  twentyFiveLIFive.innerText.appendChild(document.querySelectorAll('.footer-wrapper > .footerwt > div > div > .copyright > div > div > a')[0]);
  //  	  twentyFiveDiv.appendChild(twentyFiveLIFive);
 // } else if(j == 5){
  //   var twentyFiveLISix = document.createElement('li');
  //  twentyFiveLISix.innerText.appendChild(document.querySelectorAll('.footer-wrapper > .footerwt > div > div > .copyright > div > div > a')[0]);
  //  	  twentyFiveDiv.appendChild(twentyFiveLISix);
 // }
    }
  }
}
