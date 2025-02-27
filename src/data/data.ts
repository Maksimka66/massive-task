const products = [
    { id: 1, name: "Hoodie 1" },
    { id: 2, name: "Hoodie 2" },
    { id: 3, name: "Hoodie 3" },
];

export const getProducts = () => {
    return products;
};

export const getProductById = (productId: number) => {
    return products.find((product) => product.id === productId);
};
