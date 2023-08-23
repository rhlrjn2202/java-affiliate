document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { imgSrc: 'assets/products/img.jpg', affiliateLink: 'https://www.rahulji.cc' },
        { imgSrc: 'assets/products/img.jpg', affiliateLink: 'https://www.rahulji.cc' },
        { imgSrc: 'assets/products/img.jpg', affiliateLink: 'https://www.rahulji.cc' },
        { imgSrc: 'assets/products/img.jpg', affiliateLink: 'https://www.rahulji.cc' },
        { imgSrc: 'assets/products/img.jpg', affiliateLink: 'https://www.rahulji.cc' },
        { imgSrc: 'assets/products/img.jpg', affiliateLink: 'https://www.rahulji.cc' },
        { imgSrc: 'assets/products/img.jpg', affiliateLink: 'https://www.rahulji.cc' },
        { imgSrc: 'assets/products/img.jpg', affiliateLink: 'https://www.rahulji.cc' },
        // Add more products here
    ];

    const productGrid = document.querySelector('.product-grid');

    products.forEach(product => {
        const productBox = document.createElement('div');
        productBox.classList.add('product-box');

        const productImage = document.createElement('img');
        productImage.src = product.imgSrc;
        productImage.alt = 'Product Image';

        const affiliateLink = document.createElement('a');
        affiliateLink.href = product.affiliateLink;
        affiliateLink.target = '_blank'; // Open link in new tab
        affiliateLink.appendChild(productImage);

        productBox.appendChild(affiliateLink);
        productGrid.appendChild(productBox);
    });

    // Get the current year
    const currentYear = new Date().getFullYear();

    // Set the current year in the span element
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = currentYear;
    }

    // Disable right mouse click
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    // Deny access to browser developer options
    let devtools = false;

    setInterval(function () {
        if (window.devtools.open) {
            devtools = true;
            // You can take an action here, like redirecting or showing a warning
            // For example:
            // window.location.href = 'access-denied-page.html';
        }
    }, 1000);

    // Upload page specific code
    const productForm = document.getElementById('productForm');
    const imageInput = document.getElementById('imageInput');
    const urlInput = document.getElementById('urlInput');

    productForm.addEventListener('submit', async function (event) {
        // Your upload page script code
        event.preventDefault();

        const imgSrc = imageInput.value;
        const affiliateLink = urlInput.value;

        if (imgSrc && affiliateLink) {
            const product = { imgSrc, affiliateLink };
            addProductBox(product); // Call the addProductBox function to dynamically add the new product box
        }

        // Clear form inputs
        productForm.reset();
    });
});
