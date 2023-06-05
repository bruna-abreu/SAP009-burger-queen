const API_URL = 'https://burger-queen-api-mock-sand.vercel.app'

const getProducts = async () => { 
    const response = await fetch(`${API_URL}/products`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.json()
}

export default getProducts;