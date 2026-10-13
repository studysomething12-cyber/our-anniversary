
/* =================================
   1. PERSONALIZE YOUR WEBSITE
================================= */

// Change these details before sharing the website.
const girlfriendName = "My Love";
const yourName = "Your Name";

// IMPORTANT: Set your actual relationship start date.
// Format: YYYY-MM-DD
// Example: "2024-02-14"
const relationshipStartDate = "2024-02-14";


/* =================================
   2. UPDATE NAMES
================================= */

document.getElementById("girlfriendName").textContent =
    girlfriendName;

document.getElementById("yourName").textContent =
    yourName;

document.title = `Happy Anniversary, ${girlfriendName}! ❤️`;


/* =================================
   3. RELATIONSHIP COUNTER
================================= */

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const startDate = new Date(
    `${relationshipStartDate}T00:00:00`
);

function updateCounter() {
    const now = new Date();

    if (
        Number.isNaN(startDate.getTime()) ||
        startDate > now
    ) {
        daysElement.textContent = "0";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
        return;
    }

    const difference = now.getTime() - startDate.getTime();

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysElement.textContent = days;
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}

// Update immediately and refresh every second.
updateCounter();
setInterval(updateCounter, 1000);


/* =================================
   4. FLOATING HEART ANIMATION
================================= */

const floatingHearts = document.querySelector(".floating-hearts");

const heartSymbols = ["❤️", "💕", "💖", "💗", "💘", "💝"];

for (let i = 0; i < 16; i++) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent =
        heartSymbols[i % heartSymbols.length];

    heart.style.setProperty(
        "--left",
        `${Math.random() * 96}%`
    );

    heart.style.setProperty(
        "--size",
        `${14 + Math.random() * 20}px`
    );

    heart.style.setProperty(
        "--duration",
        `${9 + Math.random() * 10}s`
    );

    heart.style.setProperty(
        "--delay",
        `${-Math.random() * 18}s`
    );

    floatingHearts.appendChild(heart);
}


/* =================================
   5. MOBILE NAVIGATION MENU
================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after choosing a section.
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
    });
});


/* =================================
   6. OPEN AND CLOSE LOVE LETTER
================================= */

const letterButton = document.getElementById("letterButton");
const loveLetter = document.getElementById("loveLetter");

letterButton.addEventListener("click", () => {
    const isOpening = loveLetter.hidden;

    loveLetter.hidden = !isOpening;

    letterButton.textContent = isOpening
        ? "Close My Letter 💌"
        : "Open My Heart ❤️";

    letterButton.setAttribute(
        "aria-expanded",
        String(isOpening)
    );

    if (isOpening) {
        setTimeout(() => {
            loveLetter.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }, 100);
    }
});


/* =================================
   7. SURPRISE BUTTON
================================= */

const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");
const surpriseHearts = document.getElementById("surpriseHearts");

surpriseButton.addEventListener("click", () => {
    surpriseMessage.hidden = false;

    surpriseButton.textContent = "A Thousand Hugs for You! 💋";
    surpriseButton.disabled = true;

    // Create a little burst of hearts.
    for (let i = 0; i < 22; i++) {
        const heart = document.createElement("span");

        heart.className = "burst-heart";
        heart.textContent =
            heartSymbols[i % heartSymbols.length];

        heart.style.setProperty(
            "--left",
            `${5 + Math.random() * 90}%`
        );

        heart.style.setProperty(
            "--top",
            `${10 + Math.random() * 75}%`
        );

        heart.style.setProperty(
            "--size",
            `${15 + Math.random() * 20}px`
        );

        heart.style.setProperty(
            "--move-x",
            `${(Math.random() - 0.5) * 180}px`
        );

        heart.style.setProperty(
            "--move-y",
            `${-50 - Math.random() * 140}px`
        );

        surpriseHearts.appendChild(heart);

        // Remove each heart after its animation finishes.
        heart.addEventListener("animationend", () => {
            heart.remove();
        }, { once: true });
    }
});
