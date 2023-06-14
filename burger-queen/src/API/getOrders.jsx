const API_URL = 'https://burger-queen-api-mock-sand.vercel.app';

const createOrder = async(userId, clientName, selectValue, orderResume, token) => await fetch(`${API_URL}/orders`, {
method: 'POST',
headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
},
body: JSON.stringify({
    userId: userId,
    client: clientName,
    table: selectValue,
    products: orderResume,
    status: 'Pendente',
    dataEntry: new Date()
})
});

export default createOrder;