const productsMock = [
  {
    id: "156165-15561717-156547-sdfsdf-dfg-",
    title: "this is the first product",
    category: "shoes",
    subcategory: ["woman", "discount", "news"],
    price: 15.5,
    productImage: "http://dummyimage.com/800x600.png/ff4444/ffffff",
    description: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    productGalery: [
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    ],
    prouctRatin: 5,
  },
];

function filteredProduct(category) {
  return productsMock.filter((product) => product.category === category);
}

class ProductServicesMock {
  async getProducts() {
    return Promise.resolve(productsMock);
  }

  async createProducti() {
    return Promise.resolve(productsMock[0]);
  }
}

module.exports = {
  productsMock,
  filteredProduct,
  ProductServicesMock,
};
