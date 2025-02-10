 // Smooth  to "About Us"  when button i clicked
function scrollToSection() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

// Form validation iyo submission
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();  

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      
        alert("Foomka waa la soo gudbiyey!");
        form.reset();  
    } else {
      
        alert("Fadlan dhammeystir dhammaan qaybaha.");
    }
});

//  effect for  Contact section
window.onload = function() {
    const contactSection = document.getElementById('contact');
    contactSection.style.opacity = 0;
    contactSection.style.transition = "opacity 1s ease-in";
    
    setTimeout(() => {
        contactSection.style.opacity = 1;   
    }, 100);  
};

// Animation fo button  "active state"
const submitButton = document.querySelector("#contact form button");

submitButton.addEventListener("mousedown", () => {
    submitButton.style.transform = "scale(0.98)";   
});

submitButton.addEventListener("mouseup", () => {
    submitButton.style.transform = "scale(1)";  
});

// Animation f input iyo focus
const inputs = document.querySelectorAll('#contact form input, #contact form textarea');

inputs.forEach(input => {
    input.addEventListener("focus", function() {
        this.style.borderColor = "#ff6347";  
    });
    input.addEventListener("blur", function() {
        this.style.borderColor = "#ddd";   
    });
});
