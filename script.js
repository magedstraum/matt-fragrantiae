
const products = {
  baccarat: {
    name: "Baccarat Rouge",
    description: "Ein sinnlich-orientalischer Duft mit einer Note von Luxus und Magie.",
    image: "baccarat.jpg",
    price15: "10,99",
    price50: "79"
  },
  xerjoff: {
    name: "Xerjoff Alexandria II",
    description: "Ein majestätischer Duft, warm, edel und unvergesslich.",
    image: "xerjoff.jpg",
    price15: "10,99",
    price50: "49"
  }
};

function openProduct(id) {
  const p = products[id];
  document.getElementById("detail-title").innerText = p.name;
  document.getElementById("detail-description").innerText = p.description;
  document.getElementById("detail-image").src = p.image;
  document.getElementById("price15").innerText = p.price15;
  document.getElementById("price50").innerText = p.price50;
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

document.getElementById("lang-switch").addEventListener("click", () => {
  alert("Language switching will be added soon.");
});
