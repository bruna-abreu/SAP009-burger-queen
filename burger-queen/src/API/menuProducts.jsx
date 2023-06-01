const API_URL = 'https://burger-queen-api-mock-sand.vercel.app'

const getProducts = (token) => fetch(`${API_URL}/products`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

export default getProducts;