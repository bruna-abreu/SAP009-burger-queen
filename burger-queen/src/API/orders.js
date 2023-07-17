const API_URL = 'https://burger-queen-api-mock-sand.vercel.app';
// const API_URL = 'http://localhost:8080'

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

const showOrders = async (token) => { 
  const response = await fetch(`${API_URL}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response)
  return response.json()
}

export {createOrder, showOrders};

