document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                const li = document.createElement("li");
                li.textContent = user.name;
                userList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});
