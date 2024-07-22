document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for items and orders

    const orders = [
        { id: 1, customer: 'John Doe', items: 'Nike Air Max (2)', total_price: 240, status: 'unpaid' },
        { id: 2, customer: 'Jane Smith1', items: 'Nike ZoomX (1)', total_price: 150, status: 'in delivery' },
        { id: 3, customer: 'Jane Smith2', items: 'Nike ZoomX (2)', total_price: 150, status: 'in delivery' },
        { id: 4, customer: 'Jane Smith3', items: 'Nike ZoomX (3)', total_price: 150, status: 'in delivery' },
        { id: 5, customer: 'Jane Smith4', items: 'Nike ZoomX (4)', total_price: 150, status: 'in delivery' },
        { id: 6, customer: 'Jane Smith5', items: 'Nike ZoomX (5)', total_price: 150, status: 'in delivery' },

    ];


    // Display orders in the table
    const orderTableBody = document.querySelector('#orders tbody');
    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.items}</td>
            <td>${order.total_price}</td>
            <td>${order.status}</td>
            <td>
                <button onclick="updateOrderStatus(${order.id})">Update Status</button>
            </td>
        `;
        orderTableBody.appendChild(row);
    });

    // Handle form submission for adding/editing items
    const form = document.querySelector('#item-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Logic to save item
        alert('Item saved successfully!');
        // Refresh the page or update the table
    });

    // Navigation logic
    const navLinks = document.querySelectorAll('aside nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            document.querySelectorAll('main section').forEach(section => {
                section.style.display = 'none';
            });
            targetSection.style.display = 'block';
        });
    });

    // Initially show the overview section
    document.querySelector('#overview').style.display = 'block';
});

function editItem(id) {
    // Logic to populate form with item details for editing
}

function deleteItem(id) {
    // Logic to delete item
    alert('Item deleted successfully!');
    // Refresh the page or update the table
}

function updateOrderStatus(id) {
    // Logic to update order status
    alert('Order status updated successfully!');
    // Refresh the page or update the table
}


document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 10;
    const items = [
        { id: 1, name: 'Nike Air Max', price: 120, quantity: 50 },
        { id: 2, name: 'Nike ZoomX1', price: 130, quantity: 30 },
        { id: 3, name: 'Nike ZoomX2', price: 120, quantity: 30 },
        { id: 4, name: 'Nike ZoomX3', price: 110, quantity: 30 },
        { id: 5, name: 'Nike ZoomX4', price: 100, quantity: 30 },
        { id: 6, name: 'Nike ZoomX5', price: 130, quantity: 30 },

    ];
    const tbody = document.querySelector("#items tbody");
    const pageNumbers = document.querySelector(".pagination .page-numbers");
    const itemForm = document.getElementById("item-form");
    const itemPriceInput = document.getElementById("item-price");
    const priceError = document.getElementById("price-error");

    itemForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const price = parseFloat(itemPriceInput.value);
        if (price < 0) {
            priceError.style.display = "block";
        } else {
            priceError.style.display = "none";
            // Process the form submission (e.g., save the item)
            // You can add the code to save the item here
        }
    });
    
    function renderItems(page = 1) {
        tbody.innerHTML = "";
        const start = (page - 1) * itemsPerPage;
        const end = page * itemsPerPage;
        const paginatedItems = items.slice(start, end);

        paginatedItems.forEach(item => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    function renderPagination() {
        pageNumbers.innerHTML = "";
        const pageCount = Math.ceil(items.length / itemsPerPage);
        for (let i = 1; i <= pageCount; i++) {
            const a = document.createElement("a");
            a.href = "#";
            a.classList.add("page-number");
            a.textContent = i;
            a.addEventListener("click", (e) => {
                e.preventDefault();
                renderItems(i);
            });
            pageNumbers.appendChild(a);
        }
    }

    renderItems();
    renderPagination();
});