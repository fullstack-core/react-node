export async function getAllUsers() {
    const response = await fetch('http://localhost:5000/api/users')
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch('http://localhost:5000/api/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: data })
    })
    return await response.json();
}