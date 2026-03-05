const API = "http://YOUR_BACKEND_URL:5000";

async function fetchUsers() {
    const res = await fetch(`${API}/users`);
    const data = await res.json();
    const list = document.getElementById("userList");
    list.innerHTML = "";

    data.forEach(user => {
        list.innerHTML += `
            <li>
                ${user.name} (${user.email})
                <button onclick="deleteUser(${user.id})">Delete</button>
            </li>`;
    });
}

async function addUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    await fetch(`${API}/users`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, email})
    });

    fetchUsers();
}

async function deleteUser(id) {
    await fetch(`${API}/users/${id}`, { method: "DELETE" });
    fetchUsers();
}

fetchUsers();