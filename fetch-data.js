document.addEventListener("DOMContentLoaded", fetchUserData);

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            dataContainer.appendChild(li);
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
