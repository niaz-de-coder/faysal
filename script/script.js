// JavaScript for changing the text content with smooth transition

// Select the elements
const firstElement = document.getElementById("1st");
const secondElement = document.getElementById("2nd");

// Define the text to cycle through
const textOptions = [
    { first: "Digital", second: "Marketing" },
    { first: "Graphics", second: "Designing" },
    { first: "Business", second: "Consultant" }
];

let currentIndex = 0;

// Function to update the text with a smooth transition
function updateText() {
    // Apply a class for the transition effect
    firstElement.style.transition = "transform 0.5s, opacity 0.5s";
    secondElement.style.transition = "transform 0.5s, opacity 0.5s";

    // Move text upwards and fade out
    firstElement.style.transform = "translateY(-100%)";
    firstElement.style.opacity = "0";
    secondElement.style.transform = "translateY(-100%)";
    secondElement.style.opacity = "0";

    setTimeout(() => {
        // Update the text content
        currentIndex = (currentIndex + 1) % textOptions.length;
        firstElement.textContent = textOptions[currentIndex].first;
        secondElement.textContent = textOptions[currentIndex].second;

        // Reset the position for the transition to move back down
        firstElement.style.transform = "translateY(100%)";
        secondElement.style.transform = "translateY(100%)";

        setTimeout(() => {
            // Bring text back to the normal position and fade in
            firstElement.style.transform = "translateY(0)";
            firstElement.style.opacity = "1";
            secondElement.style.transform = "translateY(0)";
            secondElement.style.opacity = "1";
        }, 50);
    }, 500); // Wait for the upward transition to complete
}

// Start the interval to change text every 3 seconds
setInterval(updateText, 3000);





const hero2 = document.querySelector('.a1-hero-2');
    const hero1 = document.querySelector('.a1-hero-1');

    hero2.addEventListener('mouseover', () => {
        hero1.style.opacity = '0';
    });

    hero2.addEventListener('mouseout', () => {
        hero1.style.opacity = '1';
    });





    document.addEventListener("DOMContentLoaded", function () {
        const ids = ["st-1", "pf-1", "pf-2", "cov-1", "pf-3", "pf-4", "st-2"];
    
        ids.forEach(id => {
            const img = document.getElementById(id);
            if (img) {
                img.addEventListener("mouseenter", function () {
                    ids.forEach(otherId => {
                        const otherImg = document.getElementById(otherId);
                        if (otherImg && otherId !== id) {
                            otherImg.style.opacity = "0";
                        }
                    });
                    img.style.opacity = "1";
                });
    
                img.addEventListener("mouseleave", function () {
                    ids.forEach(otherId => {
                        const otherImg = document.getElementById(otherId);
                        if (otherImg) {
                            otherImg.style.opacity = "1";
                        }
                    });
                });
            }
        });
    });



    document.addEventListener("DOMContentLoaded", function () {
        document.querySelector(".submit-btn").addEventListener("click", function () {
            let name = document.getElementById("con-name").value.trim();
            let email = document.getElementById("con-email").value.trim();
            let message = document.getElementById("con-message").value.trim();
            let responseMsg = document.getElementById("con-rep-msg");
    
            if (name.length < 3) {
                alert("Invalid Name: Name must be at least 3 characters long.");
                return;
            }
    
            if (!validateEmail(email)) {
                alert("Invalid Email: Please enter a valid email address.");
                return;
            }
    
            if (message.length < 10) {
                alert("Invalid Message: Message must be at least 10 characters long.");
                return;
            }
    
            // If all inputs are valid, show the response message
            responseMsg.style.opacity = "1";
            let parms = {
                con_name : document.getElementById("con-name").value,
                con_email : document.getElementById("con-email").value,
                con_message : document.getElementById("con-message").value,
            }
            emailjs.send("service_x0005lk", "template_ldiq4vi", parms)
        });
    });
    
    function validateEmail(email) {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }













    // responsive.js

/**
 * Generates and injects media query styles for various breakpoints.
 */
function generateResponsiveMediaQueries() {
    // Define an array for the larger breakpoints.
    const largeBreakpoints = [7000, 6000, 5000, 4000, 3000, 2000];
    
    // Define an array for the smaller breakpoints with their specific multipliers.
    const smallBreakpoints = [
      { maxWidth: 1000, multiplier: 500 },
      { maxWidth: 500,  multiplier: 250 },
      { maxWidth: 250,  multiplier: 150 }
    ];
    
    // Create a <style> element to hold our dynamic CSS rules.
    const style = document.createElement('style');
    
    // Function to generate CSS rules given a maxWidth and multiplier.
    function generateCSS(maxWidth, multiplier) {
      return `
  @media (max-width: ${maxWidth}px) {
    .footer-sec {
      height: calc(0.4032258065px * ${multiplier});
    }
    .foot11 img {
      width: calc(0.1209677419px * ${multiplier});
    }
    .foot11 h1 {
      font-size: calc(0.03870967742px * ${multiplier});
      margin: calc(0.004032258065px * ${multiplier});
    }
    .foot13 h3 {
      font-size: calc(0.02580645161px * ${multiplier});
    }
    .foot13 h6 {
      font-size: calc(0.01935483871px * ${multiplier});
      margin: calc(0.004032258065px * ${multiplier});
    }
    .foot13 p {
      font-size: calc(0.01451612903px * ${multiplier});
    }
    .foot2 p {
      font-size: calc(0.01451612903px * ${multiplier});
    }
  }
  `;
    }
    
    // Loop through the larger breakpoints.
    largeBreakpoints.forEach(maxWidth => {
      // For larger breakpoints, the multiplier is the maxWidth minus 1000.
      const multiplier = maxWidth - 1000;
      style.innerHTML += generateCSS(maxWidth, multiplier);
    });
    
    // Loop through the smaller breakpoints.
    smallBreakpoints.forEach(({ maxWidth, multiplier }) => {
      style.innerHTML += generateCSS(maxWidth, multiplier);
    });
    
    // Append the style element to the document head.
    document.head.appendChild(style);
  }
  
  // Call the function to generate and apply the media queries.
  generateResponsiveMediaQueries();
  

  // responsive-nav.js

