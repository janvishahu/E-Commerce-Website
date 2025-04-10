
// ExploreOurproduct Button 

function ExploreOurproduct() {
    document.querySelector('.third-card-section').scrollIntoView({ 
        behavior: 'smooth' 
    })
};



// CART-PATH

document.getElementById("shoppinglogo").addEventListener("click", function () {
  window.location.href = "cart.html";
});




// CART SECTION

  let cartCount = 0;

  // Helper to update the cart count display
  function updateCartDisplay() {
    document.getElementById("cartcount").innerText = cartCount;
  }

  // Generic function to get quantity by input ID
  function getQuantity(inputId) {
    const input = document.getElementById(inputId);
    return parseInt(input.value) || 1;
  }

  // Function to add to cart for each product
  function addToCart(quantityInputId) {
    const quantity = getQuantity(quantityInputId);
    cartCount += quantity;
    updateCartDisplay();
    alert(`Added ${quantity} item(s) to cart!`);
  }

  // Add & Remove quantity functions for each product
  function AddProduct(id) {
    const input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
  }

  function RemoveProduct(id) {
    const input = document.getElementById(id);
    if (parseInt(input.value) > 1) {
      input.value = parseInt(input.value) - 1;
    }
  }

  // Attach add to cart functionality
  window.onload = function () {
    // Example setup — bind each Add to Cart button
    document.querySelectorAll('.Addtocart').forEach((button, index) => {
      button.onclick = () => addToCart(`quantity${index + 1}`);
    });
  };


  function addToCart(inputId, product) {
    const quantity = parseInt(document.getElementById(inputId).value);
    product.quantity = quantity;
  
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
    alert(`${quantity} item(s) added to cart!`);
    document.getElementById("cartcount").innerText = cartItems.length;
  }



