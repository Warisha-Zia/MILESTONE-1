document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggle-skills");
    var skillSection = document.getElementById("Skills");

    toggleButton.addEventListener("click", function () {
        if (skillSection.style.display === "none") {
            skillSection.style.display = "block";
            toggleButton.textContent = "less";
        } else {
            skillSection.style.display = "none";
            toggleButton.textContent = "more";
        }
    });
});