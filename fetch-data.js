document.addEventListener("DOMContentLoaded", fetchUserData);

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById("user-list");

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // 1. Clear any existing content
        dataContainer.innerHTML = "";

        // 2. Create a <ul> to hold the user list
        const userList = document.createElement("ul");

        // 3. Loop through users and create list items
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // 4. Append the userList to dataContainer
        dataContainer.appendChild(userList);

    } catch (error) {
        console.error("Error fetching data:", error);
        dataContainer.textContent = "Failed to load user data.";
    }
}
