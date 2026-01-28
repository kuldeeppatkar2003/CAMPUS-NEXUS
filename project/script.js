document.addEventListener('DOMContentLoaded', () => {
    const productListDiv = document.getElementById('product-list');

    // Simulate fetching products from the database
    const products = [
        {
            id: 1,
            name: 'Beginner ML Kit',
            description: 'Great for learning the basics of ML.',
            price: '$49.99',
            image: 'kit1.jpg',
        },
        {
            id: 2,
            name: 'Intermediate ML Kit',
            description: 'Ideal for understanding intermediate concepts.',
            price: '$99.99',
            image: 'kit2.jpg',
        },
           {
             id: 3,
            name: 'Advanced ML Kit',
            description: 'For advanced users.',
            price: '$149.99',
            image: 'kit3.jpg',
        }
    ];

    // Generate HTML for each product
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${product.price}</div>
            <button>Add to Cart</button>
        `;
        productListDiv.appendChild(productDiv);
    });
});

function changeImage(thumbnail) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
}