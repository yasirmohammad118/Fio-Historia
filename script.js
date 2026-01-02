/* ---------- PRODUCT DATA ---------- */
const products = [
    {
        name: "Fio Historia 1",
        description: "A historical fiction novel set in ancient Rome.",
        price: 10,
        image: "assets/container/pic1.jpg"
    },
    {
        name: "Fio Historia 2",
        description: "A historical fiction novel set in ancient Rome.",
        price: 20,
        image: "assets/container/pic2.jpg"
    },
    {
        name: "Fio Historia 3",
        description: "A historical fiction novel set in ancient Rome.",
        price: 0,
        image: "assets/container/pic3.jpg"
    },
    {
        name: "Fio Historia 4",
        description: "A historical fiction novel set in ancient Rome.",
        price: 0,
        image: "assets/container/pic4.jpg"
    }
];

/* ---------- RENDER PRODUCTS ---------- */
function displayProducts() {
    const productContainer = document.getElementById("prod");
    if (!productContainer) return;

    productContainer.innerHTML = "";

    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.dataset.index = index;

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width:100%; height:300px; object-fit:cover; border-radius:10px;">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>${product.price > 0 ? `Price: $${product.price}` : "Price: On Request"}</p>
            <button class="cart-button">Buy Now</button>
        `;

        productContainer.appendChild(productDiv);
    });
}

/* ---------- EVENT DELEGATION (BEST PRACTICE) ---------- */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("cart-button")) {
        const productCard = e.target.closest(".product");
        const index = productCard?.dataset.index;
        if (index !== undefined) {
            orderViaWhatsapp(products[index]);
        }
    }
});

/* ---------- DOM READY ---------- */
document.addEventListener("DOMContentLoaded", displayProducts);

/* ---------- WHATSAPP ORDER ---------- */
function orderViaWhatsapp(product) {
    const phone = "917081646518"; // e.g. 9198XXXXXXXX
    if (!phone) {
        alert("WhatsApp number not set.");
        return;
    }

    let message = `Hi Hanifa,\n\nI would like to order:\n\n`;
    message += `• ${product.name}\n`;
    message += `• ${product.price > 0 ? `Price: $${product.price}` : "Price: On Request"}\n`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
    const heroImages = [
        "assets/container/pic1.jpg",
        "assets/container/pic2.jpg",
        "assets/container/pic3.jpg",
        "assets/container/pic4.jpg"
    ];

    let heroIndex = 0;
    const mainImage = document.getElementById("mainImage");

    if (!mainImage) return;

    setInterval(() => {
        mainImage.style.opacity = 0;

        setTimeout(() => {
            heroIndex = (heroIndex + 1) % heroImages.length;
            mainImage.src = heroImages[heroIndex];
            mainImage.style.opacity = 1;
        }, 1000);
    }, 5000);
});

// ---------- HAMBURGER TOGGLE ----------
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('.nav');
    const toggle = document.querySelector('.hamburger');
    const navList = document.getElementById('nav-list');
    if (!nav || !toggle || !navList) return;

    toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });
});

