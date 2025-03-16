// Array to store cart items
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add product to cart
function addToCart(productName, price) {

    let existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1; 
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    saveCart();
    updateCartDisplay();
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartDisplay();
}

// Function to clear the entire cart
function clearCart() {
    cart = [];
    saveCart();
    updateCartDisplay();
}

// Function to save cart to localStorage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to update cart display
function updateCartDisplay() {
    let cartItemsList = document.getElementById("cart-items");
    let totalPriceElement = document.getElementById("total-price");

    cartItemsList.innerHTML = " "; // Clear previous items
    let totalPrice = 0;

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - ₹${item.price} x ${item.quantity} 
                        <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItemsList.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.innerText = `Total: ₹${totalPrice}`;
}

// Initialize cart display on page load
updateCartDisplay();

document.querySelectorAll(".cartButton").forEach(button => {
    button.addEventListener("click", function () {
        let button = this;
        button.style.backgroundColor = "grey";
        button.textContent = "Added to Cart";

        setTimeout(() => {
            button.style.backgroundColor = ""; 
            button.textContent = "Add to Cart"; 
        }, 2000);
    });
});


document.querySelectorAll(".Active").forEach(button => {
    button.addEventListener("click", function () {
        // Remove background color from all panel buttons
        document.querySelectorAll(".panelButton").forEach(btn => {
            btn.style.backgroundColor = "";
        });

        this.style.backgroundColor = "#e68a00";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".sales img"); // Selecting all images inside .sales
    let currentIndex = 0; // Track the current image index

    function slideImages() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
        });

        currentIndex = (currentIndex + 1) % slides.length; // Loop back to first image after the last one
    }

    setInterval(slideImages, 3000);
});


let currentIndex = 0;

function slideImages() {
    const slidesContainer = document.querySelector(".Photos");
    const slides = document.querySelectorAll(".Photos img");

    if (!slidesContainer || slides.length === 0) {
        console.error("Error: No slides or slide container found!");
        return;
    }

    slidesContainer.style.transition = "transform 0.5s ease-in-out";
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

window.goPrev = function () {
    const slides = document.querySelectorAll(".Photos img");
    if (slides.length === 0) return;
    
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slideImages();
};

window.goNext = function () {
    const slides = document.querySelectorAll(".Photos img");
    if (slides.length === 0) return;
    
    currentIndex = (currentIndex + 1) % slides.length;
    slideImages();
};

// Ensure slides are positioned correctly on page load
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".Photos img");
    slides.forEach((slide, index) => {
        slide.style.position = "absolute";
        slide.style.left = `${index * 100}%`;
    });
    slideImages();
});

function toggleDetails() {
    const details = document.getElementById("details");
    const arrow = document.querySelector(".arrow");

    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        arrow.classList.add("rotate");
    } else {
        details.style.display = "none";
        arrow.classList.remove("rotate");
    }
}


