document.addEventListener('DOMContentLoaded', () => {
    // Background Color Change
    document.getElementById('changeColorBtn').addEventListener('click', function() {
        const colors = ['#f8f9fa', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });

    // Display Current Date and Time
    function updateDateTime() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        document.getElementById('currentDateTime').innerText = now.toLocaleString(undefined, options);
    }

    // Update the date and time every second
    setInterval(updateDateTime, 1000);
    updateDateTime(); // Initial call
});



document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', (e) => {
        let isValid = true;
        let errorMessage = '';

        // Check required fields
        if (nameInput.value.trim() === '') {
            isValid = false;
            errorMessage += 'Name is required.\n';
        }

        if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
            isValid = false;
            errorMessage += 'A valid email is required.\n';
        }

        if (messageInput.value.trim() === '') {
            isValid = false;
            errorMessage += 'Message cannot be empty.\n';
        }

        if (!isValid) {
            alert(errorMessage);
            e.preventDefault(); // Prevent form submission
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

            // Optional: Close other open answers
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.nextElementSibling.style.display = 'none';
                }
            });
        });
    });
});

// JavaScript to handle opening and closing of the popup form
document.addEventListener('DOMContentLoaded', () => {
    const openFormBtn = document.getElementById('openFormBtn');
    const popupForm = document.getElementById('popupForm');
    const closeFormBtn = document.getElementById('closeFormBtn');

    // Function to open the popup form
    openFormBtn.addEventListener('click', () => {
        popupForm.style.display = 'flex';
    });

    // Function to close the popup form
    closeFormBtn.addEventListener('click', () => {
        popupForm.style.display = 'none';
    });

    // Close popup if clicking outside of form content
    popupForm.addEventListener('click', (event) => {
        if (event.target === popupForm) {
            popupForm.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Selecting the star elements for the rating system
    const stars = document.querySelectorAll('.rating-system .star');
    const ratingMessage = document.getElementById('ratingMessage');

    // Star rating event listener to handle star selection
    stars.forEach(star => {
        star.addEventListener('click', () => {
            // Remove "selected" class from all stars, then add it to the clicked star and all previous ones
            stars.forEach(s => s.classList.remove('selected'));
            star.classList.add('selected');
            const ratingValue = star.getAttribute('data-value');

            // Change color of the selected star and all previous stars
            for (let i = 0; i < ratingValue; i++) {
                stars[i].classList.add('selected');
            }

            // Update the rating message based on selection
            ratingMessage.textContent = `You rated us ${ratingValue} star${ratingValue > 1 ? 's' : ''}!`;
        });
    });

    // Selecting button and message element to dynamically update content
    const updateMessageBtn = document.getElementById('updateMessageBtn');
    const dynamicMessage = document.getElementById('dynamicMessage');

    // Button event listener to update message content when clicked
    updateMessageBtn.addEventListener('click', () => {
        dynamicMessage.textContent = "Thanks for clicking the button! The message has changed.";
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggleBtn');

    // Function to apply the current theme
    function applyTheme(theme) {
        document.body.classList.remove('day-theme', 'night-theme');
        document.body.classList.add(theme);

        // Update the header styles
        const header = document.querySelector('header');
        header.classList.remove('day-theme', 'night-theme');
        header.classList.add(theme);
        
        // Update button text based on current theme
        themeToggleBtn.textContent = theme === 'night-theme' ? 'Switch to Day Theme' : 'Switch to Night Theme';
    }

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'day-theme';
    applyTheme(savedTheme);

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('night-theme') ? 'night-theme' : 'day-theme';
        const newTheme = currentTheme === 'night-theme' ? 'day-theme' : 'night-theme';

        // Apply the new theme
        applyTheme(newTheme);

        // Save the new theme to localStorage
        localStorage.setItem('theme', newTheme);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.getElementById('readMoreBtn');
    const moreContent = document.getElementById('moreContent');

    readMoreBtn.addEventListener('click', () => {
        // Check if the content is hidden or visible
        if (moreContent.classList.contains('hidden')) {
            moreContent.classList.remove('hidden');
            moreContent.style.opacity = 1; // Fade in
            readMoreBtn.textContent = 'Read Less'; // Change button text
        } else {
            moreContent.style.opacity = 0; // Fade out
            setTimeout(() => {
                moreContent.classList.add('hidden'); // Hide after fade out
            }, 500); // Wait for fade-out duration
            readMoreBtn.textContent = 'Read More'; // Change button text back
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const resetBtn = document.getElementById('resetBtn');

    resetBtn.addEventListener('click', () => {
        // Clear all input fields in the form
        document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => {
            input.value = '';
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    let currentIndex = 0;

    // Set focus to the active menu item based on the current page URL
    navLinks.forEach((link, index) => {
        if (link.href === window.location.href) {
            currentIndex = index; // Set currentIndex to the index of the current page
            link.classList.add('active'); // Optionally, you can add an 'active' class for styling
            link.focus();
        }
    });

    // Function to handle keydown events
    function handleKeyDown(event) {
        if (event.key === 'ArrowRight') {
            // Move to the next item
            currentIndex = (currentIndex + 1) % navLinks.length;
            navLinks[currentIndex].focus();
            event.preventDefault(); // Prevent default scrolling behavior
        } else if (event.key === 'ArrowLeft') {
            // Move to the previous item
            currentIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
            navLinks[currentIndex].focus();
            event.preventDefault(); // Prevent default scrolling behavior
        }
    }

    // Attach the keydown event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('keydown', handleKeyDown);
    });
});
// scripts.js

// Variables for form elements
const formSteps = document.querySelectorAll('.form-step');
let currentStep = 0;

// Show the initial step
formSteps[currentStep].classList.add('active-step');

// Callback function to go to the next step
function nextStep() {
    if (currentStep < formSteps.length - 1) {
        formSteps[currentStep].classList.remove('active-step');
        currentStep++;
        formSteps[currentStep].classList.add('active-step');
    }
}

// Callback function to go to the previous step
function previousStep() {
    if (currentStep > 0) {
        formSteps[currentStep].classList.remove('active-step');
        currentStep--;
        formSteps[currentStep].classList.add('active-step');
    }
}

// Function to submit the form
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const favoriteCharacter = document.getElementById('favoriteCharacter').value;

    // Simulate sending data with Fetch (could be replaced with an actual API endpoint)
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, favoriteCharacter }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('responseMessage').innerText = 'Thank you for signing up!';
        // Optionally reset form and return to the first step
        currentStep = 0;
        formSteps.forEach(step => step.classList.remove('active-step'));
        formSteps[currentStep].classList.add('active-step');
        document.getElementById('multiStepForm').reset();
    })
    .catch(error => {
        document.getElementById('responseMessage').innerText = `Error: ${error.message}`;
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const products = document.querySelectorAll('.product-card');

    function filterProducts() {
        const selectedCategory = categoryFilter.value;
        const selectedPrice = priceFilter.value;

        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            const productPrice = parseFloat(product.querySelector('p').textContent.match(/\$([\d.]+)/)[1]); // Extracting price from the text

            // Determine if the product matches the selected category
            let categoryMatch = (selectedCategory === 'all' || productCategory === selectedCategory);
            let priceMatch;

            // Determine if the product matches the selected price range
            switch (selectedPrice) {
                case 'low':
                    priceMatch = (productPrice < 15);
                    break;
                case 'mid':
                    priceMatch = (productPrice >= 15 && productPrice < 50);
                    break;
                case 'high':
                    priceMatch = (productPrice >= 50);
                    break;
                default:
                    priceMatch = true; // 'all'
            }

            // Show product if it matches both category and price, hide otherwise
            if (categoryMatch && priceMatch) {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        });
    }

    // Event listeners for filter changes
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);

    // Initial filtering to hide products that do not match default selections
    filterProducts(); 
});
// Array of product objects
const products = [
    {
        name: "Spider-Man Action Figure",
        category: "action-figures",
        price: 55,
        image: "https://example.com/spiderman.jpg" // Placeholder image URL
    },
    {
        name: "Avengers Comic",
        category: "comics",
        price: 15,
        image: "https://example.com/avengers-comic.jpg" // Placeholder image URL
    },
    {
        name: "Iron Man T-Shirt",
        category: "apparel",
        price: 30,
        image: "https://example.com/ironman-shirt.jpg" // Placeholder image URL
    },
    {
        name: "Thor Action Figure",
        category: "action-figures",
        price: 25,
        image: "https://example.com/thor.jpg" // Placeholder image URL
    },
];

// Function to display products
function displayProducts(productsArray) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Clear previous products

    productsArray.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Initial display of all products
displayProducts(products);


// Function to update the UI based on authentication status
function updateUI() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const registrationSection = document.getElementById('registrationSection');
    const loginSection = document.getElementById('loginSection');
    const welcomeSection = document.getElementById('welcomeSection');
    const userDisplay = document.getElementById('userDisplay');

    if (username) {
        registrationSection.classList.add('hidden');
        loginSection.classList.add('hidden');
        welcomeSection.classList.remove('hidden');
        userDisplay.textContent = username;
    } else {
        registrationSection.classList.remove('hidden');
        loginSection.classList.remove('hidden');
        welcomeSection.classList.add('hidden');
    }
}


document.addEventListener("DOMContentLoaded", function() {
    // Authentication Logic
    const userProfile = document.getElementById("userProfile");
    const authContainer = document.getElementById("authContainer");
    const loginForm = document.getElementById("loginForm");
    const logoutBtn = document.getElementById("logoutBtn");

    function displayUserProfile() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            userProfile.innerHTML = `<img src="${user.photo}" alt="Profile Picture"> <span>${user.name}</span>`;
            authContainer.style.display = "none";
            logoutBtn.style.display = "block";
        } else {
            userProfile.innerHTML = "";
            authContainer.style.display = "block";
            logoutBtn.style.display = "none";
        }
    }

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Simple authentication logic for demo
        if (email === "user@example.com" && password === "password") {
            const user = {
                name: "John Doe",
                photo: "https://via.placeholder.com/50"
            };
            localStorage.setItem("user", JSON.stringify(user));
            displayUserProfile();
        } else {
            alert("Invalid email or password.");
        }
    });

    logoutBtn.addEventListener("click", function() {
        localStorage.removeItem("user");
        displayUserProfile();
    });

    displayUserProfile();

    // Product Filtering Logic
    const productContainer = document.getElementById("productContainer");
    const categoryFilter = document.getElementById("categoryFilter");

    const products = [
        { name: "Captain America", category: "characters" },
        { name: "Iron Man", category: "characters" },
        { name: "Avengers: Endgame", category: "movies" },
        { name: "Spider-Man", category: "characters" }
    ];

    function displayProducts() {
        const filter = categoryFilter.value;
        productContainer.innerHTML = "";  // Clear previous products

        const filteredProducts = products.filter(product => filter === "all" || product.category === filter);
        filteredProducts.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.textContent = product.name;
            productContainer.appendChild(productDiv);
        });

        localStorage.setItem("selectedFilter", filter);
    }

    categoryFilter.addEventListener("change", displayProducts);

    // Apply saved filter on load
    const savedFilter = localStorage.getItem("selectedFilter");
    if (savedFilter) {
        categoryFilter.value = savedFilter;
    }
    displayProducts();
});
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("triggerButton");
    const sound = document.getElementById("notificationSound");
    const animatedElement = document.getElementById("animatedElement");

    // Play sound and trigger animation on button click
    button.addEventListener("click", function () {
        // Play the sound
        sound.play();

        // Trigger the animation by adding the bounce class
        animatedElement.classList.add("bounce");

        // Remove the bounce class after the animation completes (0.5s duration)
        setTimeout(function () {
            animatedElement.classList.remove("bounce");
        }, 500);
    });
});
const sound = new Audio('/Users/macbook/Downloads/level-up-191997.mp3');
document.getElementById("buttonID").addEventListener("click", () => {
    sound.play();
});

