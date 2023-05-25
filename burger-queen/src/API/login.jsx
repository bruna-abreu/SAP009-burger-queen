const API_URL = 'https://burger-queen-api-mock-sand.vercel.app'

const login = async (email, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify({email, password}),
    })
    return response.json()
}

export default login