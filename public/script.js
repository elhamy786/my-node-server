document.addEventListener("DOMContentLoaded", () => {
    const galaxyContainer = document.getElementById("galaxy-container");

    // Fetch galaxies data from the API
    fetch('/api/galaxies')
        .then(response => response.json())
        .then(galaxies => {
            galaxies.forEach(galaxy => {
                // Create a container for each galaxy
                const galaxyDiv = document.createElement("div");
                galaxyDiv.classList.add("galaxy");

                // Create HTML content for the galaxy
                galaxyDiv.innerHTML = `
                    <h2>${galaxy.name}</h2>
                    <img src="${galaxy.image}" alt="${galaxy.name}" />
                    <p><strong>Type:</strong> ${galaxy.type}</p>
                    <p><strong>Distance:</strong> ${galaxy.distance}</p>
                    <p>${galaxy.description}</p>
                `;

                // Append the galaxyDiv to the container
                galaxyContainer.appendChild(galaxyDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching galaxy data:', error);
        });
});
