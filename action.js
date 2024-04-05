function askForCookieConsent() {
    var consent = confirm("This website uses cookies to improve user experience. Do you consent to the use of cookies?");
    if (consent) {
        // Set cookie or perform other actions when the user consents
        alert("Thank you for your consent. Cookies are now enabled.");
    } else {
        // Handle the case when the user does not consent
        alert("Cookies are disabled. Some features of the website may not work as expected.");
    }
}

// Call the function when the page loads to ask for consent
// window.onload = askForCookieConsent;

window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var colorChangingDiv = document.getElementById('head_for_navigational_bar');
    if (scrollPosition > 653) { // Change the value to the number of pixels you prefer
        colorChangingDiv.style.backgroundColor = '#3e3d3d'; // Change to the desired color
    } 
    else {
        colorChangingDiv.style.backgroundColor = 'rgb(57, 55, 55)'; // Change back to the initial color
    }
});