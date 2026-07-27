/*==================================== 
        MOBILE MENU 
====================================*/ 
 
const menuBtn = document.querySelector(".menu-btn"); 
const nav = document.querySelector("nav"); 
 
if (menuBtn) {
    menuBtn.addEventListener("click", () => { 
        nav.classList.toggle("active"); 
    });
}
 
/*==================================== 
      CLOSE MENU ON LINK CLICK 
====================================*/ 
 
const navLinks = document.querySelectorAll("nav ul li a"); 
 
navLinks.forEach(link => { 
    link.addEventListener("click", () => { 
        nav.classList.remove("active"); 
    }); 
}); 
 
/*====================================
        LOADER
====================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    // Fade Out
    if(loader){

        loader.classList.add("hide");

        // Animation complete hone ke baad remove

        setTimeout(() => {

            loader.remove();

        }, 600);
    }    

});

/*==================================== 
        BACK TO TOP 
====================================*/ 
 
const topBtn = document.getElementById("topBtn"); 
 
window.addEventListener("scroll", () => { 
 
    if (window.scrollY > 400) { 
 
        topBtn.style.display = "block"; 
 
    } else { 
 
        topBtn.style.display = "none"; 
 
    } 
 
}); 

if (topBtn) {
    topBtn.addEventListener("click", () => { 
 
        window.scrollTo({ 
 
            top: 0, 
  
            behavior: "smooth" 
 
        }); 
 
    });
} 
 
/*==================================== 
      SMOOTH SCROLL 
====================================*/ 
 
document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
 
    anchor.addEventListener("click", function (e) { 
 
        e.preventDefault(); 
 
        const target = document.querySelector(this.getAttribute("href")); 
 
        if(target){ 
 
            target.scrollIntoView({ 
 
                behavior:"smooth" 
 
            }); 
 
        } 
 
    }); 
 
}); 
 
