// Zoom in Image
const productImg = document.querySelector('.product-img');
const img = document.querySelector('.img');

productImg.addEventListener('mousemove', function(e) {
    let clientX = e.clientX - productImg.offsetLeft;
    let clientY = e.clientY - productImg.offsetTop;

    let imgWidth = productImg.offsetWidth;
    let imgHeight = productImg.offsetHeight;

    clientX = clientX / imgWidth * 100;
    clientY = clientY / imgHeight * 100;

    img.style.transform = `translate(-${clientX}%, -${clientY}%) scale(1.5)`;
  
});

productImg.addEventListener('mouseleave', function() {
    img.style.transform = 'translate(0) scale(1)'
});

// Calculate Total Price
const quantityInput = document.querySelector('#quantity-input');
let subTotal = document.querySelector('.subtotal');

subTotal.innerText = `Subtotal: $${quantityInput.value * 69}.00`;

quantityInput.addEventListener('change', function() {
  subTotal.innerText = `Subtotal: $${quantityInput.value * 69}.00`;
});

// Disable Buy Now Button
const checkBox = document.querySelector('#check');
const buyNow = document.querySelector('.buy-now');


checkBox.addEventListener('click', function() {
  if(checkBox.checked == false) {
    buyNow.setAttribute('disabled', 'true');
  } else if(checkBox.checked == true) {
    buyNow.removeAttribute('disabled');
  }
});

