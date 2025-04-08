
const adminCredentials = {
  email: "matt.karrar@outlook.de",
  password: "123duft"
};

const orders = [
  { id: "001", name: "Anna Schmidt", product: "Parfumname 1 – 15 ml", status: "Bezahlt" },
  { id: "002", name: "Jonas Weber", product: "Parfumname 1 – 50 ml", status: "Versendet" }
];

document.getElementById("lang-switch").addEventListener("click", () => {
  alert("Mehrsprachigkeit kommt bald 😊");
});

function openProduct(id) {
  document.querySelector(".product-list").classList.add("hidden");
  document.getElementById("product-detail").classList.remove("hidden");
}

function closeProduct() {
  document.getElementById("product-detail").classList.add("hidden");
  document.querySelector(".product-list").classList.remove("hidden");
}

function goToCheckout() {
  document.getElementById("product-detail").classList.add("hidden");
  document.getElementById("checkout").classList.remove("hidden");
}

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("admin-email").value;
  const password = document.getElementById("admin-password").value;

  if (email === adminCredentials.email && password === adminCredentials.password) {
    document.getElementById("admin-login").classList.add("hidden");
    document.getElementById("admin-panel").classList.remove("hidden");
    loadOrders();
  } else {
    alert("Falsche Zugangsdaten.");
  }
});

function loadOrders() {
  const orderList = document.getElementById("order-list");
  orderList.innerHTML = "";
  orders.forEach((order, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${order.id}</td>
      <td>${order.name}</td>
      <td>${order.product}</td>
      <td>
        <select onchange="updateStatus(${index}, this.value)">
          <option ${order.status === "Bezahlt" ? "selected" : ""}>Bezahlt</option>
          <option ${order.status === "Versendet" ? "selected" : ""}>Versendet</option>
          <option ${order.status === "Zugestellt" ? "selected" : ""}>Zugestellt</option>
        </select>
      </td>
      <td><button onclick="notifyCustomer('${order.name}', '${order.status}')">E-Mail senden</button></td>
    `;
    orderList.appendChild(row);
  });
}

function updateStatus(index, newStatus) {
  orders[index].status = newStatus;
}

function notifyCustomer(name, status) {
  alert(`E-Mail an ${name} über Status "${status}" wurde simuliert.`);
}
