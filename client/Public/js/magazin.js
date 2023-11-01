// Get references to the popup and button
const popupContainer = document.getElementById("popup-container");
const popup = document.getElementById("popup");
const showPopupButton = document.getElementById("showPopupButton");
const closePopup = document.getElementById("closePopup");

// Function to open the popup
function openPopup() {
    popupContainer.style.display = "flex"; // Use "flex" to center vertically
}

// Function to close the popup
function closePopupFunction() {
    popupContainer.style.display = "none";
}

// Event listeners
showPopupButton.addEventListener("click", openPopup);
closePopup.addEventListener("click", closePopupFunction);
popupContainer.addEventListener("click", (event) => {
    if (event.target === popupContainer) {
        closePopupFunction();
    }
});
