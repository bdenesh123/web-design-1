const products = [
  {
    name: "Moisturizing Cream",
    category: "Skincare",
    price: 29.99,
    rating: 4,
    date: "2023-01-15",
  },
  {
    name: "Shampoo",
    category: "Haircare",
    price: 12.99,
    rating: 3,
    date: "2023-02-10",
  },
  {
    name: "Body Lotion",
    category: "Bodycare",
    price: 19.99,
    rating: 4,
    date: "2023-03-05",
  },
  {
    name: "Anti-Wrinkle Serum",
    category: "Eyecare",
    price: 39.99,
    rating: 5,
    date: "2023-04-20",
  },
  {
    name: "Sunscreen SPF 50",
    category: "Skincare",
    price: 15.99,
    rating: 4,
    date: "2023-05-18",
  },
  {
    name: "Conditioner",
    category: "Haircare",
    price: 14.99,
    rating: 3,
    date: "2023-06-12",
  },
  {
    name: "Hand Cream",
    category: "Bodycare",
    price: 9.99,
    rating: 4,
    date: "2023-07-08",
  },
  {
    name: "Eye Cream",
    category: "Eyecare",
    price: 29.99,
    rating: 5,
    date: "2023-08-25",
  },
  {
    name: "Cleansing Gel",
    category: "Skincare",
    price: 18.99,
    rating: 4,
    date: "2023-09-14",
  },
  {
    name: "Hair Mask",
    category: "Haircare",
    price: 24.99,
    rating: 4,
    date: "2023-10-30",
  },
  {
    name: "Body Wash",
    category: "Bodycare",
    price: 16.99,
    rating: 4,
    date: "2023-11-22",
  },
  {
    name: "Anti-Dark Circle Serum",
    category: "Eyecare",
    price: 34.99,
    rating: 5,
    date: "2023-12-18",
  },
  {
    name: "Facial Toner",
    category: "Skincare",
    price: 22.99,
    rating: 4,
    date: "2024-01-15",
  },
  {
    name: "Leave-in Conditioner",
    category: "Haircare",
    price: 11.99,
    rating: 3,
    date: "2024-02-10",
  },
  {
    name: "Body Scrub",
    category: "Bodycare",
    price: 27.99,
    rating: 4,
    date: "2024-03-05",
  },
  {
    name: "Revitalizing Eye Mask",
    category: "Eyecare",
    price: 49.99,
    rating: 5,
    date: "2024-04-20",
  },
  {
    name: "Acne Treatment Cream",
    category: "Skincare",
    price: 25.99,
    rating: 4,
    date: "2024-05-18",
  },
  {
    name: "Hair Serum",
    category: "Haircare",
    price: 17.99,
    rating: 3,
    date: "2024-06-12",
  },
  {
    name: "Hand Wash",
    category: "Bodycare",
    price: 8.99,
    rating: 3,
    date: "2024-07-08",
  },
  {
    name: "Under Eye Gel",
    category: "Eyecare",
    price: 31.99,
    rating: 4,
    date: "2024-08-25",
  },
  {
    name: "Night Cream",
    category: "Skincare",
    price: 39.99,
    rating: 4,
    date: "2024-09-14",
  },
  {
    name: "Dry Shampoo",
    category: "Haircare",
    price: 13.99,
    rating: 3,
    date: "2024-10-30",
  },
  {
    name: "Hand Sanitizer",
    category: "Bodycare",
    price: 6.99,
    rating: 4,
    date: "2024-11-22",
  },
  {
    name: "Lash Serum",
    category: "Eyecare",
    price: 27.99,
    rating: 5,
    date: "2024-12-18",
  },
  {
    name: "Exfoliating Scrub",
    category: "Skincare",
    price: 19.99,
    rating: 4,
    date: "2025-01-15",
  },
  {
    name: "Curl Defining Cream",
    category: "Haircare",
    price: 15.99,
    rating: 3,
    date: "2025-02-10",
  },
  {
    name: "Body Butter",
    category: "Bodycare",
    price: 21.99,
    rating: 4,
    date: "2025-03-05",
  },
  {
    name: "Eyebrow Gel",
    category: "Eyecare",
    price: 23.99,
    rating: 5,
    date: "2025-04-20",
  },
  {
    name: "Mattifying Moisturizer",
    category: "Skincare",
    price: 34.99,
    rating: 4,
    date: "2025-05-18",
  },
  {
    name: "Volumizing Shampoo",
    category: "Haircare",
    price: 16.99,
    rating: 4,
    date: "2025-06-12",
  },
  {
    name: "Foot Cream",
    category: "Bodycare",
    price: 11.99,
    rating: 3,
    date: "2025-07-08",
  },
  {
    name: "Waterproof Mascara",
    category: "Eyecare",
    price: 24.99,
    rating: 5,
    date: "2025-08-25",
  },
];

