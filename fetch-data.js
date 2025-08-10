// Step 1: Select the Data Container Element
const dataContainer = document.getElementById("api-data");

// Step 2: Define the API URL
const apiUrl = "https://jsonplaceholder.typicode.com/users";

// Step 3: Fetch the user data
async function fetchUserData() {
    try {
        // Clear the "Loading user data..." message
        dataContainer.innerHTML = "";

        // Fetch data from API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 4: Display the user names
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            dataContainer.appendChild(li);
        });

    } catch (error) {
        console.error("Error fetching user data:", error);
        dataContainer.textContent = "Failed to load user data.";
    }
}

// Step 5: Call the function
fetchUserData();
