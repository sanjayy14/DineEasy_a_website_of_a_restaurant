// Function to handle addition of items to cart and calculation of total amount
function addToCart(section, itemName, price, quantity) {
    // Create cart item HTML
    var cartItemHTML = `<div class="cart-item">${itemName} - Rs. ${price} x ${quantity}</div>`;

    // Append cart item to cart items container
    var cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHTML);

    // Calculate total amount
    var totalAmountElement = document.getElementById('totalAmount');
    var currentTotal = parseInt(totalAmountElement.textContent);
    var itemTotal = price * quantity;
    var newTotal = currentTotal + itemTotal;

    // Update total amount in the cart
    totalAmountElement.textContent = newTotal;
}

// Function to confirm the order
function confirmOrder() {
    // Here you can add additional logic for order confirmation if needed
    // For now, let's just log a message
    console.log('Order confirmed!');
}

// Event listener for the entire document
document.addEventListener('DOMContentLoaded', function() {
    // Select all select elements in the menu
    var selectElements = document.querySelectorAll('select');

    // Add event listener to each select element
    selectElements.forEach(function(selectElement) {
        selectElement.addEventListener('change', function(event) {
            var selectedQuantity = parseInt(event.target.value);
            var foodItem = event.target.parentElement.querySelector('.food-details').textContent.trim();
            var foodPrice = parseInt(event.target.parentElement.querySelector('.food-price').textContent.trim().replace('Rs. ', ''));
            addToCart(event.target.parentElement.parentElement.classList[0], foodItem, foodPrice, selectedQuantity);
        });
    });
});
