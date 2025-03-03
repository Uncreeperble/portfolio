// Smooth Scrolling (Navigation Links)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        handleSmoothScroll(this.getAttribute('href'));
    });
});

// Smooth Scrolling (View Projects Button)
const viewProjectsButton = document.querySelector('#left-hero button');
if (viewProjectsButton) {
    viewProjectsButton.addEventListener('click', function (e) {
        e.preventDefault();
        handleSmoothScroll('#projects'); // Scroll to the projects section
    });
}

// Active Navigation Link Highlight
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 4) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
});

// Animated Waving Hand
const wavingHand = document.querySelector('h1');
if (wavingHand) {
    wavingHand.style.animation = 'wave 2s linear infinite';
}

function handleSmoothScroll(targetHref) {
    const target = document.querySelector(targetHref);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Grid Hover Effect
const titleSection = document.querySelector('#title');
if (titleSection) {
    titleSection.addEventListener('mousemove', (e) => {
        const x = e.offsetX;
        const y = e.offsetY;
        const sectionWidth = titleSection.offsetWidth;
        const sectionHeight = titleSection.offsetHeight;

        const limitedX = (x / sectionWidth) * 200;
        const limitedY = (y / sectionHeight) * 200;

        titleSection.style.setProperty('--mouse-x', `${limitedX}%`);
        titleSection.style.setProperty('--mouse-y', `${limitedY}%`);
    });

    titleSection.addEventListener('mouseout', () => {
        titleSection.style.setProperty('--mouse-x', `50%`);
        titleSection.style.setProperty('--mouse-y', `50%`);
    });
}

// GitHub Integration
const githubUsername = 'Uncreeperble'; // Replace with your GitHub username
const githubProfilePic = document.getElementById('github-profile-pic');
const githubUsernameElement = document.getElementById('github-username');
const githubBioElement = document.getElementById('github-bio');

fetch(`https://api.github.com/users/${githubUsername}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        githubProfilePic.src = data.avatar_url;
        githubUsernameElement.textContent = data.login;
        githubBioElement.textContent = data.bio;
    })
    .catch(error => {
        console.error('Error fetching GitHub data:', error);
        // Handle the error gracefully (e.g., display a default image or message)
        githubProfilePic.src = 'assets/default-github.png';
        githubUsernameElement.textContent = githubUsername;
        githubBioElement.textContent = "Failed to load";
    });