// Function to filter products based on user input
let filteredProducts;

function filterProducts() {
  const minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
  const maxPrice = parseFloat(document.getElementById("maxPrice").value);
  const productName = document
    .getElementById("productName")
    .value.toLowerCase();
  const category = document.getElementById("category").value.toLowerCase();
  const sortBy = document.getElementById("sortby").value;

  filteredProducts = products.filter((product) => {
    const isPriceInRange =
      (isNaN(minPrice) || product.price >= minPrice) &&
      (isNaN(maxPrice) || product.price <= maxPrice);

    const isProductNameMatch = product.name.toLowerCase().includes(productName);

    const isCategoryMatch =
      category === "all" || product.category.toLowerCase() === category;

    return isPriceInRange && isProductNameMatch && isCategoryMatch;
  });

  // Sorting based on the selected option
  switch (sortBy) {
    case "Latest":
      filteredProducts.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
      break;
    case "PriceLowToHigh":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "PriceHighToLow":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "RatingLowToHigh":
      filteredProducts.sort((a, b) => a.rating - b.rating);
      break;
    case "RatingHighToLow":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;

    default:
      break;
  }
  currentPage = 1;
  displayProducts(filteredProducts);
}

// To reset filters
function resetFilters() {
  document.getElementById("minPrice").value = "";
  document.getElementById("maxPrice").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("category").value = "all";
  document.getElementById("sortby").value = "Default";

  currentPage = 1;
  filteredProducts = products.slice();
  displayProducts(filteredProducts, currentPage);
}

// Pagination
const productsPerPage = 8;
let currentPage = 1;

function displayProducts(filteredProducts, page = 1) {
  const startIdx = (page - 1) * productsPerPage;
  const endIdx = startIdx + productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIdx, endIdx);

  const filteredProductsContainer = document.getElementById("bs__box2");
  filteredProductsContainer.innerHTML = "";

  if (paginatedProducts.length === 0) {
    filteredProductsContainer.innerHTML = "<h2>No products found.</h2>";
    return;
  }

  paginatedProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("filteredProducts");

    productDiv.innerHTML = `
    <div class="product">
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price.toFixed(2)}</p>
      <p>Rating: ${product.rating}</p>
      <p>Date: ${product.date}</p>
    </div>
    `;

    filteredProductsContainer.appendChild(productDiv);
  });

  updatePagination(filteredProducts.length, page);
}

function updatePagination(totalProducts, currentPage) {
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    li.classList.add("link");
    li.setAttribute("value", i);
    li.addEventListener("click", () => {
      changePage(i);
    });

    if (i === currentPage) {
      li.classList.add("active");
    }

    paginationContainer.appendChild(li);
  }
}

function changePage(newPage) {
  const productsToDisplay = filteredProducts || products;

  const totalPages = Math.ceil(productsToDisplay.length / productsPerPage);

  if (newPage < 1) {
    currentPage = 1;
  } else if (newPage > totalPages) {
    currentPage = totalPages;
  } else {
    currentPage = newPage;
  }

  displayProducts(productsToDisplay, currentPage);
}

// Event listeners to trigger filtering
document
  .getElementById("filterProductsBtn")
  .addEventListener("click", filterProducts);

document.getElementById("resetFilters").addEventListener("click", resetFilters);

document.getElementById("prevBtn").addEventListener("click", () => {
  changePage(currentPage - 1);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  changePage(currentPage + 1);
});

document.getElementById("firstBtn").addEventListener("click", () => {
  changePage(1);
});

document.getElementById("lastBtn").addEventListener("click", () => {
  const productsToDisplay = filteredProducts || products;
  changePage(Math.ceil(productsToDisplay.length / productsPerPage));
});

// Initial display of all products
displayProducts(products);
