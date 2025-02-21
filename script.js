document.addEventListener("DOMContentLoaded", () => {
    const articlesList = document.getElementById("articles-list");
    const submissionForm = document.getElementById("submission-form");

    // Fetch and display articles
    if (articlesList) {
        fetch("articles.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch articles.");
                }
                return response.json();
            })
            .then(data => {
                data.forEach(article => {
                    let listItem = document.createElement("li");
                    listItem.innerHTML = `
                        <h3>${article.title}</h3>
                        <p><strong>${article.date}</strong></p>
                        <p>${article.content}</p>
                    `;
                    articlesList.appendChild(listItem);
                });
            })
            .catch(error => console.error("Error loading articles:", error));
    }

    // Handle form submission
    if (submissionForm) {
        submissionForm.addEventListener("submit", event => {
            event.preventDefault();
            alert("Submission received! (This doesn't actually save yet)");
        });
    }
});
