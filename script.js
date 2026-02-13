// Reveal on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));

// NO button runs away 😆
const noBtn = document.querySelector(".no");

function moveNoButton() {
    const maxX = window.innerWidth < 500 ? 120 : 150;
    const maxY = window.innerWidth < 500 ? 80 : 100;

    const x = Math.random() * maxX * 2 - maxX;
    const y = Math.random() * maxY * 2 - maxY;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* Desktop hover */
noBtn.addEventListener("mouseenter", moveNoButton);

/* Mobile tap */
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
});

// YES popup 💘
const popup = document.getElementById("popup");
const yesBtn = document.querySelector(".yes");

yesBtn.addEventListener("click", () => {
    popup.classList.add("show");
});

// Close popup
function closePopup() {
    popup.classList.remove("show");
}


const unlockBtn = document.getElementById("unlockBtn");
const input = document.getElementById("anniversaryInput");
const message = document.getElementById("secretMessage");
const error = document.getElementById("errorMsg");

const correctDate = "2023-12-14"; 

unlockBtn.addEventListener("click", () => {
    if (input.value === correctDate) {
        message.classList.add("revealed");
        error.textContent = "💖 You remembered… just like I knew you would.";
        unlockBtn.disabled = true;
        input.disabled = true;
    } else {
        error.textContent = "Hmm… not quite 🥺 try again, love.";
    }
});