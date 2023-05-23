const API_URL = 'https://localhost:8080'

export const login = (email, password) => {
    return fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify({email, password}),
    })

}