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
