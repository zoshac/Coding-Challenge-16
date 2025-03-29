// Task 2 Fetching Products 
function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Unable to load");
        }
        return response.json();
    })
    .then(data => {
        data.forEach(product => {
            console.log(fetchProductsThen.fields.name);
        });
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
}

// Task 3 Fetching with Async 
async function fetchProductsAsync() {
    const url = "https://www.course-api.com/javascript-store-products";
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Unable to Load");
        }
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}

// Task 4 Displaying the Products 
function displayProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

//choosing the first 5 products 
product.slice(0,5).forEach(product => {
    const {name, price, image } = product.fields;

// creating product card 
const productCard = document.createElement("div");
productCard.classList.add("product-card");

//appending image,name and price 
const img = document.createElement("img");
img.src = image[1].url;
img.alt = name;
productCard.appendChild(img);

const productName = document.createElement("h2");
productName.textContent = name;
productCard.appendChild(productName);

const productPrice = document.createElement("p");
productPrice.textContent = `$${(price / 1000).toFixed(2)}`;
productCard.appendChild(productPrice);

container.appendChild(productCard);
});
}

//