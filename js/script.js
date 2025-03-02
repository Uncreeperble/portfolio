document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Animate hero text on load
    const heroText = document.querySelector(".hero-box h1");
    heroText.style.opacity = 0;
    setTimeout(() => {
        heroText.style.transition = "opacity 1.5s ease-in-out";
        heroText.style.opacity = 1;
    }, 500);

    // Toggle dark mode
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.classList.add("dark-mode-toggle");
    document.body.appendChild(toggleButton);
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
