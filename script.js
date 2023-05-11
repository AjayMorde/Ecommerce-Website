const bar=document.getElementById('bar');
const nav = document.getElementById('navbar');
const close=document.getElementById('close');
if(bar) {
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
       
    })
}
if(close) {
    bar.addEventListener('click',()=>{
        nav.classList.remove('active')
      
        
    })
}

const MainImg=document.getElementById('MainImg');
const smallimg=document.getElementsByClassName('small-img')
smallimg[0].onclick=function(){
   MainImg.src=smallimg[0].src;
}
smallimg[1].onclick=function(){
   MainImg.src=smallimg[1].src;
}
smallimg[2].onclick=function(){
   MainImg.src=smallimg[2].src;
}
smallimg[3].onclick=function(){
   MainImg.src=smallimg[3].src;
}








function openNewPage(url){
    window.location.href='shop.html'
}
function btn(url){
    window.location.href='https://www.ajio.com/'
}

function showAlert(){
    alert("We re sorry to inform you that the following product types are currently not available on our website [list of product types].  We apologize for any inconvenience this may cause. However,were working hard to bring these products back to our website soon. YOU MAY ADD THIS PRODUCT TO CART ON CLICKING BELOW BAG OPTION. Thank you for your patience and understanding.");

    
}





function addToCart() {
    
    const size = document.querySelector('select[name="XL"]').value;
  
   
    const quantity = document.querySelector('input[type="number"]').value;
  
    const title = document.querySelector('.single-pro-details h4').textContent;
  
    
    const price = document.querySelector('.single-pro-details h3').textContent;
  
         const imageUrl = document.querySelector('#MainImg').src;
  
   
    const product = {
      title,
      size,
      quantity,
      price,
      imageUrl
    };
  
    // Store the product information in localStorage
    localStorage.setItem('product', JSON.stringify(product));
  
    // Open the cart page in a new tab
    window.open('cart.html');
  }



 
  function coupon(){
    let a=document.getElementById('coup')
    if(a.value==""){
        alert("Please Enter valid  Coupon code ")
    }
    else{
        alert("Invalid Coupon code")
    }
    return false;
   
  }