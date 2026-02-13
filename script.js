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

noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
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