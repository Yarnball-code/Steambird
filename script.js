document.addEventListener("DOMContentLoaded", () => {
    fetch("articles.json")
        .then(response => response.json())
        .then(data => {
            const articlesList = document.getElementById("articles-list");
            data.forEach(article => {
                let listItem = document.createElement("li");
                listItem.innerHTML = `<strong>${article.title}</strong> - ${article.date}<br>${article.content}`;
                articlesList.appendChild(listItem);
            });
        });

    document.getElementById("submission-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Submission received! (This doesn't actually save yet)");
    });
});
