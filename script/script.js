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



    