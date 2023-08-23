document.addEventListener('DOMContentLoaded', function () {
    const productForm = document.getElementById('productForm');
    const imageInput = document.getElementById('imageInput');
    const urlInput = document.getElementById('urlInput');

    productForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', imageInput.files[0]);
        formData.append('url', urlInput.value);

        try {
            const response = await fetch('/.netlify/functions/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Product uploaded successfully!');
                imageInput.value = '';
                urlInput.value = '';
            } else {
                alert('Product upload failed. Please try again later.');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while uploading the product.');
        }
    });

    // Get the current year
    const currentYear = new Date().getFullYear();
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = currentYear;
    }
});
