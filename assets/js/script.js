'use strict';



/**
 * add event on element
 */


const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn active when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const showElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", showElemOnScroll);



/**
 * product filter
 */

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterBox = document.querySelector("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  filterBox.setAttribute("data-filter", this.dataset.filterBtn)
}

addEventOnElem(filterBtns, "click", filter);


/**
 * 
 * Currency Converter
 */

let array1=[["$",1],["Eu.",2],["Rs.",83]]
const dPricesObj=document.getElementsByClassName("price");
const dPrices=[];
for (var i=0;i<dPricesObj.length;i++)
{
  dPrices.push(dPricesObj[i].innerHTML);
}
for (var i=0;i<dPrices.length;i++)
{
  
  dPrices[i]=(parseFloat(dPrices[i].slice(1)));
  console.log(dPrices[i]);
}
function priceChange(factor,currency)
{
  const prices=document.getElementsByClassName("price");
  for (var i=0;i<dPrices.length;i++)
  {
    let inHtml=Math.round(parseFloat(dPrices[i])*factor).toFixed(2);
    prices[i].innerHTML=currency+inHtml;
  }
}
const C=document.getElementsByClassName("currency");
for (var i=0;i<C.length;i++)
{
  console.log(C[i]);
  let currency=array1[i][0];
  let factor=array1[i][1];
  C[i].addEventListener("click",function()
{
  document.getElementsByClassName("currentC")[0].classList.remove("currentC");
  this.classList.add("currentC");
priceChange(factor,currency)
})
}


var n= document.getElementsByClassName("card-action-btn").length;

console.log(n);
for (var i=2;i<n;i+=3)
{
  var wishlistBtn=document.getElementsByClassName("card-action-btn")[i];
  var wishlist_count=document.getElementsByClassName("btn-badge")[0];
  wishlistBtn.addEventListener("click",function()
  {
    let icon=this.children[0];
    //icon.href="javascript:void()";
    if ((icon.name).localeCompare("heart"))
    {
      wishlist_count.innerHTML=parseInt(wishlist_count.innerHTML)+1;
      this.children[0].name="heart";
    }
    else{
      wishlist_count.innerHTML=parseInt(wishlist_count.innerHTML)-1;
      this.children[0].name="heart-outline";
    }
  })
}

for (var i=1;i<n;i+=3)
{
  var cartBtn=document.getElementsByClassName("card-action-btn")[i];
  var bag_count=document.getElementsByClassName("btn-badge")[1];
  cartBtn.addEventListener("click",function()
  {
    let icon=this.children[0];
    let ele = this.parentElement.parentElement.parentElement.parentElement;
    console.log(ele.children[1].children[1].children[0].innerHTML);
    var src=this.parentElement.parentElement.parentElement.children[0].src;
    var name=ele.children[1].children[0].children[0].innerHTML;
    var price=ele.children[1].children[1].children[0].innerHTML;
    addItemToCart(src,name,price)
    if ((icon.name).localeCompare("bag-handle"))
    {
      bag_count.innerHTML=parseInt(bag_count.innerHTML)+1;
      this.children[0].name="bag-handle";
    }
    else{
      bag_count.innerHTML=parseInt(bag_count.innerHTML)-1;
      this.children[0].name="bag-handle-outline";
    }
  })
}



var cartBtn=document.getElementsByClassName("header-action-btn")[2];
console.log(cartBtn)
cartBtn.addEventListener("click",function()
{
  var cartArea=document.getElementsByClassName("cartArea")[0].style.display="block";
  
});
var click=0;
if (click==1)
{
  cartBtn.addEventListener()
}
cartBtn.addEventListener("dblclick",function()
{
  var cartArea=document.getElementsByClassName("cartArea")[0].style.display="none";
})
var x=0;
var cartArea=document.getElementsByClassName("cartArea")[0];

function addItemToCart(src,name,price)
{
  var newItem=document.createElement("div");
    newItem.id="item"+x;
    newItem.classList.add("items");
  var newImg=document.createElement("img");
    newImg.src=src;
    newImg.classList.add("item-img");
  var itemDetails=document.createElement("div");
    itemDetails.classList.add("item-details");
  var label1=document.createElement("label");
    label1.classList.add("item-labels");
    label1.innerHTML=name;
  var label2=document.createElement("label");
  label2.classList.add("item-labels");
    label2.innerHTML=price;
   
  var crossButton=document.createElement("div");
    crossButton.innerHTML="<ion-icon name='bag-handle' aria-hidden='true'></ion-icon>";
    crossButton.classList.add("item-del-btn");
    itemDetails.appendChild(label1);
    itemDetails.appendChild(label2);
    
    newItem.appendChild(newImg);
    newItem.appendChild(itemDetails);
    newItem.appendChild(crossButton)
    cartArea.appendChild(newItem);
}