/**
 * Generates and injects media query styles for the navigation-related CSS.
 */
function generateResponsiveNavMediaQueries() {
    // Define large breakpoints. For these, the multiplier = maxWidth - 1000.
    // Now including 2000 as well.
    const largeBreakpoints = [8000, 7000, 6000, 5000, 4000, 3000, 2000];
  
    // Define small breakpoints with explicit multipliers.
    const smallBreakpoints = [
      { maxWidth: 1000, multiplier: 500 },
      { maxWidth: 500,  multiplier: 250 },
      { maxWidth: 250,  multiplier: 150 }
    ];
  
    // Create a <style> element to hold our dynamic CSS rules.
    const style = document.createElement('style');
  
    // Helper function to generate the CSS rules.
    function generateCSS(maxWidth, multiplier) {
      return `
  @media (max-width: ${maxWidth}px) {
    .nav-section {
      height: calc(0.08064516129px * ${multiplier});
    }
    .navbar {
      gap: calc(0.03064516129px * ${multiplier});
    }
    .nav-link {
      font-size: calc(0.01290322581px * ${multiplier});
    }
    .nav-link-em {
      font-size: calc(0.01290322581px * ${multiplier});
    }
    .sep-bar {
      width: calc(0.00080645161px * ${multiplier});
      height: calc(0.0564516129px * ${multiplier});
    }
  }
  `;
    }
  
    // Loop through each large breakpoint.
    largeBreakpoints.forEach(maxWidth => {
      // For large breakpoints, the multiplier is maxWidth - 1000.
      const multiplier = maxWidth - 1000;
      style.innerHTML += generateCSS(maxWidth, multiplier);
    });
  
    // Loop through each small breakpoint.
    smallBreakpoints.forEach(({ maxWidth, multiplier }) => {
      style.innerHTML += generateCSS(maxWidth, multiplier);
    });
  
    // Append the style element to the document head.
    document.head.appendChild(style);
  }
  
  // Call the function to generate and apply the media queries.
  generateResponsiveNavMediaQueries();
  







  



















    document.addEventListener("DOMContentLoaded", function () {
        let sizes = [7000, 6000, 5000, 4000, 3000, 2000, 1000, 500, 250];
        let style = document.createElement("style");
        document.head.appendChild(style);
    
        sizes.forEach(size => {
            let multiplier = size >= 2000 ? size - 1000 : size === 1000 ? 500 : size === 500 ? 250 : 150;
            let css = `
                @media (max-width: ${size}px) {
                    .contact-section {
                        margin-top: calc(0.03731343284px * ${multiplier});
                        margin-bottom: calc(0.03731343284px * ${multiplier});
                        width: calc(0.8955223881px * ${multiplier});
                        height: calc(0.5074626866px * ${multiplier});
                        border-radius: calc(0.01865671642px * ${multiplier});
                    }
                    .contact-section::before {
                        border-radius: calc(0.01865671642px * ${multiplier});
                    }
                    .con-form{
                        gap: calc(0.007462686567px * ${multiplier});
                    }
                    .con-form-sec form input, .con-form-sec form textarea{
                        border-radius: calc(0.003731343284px * ${multiplier});
                    }
                    .con-form-sec form input::placeholder, .con-form-sec form textarea::placeholder{
                        font-size: calc(0.01343283582px * ${multiplier});
                    }
                    .con-form-sec form input:focus, .con-form-sec form textarea:focus{
                        outline: calc(0.00074626865px * ${multiplier});
                    }
                    .con-name, .con-email{
                        width: calc(0.3731343284px * ${multiplier});
                        height: calc(0.03731343284px * ${multiplier});
                        font-size: calc(0.01343283582px * ${multiplier});
                    }
                    .con-message{
                        width: calc(0.3731343284px * ${multiplier});
                        height: calc(0.1492537313px * ${multiplier});
                        padding-top: calc(0.007462686567px * ${multiplier});
                        padding-left: calc(0.003731343284px * ${multiplier});
                        font-size: calc(0.01343283582px * ${multiplier});
                    }
                    .submit-btn{
                        width: calc(0.1492537313px * ${multiplier});
                        height: calc(0.0223880597px * ${multiplier});
                        font-size: calc(0.01343283582px * ${multiplier});
                    }
                    .con-rep-msg{
                        font-size: calc(0.01343283582px * ${multiplier});
                    }
                    .con-title-2{
                        width: calc(0.1492537313px * ${multiplier});
                    }
                    .con-first h1, .con-second h1{
                        font-size: calc(0.05223880597px * ${multiplier});
                    }
                    .con-second span{
                        width: calc(0.003731343284px * ${multiplier});
                        height: calc(0.07462686567px * ${multiplier});
                    }
                    .con-second, .con-first{
                        width: calc(0.05223880597px * ${multiplier});
                    }
                }
            `;
            style.appendChild(document.createTextNode(css));
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const cvButton = document.getElementById("cv_pdf");
        
        if (cvButton) {
            cvButton.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent any default behavior
                window.open("assets/cv.pdf", "_blank");
            });
        } else {
            console.error("Element with ID 'cv_pdf' not found.");
        }
    });



document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("niazdecoder");
    if (button) {
        button.addEventListener("click", function () {
            window.location.href = "https://niazdecoder.netlify.app/";
        });
    } else {
        console.error("Element with ID 'niazdecoder' not found.");
    }
});





    