/* ==========================================
T-MONEY RECORDS
INTERACTIVE JAVASCRIPT
========================================== */


/* ==========================================
FLYING MONEY
========================================== */

const moneyContainer =
document.getElementById("money-background");

const moneySymbols = [
"💸",
"💵",
"💰",
"💲"
];

function createMoney() {

const money =
document.createElement("div");

money.className = "money";

money.textContent =
moneySymbols[
Math.floor(
Math.random() * moneySymbols.length
)
];

money.style.left =
Math.random() * 100 + "vw";

money.style.fontSize =
(20 + Math.random() * 30) + "px";

money.style.animationDuration =
(7 + Math.random() * 8) + "s";

moneyContainer.appendChild(money);


setTimeout(() => {

money.remove();

}, 15000);
}


/* Constant stream of money */

setInterval(createMoney, 900);


/* Initial money */

for (let i = 0; i < 10; i++) {

setTimeout(
createMoney,
i * 500
);

}


/* ==========================================
BACKGROUND RECORDS
========================================== */

const recordsContainer =
document.getElementById(
"records-background"
);


function createBackgroundRecord() {

const record =
document.createElement("div");

record.className =
"background-record";

const size =
100 + Math.random() * 250;

record.style.width =
size + "px";

record.style.height =
size + "px";

record.style.left =
Math.random() * 100 + "vw";

record.style.top =
Math.random() * 100 + "vh";

record.style.animationDuration =
(20 + Math.random() * 30) + "s";

recordsContainer.appendChild(record);

}


/* Create background vinyl */

for (let i = 0; i < 12; i++) {

createBackgroundRecord();

}


/* ==========================================
SHOPPING CART
========================================== */

let cart = [];


function addToCart(name, price) {

cart.push({
name: name,
price: price
});

updateCart();

/* Small visual confirmation */

const button =
event.target;

const original =
button.textContent;

button.textContent =
"ADDED ✓";

setTimeout(() => {

button.textContent =
original;

}, 1200);

}


function updateCart() {

const count =
document.getElementById(
"cart-count"
);

const items =
document.getElementById(
"cart-items"
);

const total =
document.getElementById(
"cart-total"
);


count.textContent =
cart.length;


items.innerHTML = "";


let totalPrice = 0;


cart.forEach((item, index) => {

totalPrice += item.price;


const row =
document.createElement("div");

row.className =
"cart-item";


row.innerHTML = `
<span>
${item.name}
</span>

<span>
$${item.price.toFixed(2)}
<button
onclick="removeFromCart(${index})"
style="
margin-left:10px;
background:none;
color:#f5c542;
border:none;
cursor:pointer;
"
>
×
</button>
</span>
`;


items.appendChild(row);

});


total.textContent =
totalPrice.toFixed(2);

}


function removeFromCart(index) {

cart.splice(index, 1);

updateCart();

}


/* ==========================================
CART MODAL
========================================== */

function openCart() {

document
.getElementById("cart-modal")
.classList
.add("active");

}


function closeCart() {

document
.getElementById("cart-modal")
.classList
.remove("active");

}


/* Close modal by clicking outside */

document
.getElementById("cart-modal")
.addEventListener(
"click",
function(event) {

if (
event.target === this
) {

closeCart();

}

}
);


/* ==========================================
CHECKOUT
========================================== */

function checkout() {

if (cart.length === 0) {

alert(
"Your TMR bag is empty."
);

return;

}


alert(
"TMR CHECKOUT\n\n" +
"Your order is ready!\n\n" +
"Connect Stripe, PayPal, or another payment processor here to activate real checkout."
);

}


/* ==========================================
TMR RADIO
========================================== */

let musicPlaying = false;


function toggleMusic() {

const status =
document.getElementById(
"music-status"
);

const button =
document.querySelector(
".play-button"
);


musicPlaying =
!musicPlaying;


if (musicPlaying) {

button.textContent =
"⏸ PAUSE TMR";

status.textContent =
"TMR RADIO: PLAYING 🔥";

} else {

button.textContent =
"▶ PLAY TMR";

status.textContent =
"TMR RADIO: OFFLINE";

}

}


/* ==========================================
SCROLL REVEAL
========================================== */

const observer =
new IntersectionObserver(
entries => {

entries.forEach(entry => {

if (
entry.isIntersecting
) {

entry.target.style.opacity =
"1";

entry.target.style.transform =
"translateY(0)";

}

});

},
{
threshold: .15
}
);


document
.querySelectorAll(
".product-card, .about-section, .records-section"
)
.forEach(element => {

element.style.opacity =
"0";

element.style.transform =
"translateY(40px)";

element.style.transition =
"opacity .8s ease, transform .8s ease";

observer.observe(element);

});


/* ==========================================
RANDOM GOLD SPARKS
========================================== */

function createSpark() {

const spark =
document.createElement("div");

spark.style.position =
"fixed";

spark.style.width =
"3px";

spark.style.height =
"3px";

spark.style.background =
"#f5c542";

spark.style.borderRadius =
"50%";

spark.style.left =
Math.random() * 100 + "vw";

spark.style.top =
Math.random() * 100 + "vh";

spark.style.zIndex =
"1";

spark.style.pointerEvents =
"none";

spark.style.boxShadow =
"0 0 10px #f5c542";

document.body.appendChild(
spark
);


spark.animate(
[
{
opacity: 0,
transform: "scale(0)"
},
{
opacity: 1,
transform: "scale(1)"
},
{
opacity: 0,
transform: "scale(0)"
}
],
{
duration:
1000 + Math.random() * 2000
}
);


setTimeout(
() => spark.remove(),
3000
);

}


setInterval(
createSpark,
700
);
