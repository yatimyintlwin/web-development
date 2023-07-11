function getProducts() {
  fetch("https://fakestoreapi.com/products?limit=5")
    .then((res) => res.json())
    .then((products) => {
      const categories = products.map((p) => p.category);
      console.log(categories);
    });
}

getProducts();