/*==================================== 
      LIVE PRODUCT SEARCH 
====================================*/ 
 
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", function () {

        const value = this.value.toLowerCase().trim();

    document.querySelectorAll(".product-card").forEach(card => {

            const productName = card.querySelector("h3").textContent.toLowerCase();

            if (productName.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}
/*==================================== 
        CATEGORY FILTER 
====================================*/ 
const productCards = document.querySelectorAll('.product-card');
const filterButtons = document.querySelectorAll(".filter-btn"); 
 
filterButtons.forEach(button => { 
 
    button.addEventListener("click", () => { 
 
        filterButtons.forEach(btn => btn.classList.remove("active")); 
 
        button.classList.add("active"); 
 
        const filter = button.dataset.filter; 
 
        productCards.forEach(card => { 
 
            if (filter === "all") { 
 
                card.style.display = "block"; 
 
            } 
 
            else if (card.classList.contains(filter)) { 
 
                card.style.display = "block"; 
 
            } 
 
            else { 
 
                card.style.display = "none"; 
 
            } 
 
        }); 
 
    }); 
 
}); 
/*==================================== 
        SCROLL REVEAL ANIMATION 
====================================*/ 
 
const revealElements = document.querySelectorAll( 
    ".product-card, .review-card, .gallery-item, .about, .contact" 
); 
 
function revealOnScroll() { 
 
    const windowHeight = window.innerHeight; 
 
    revealElements.forEach(element => { 
 
        const elementTop = element.getBoundingClientRect().top; 
 
        if (elementTop < windowHeight - 120) { 
 
            element.style.opacity = "1"; 
            element.style.transform = "translateY(0)"; 
 
        } 
 
    }); 
 
} 
 
revealElements.forEach(element => { 
 
    element.style.opacity = "0"; 
    element.style.transform = "translateY(40px)"; 
    element.style.transition = "0.6s ease"; 
 
}); 
 
window.addEventListener("scroll", revealOnScroll); 
window.addEventListener("load", revealOnScroll); 
 

 
/*==================================== 
      ACTIVE NAVIGATION 
====================================*/ 
 
const sections = document.querySelectorAll("section"); 
 
window.addEventListener("scroll", () => { 
 
    let current = ""; 
 
    sections.forEach(section => { 
 
        const sectionTop = section.offsetTop - 120; 
 
        if (scrollY >= sectionTop) { 
 
            current = section.getAttribute("id"); 
 
        } 
 
    }); 
 
    navLinks.forEach(link => { 
 
        link.classList.remove("active"); 
 
        if (link.getAttribute("href") === "#" + current) { 
 
            link.classList.add("active"); 
 
        } 
 
    }); 
 
}); 

/*====================================
        ADD TO CART
====================================*/

// LocalStorage se Cart Load karo

let cart = JSON.parse(localStorage.getItem("cart")) || [];
 
 
const cartButtons = document.querySelectorAll(".cart-btn"); 
const cartCount = document.getElementById("viewCart"); 
/*====================================
        UPDATE CART TOTAL
====================================*/

// Ye function cart ka total amount calculate karega
// aur Cart button me total show karega.

function updateCartButton() {

    let grandTotal = 0;

    cart.forEach(item => {

        // Total: ₹450 se sirf number nikalega

        grandTotal += item.price * item.qty;

    });


    const totalItems = cart.reduce((sum, item) => {
        return sum + Number(item.qty);
    }, 0);

cartCount.textContent = `🛒 Cart (${totalItems})`;
/*====================================
        SAVE CART
====================================*/

// Cart ko LocalStorage me Save karo

localStorage.setItem("cart", JSON.stringify(cart));

/*====================================
        delivery Charges on web
====================================*/
const subTotalElement = document.getElementById("subTotal");
const deliveryChargeElement = document.getElementById("deliveryCharge");
const grandTotalElement = document.getElementById("grandTotal");
const deliveryText = document.getElementById("deliveryText");

let deliveryCharge = 0;

if (grandTotal === 0) {

    deliveryCharge = 0;
    deliveryText.textContent = "🚚 FREE delivery above ₹299";

} else if (grandTotal < 299) {

    deliveryCharge = 30;
    deliveryText.textContent = "🚚 ₹30 Delivery Charges";

} else {

    deliveryCharge = 0;
    deliveryText.textContent = "🎉 FREE Delivery";

}

if (subTotalElement) {
    subTotalElement.textContent = "₹" + grandTotal;
}

if (deliveryChargeElement) {
    deliveryChargeElement.textContent = "₹" + deliveryCharge;
}

if (grandTotalElement) {
    grandTotalElement.textContent = "₹" + (grandTotal + deliveryCharge);
}
}
/*====================================
        DISPLAY CART ITEMS
====================================*/

// Ye function Cart Popup ko refresh karega

function displayCart(){

    cartItems.innerHTML = "";

    // Agar cart empty hai

    if(cart.length === 0){

        cartItems.innerHTML = "<p>Your Cart is Empty 😔</p>";

    document.getElementById("grandTotal").textContent = "₹0";

        return;

    }
    // Cart ke saare items show karo

    cart.forEach((item,index)=>{

        cartItems.innerHTML += `

        <div class="cart-item">

            <h4>${item.product}</h4>

            <p>${item.weight}</p>

            <div class="cart-qty">
                <button class="cart-minus" data-index="${index}">−</button>

                <span>${item.qty}</span>

                <button class="cart-plus" data-index="${index}">+</button>
            </div>

            <p>Total : ₹${item.price * item.qty}</p>

            <button class="remove-btn"
            data-index="${index}">

            🗑 Remove

            </button>

        </div>

        `;

    });

/*====================================
            REMOVE ITEM
====================================*/

document.querySelectorAll(".remove-btn").forEach(button=>{

        button.addEventListener("click",()=>{

            const index = button.dataset.index;

            // Item remove

            cart.splice(index,1);

            // Cart button update

            updateCartButton();

            // Popup refresh

            displayCart();

        });

    });
document.querySelectorAll(".cart-plus").forEach(button => {

    button.addEventListener("click", () => {

        const index = button.dataset.index;

        cart[index].qty++;

        updateCartButton();

        displayCart();

    });

});

document.querySelectorAll(".cart-minus").forEach(button => {

    button.addEventListener("click", () => {

        const index = button.dataset.index;

        if (cart[index].qty > 1) {

            cart[index].qty--;

        } else {

            cart.splice(index, 1);

        }
        updateCartButton();

        displayCart();

    });

});

}
cartButtons.forEach(button => { 
 
    button.addEventListener("click", function () { 
 
        const card = this.parentElement; 
 
        const product = card.querySelector("h3").textContent; 
 
        const weight = card.querySelector(".cake-weight") 
            ? card.querySelector(".cake-weight").value 
            : ""; 
 
        let qty = 1;

        let price;

        if (weight) {
            price = parseInt(weight.match(/\d+$/)[0]);
        } else {
            const priceElement = card.querySelector(".price");

            if (priceElement.dataset.price) {
                price = parseInt(priceElement.dataset.price);
            } else {
                price = parseInt(priceElement.textContent.replace(/[^\d]/g, ""));
            }
        }

        /*====================================
        CHECK DUPLICATE PRODUCT IN CART
        ====================================*/

        // Check karo ki same product aur same weight
        // pehle se cart me hai ya nahi

        const existingItem = cart.find(item =>
            item.product === product &&
            item.weight === weight
        );

        if (existingItem) {

            /*====================================
            UPDATE EXISTING PRODUCT
            ====================================*/

            // Cart me quantity overwrite hogi
            // Add nahi hogi

            existingItem.qty++;

            existingItem.price = price;

        } else {

            // Agar product nahi mila
            // to naya product cart me add karo

            cart.push({

                product,

                weight,

                qty,

                price

            });

        }
     
 
        /*====================================
        UPDATE CART COUNT
        ====================================*/

        updateCartButton();
        displayCart();
        showToast(product + " added to cart 🛒"); 
    }); 
 
}); 
const orderCartBtn = document.getElementById("orderCart"); 
 
/*====================================
      PROFESSIONAL WHATSAPP ORDER
====================================*/

orderCartBtn.addEventListener("click", () => {

if (cart.length === 0) {
    showToast("Your cart is empty 😔");

    return;

}
    let grandTotal = 0;
    let deliveryCharge = 0;

    let message =
` *Aanand Bakery Order*

--------------------------------

`;

    cart.forEach((item)=>{

        message +=`${item.product}*\n`;

        if(item.weight){

            message += `Weight : ${item.weight}\n`;

        }

        message += `Quantity : ${item.qty}\n`;

        message += `Total : ₹${item.price * item.qty}\n\n` ;

        grandTotal += item.price * item.qty;

    });
    if (grandTotal > 0 && grandTotal < 299) {
        deliveryCharge = 30;
    } else {
        deliveryCharge = 0;
    }

message +=
`------------------------------

Subtotal : ₹${grandTotal}

Delivery Charges : ₹${deliveryCharge}

*Grand Total : ₹${grandTotal + deliveryCharge}*

------------------------------

Name :

Mobile :

Address :

Delivery Date :

Delivery Time :

Thank You !`;

    const phone = "918882251977";

    window.open(

`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,

"_blank"

    );
    cart = [];

    updateCartButton();

    displayCart();

});


 /*====================================
        VIEW CART POPUP
====================================*/

// Cart popup elements

const cartModal = document.getElementById("cartModal");
const cartItems = document.getElementById("cartItems");
const closeCart = document.getElementById("closeCart");
const clearCart = document.getElementById("clearCart");

// Cart button click

cartCount.addEventListener("click", () => {

    displayCart();

    // Popup open
    cartModal.style.display="flex";

});

// Close button
if(closeCart){
    closeCart.addEventListener("click",()=>{

        cartModal.style.display="none";

    });
}

// Popup ke bahar click

window.addEventListener("click",(e)=>{

    if(e.target===cartModal){

        cartModal.style.display="none";

    }

});
/*====================================
        CLEAR CART
====================================*/
if(clearCart){
clearCart.addEventListener("click",()=>{

    // Agar Cart pehle se empty hai

    if(cart.length===0){

        alert("Cart is already empty.");

        return;

    }

    // Cart Empty
    cart = [];

    // Cart Button Update

    updateCartButton();

    // Cart Popup Refresh

    displayCart();

});
}
/*====================================
        PAGE LOAD
====================================*/

// Refresh ke baad Cart Button Update

updateCartButton();

/*====================================
        SHOW TOAST
====================================*/

const toast = document.getElementById("toast");

function showToast(message){

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2500);

}
