// Function to toggle the visibility of the dropdown menu on the Academic page
function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown'); // Adjust to match your dropdown element
    if (dropdownMenu.style.transform === 'translateY(0px)') {
        cancel(); // Close the dropdown
    } else {
        hamburg(); // Open the dropdown
    }
}

// Dropdown menu functions
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Optional: Close the dropdown when a link is clicked
const dropdownLinks = document.querySelectorAll('.dropdown .links a');

dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
        const dropdownMenu = document.getElementById('dropdownMenu');
        dropdownMenu.style.transform = 'translateY(-500px)'; // Close the dropdown
    });
});

// Typewriter effect
const texts = [
    "S.I.T.E.S PRESIDENT",
    "COMSCI STUDENT"
];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Start typewriter effect on window load
window.onload = typeWriter;

