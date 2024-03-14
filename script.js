document.addEventListener("DOMContentLoaded", function() {
    const dashboardLink = document.getElementById("dashboard-link");
    const productsLink = document.getElementById("products-link");
    const ordersLink = document.getElementById("orders-link");
    const calendarLink = document.getElementById("calendar-link");

    const dashboardSection = document.getElementById("dashboard");
    const productsSection = document.getElementById("products");
    const ordersSection = document.getElementById("orders");
    const calendarSection = document.getElementById("calendar");

    const manageProductsBtn = document.getElementById("manageProductsBtn");
    const viewOrdersBtn = document.getElementById("viewOrdersBtn");

    dashboardLink.addEventListener("click", function() {
        showSection(dashboardSection);
    });

    productsLink.addEventListener("click", function() {
        showSection(productsSection);
    });

    ordersLink.addEventListener("click", function() {
        showSection(ordersSection);
    });

    calendarLink.addEventListener("click", function() {
        showSection(calendarSection);
    });

    manageProductsBtn.addEventListener("click", function() {
        showSection(productsSection);
    });

    viewOrdersBtn.addEventListener("click", function() {
        showSection(ordersSection);
    });

    function showSection(section) {
        const sections = [dashboardSection, productsSection, ordersSection, calendarSection];
        sections.forEach(function(s) {
            s.classList.add("hidden");
        });
        section.classList.remove("hidden");
    }
});
