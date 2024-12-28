document.addEventListener("DOMContentLoaded", () => {
    const userType = document.getElementById("user-type");
    const commonFields = document.getElementById("common-fields");

    // Handle user type selection
    userType.addEventListener("change", (event) => {
        const selectedType = event.target.value;

        // Modify the form behavior if needed (e.g., additional fields for Organization)
        if (selectedType === "Organization") {
            // You can add extra logic for organizations here
            commonFields.style.display = "block";
        } else if (selectedType === "Individual") {
            commonFields.style.display = "block";
        }
    });
});
