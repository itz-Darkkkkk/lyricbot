// script.js

// 🌟 Smooth fade-in effect on page load
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1.2s ease-in-out";
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);

  // Add fade-in animation to specific element if exists
  document.querySelector('.fade-in')?.classList.add('active');

  // Start typing animation
  typeEffect();

  // Update footer year
  document.getElementById("currentYear").textContent = new Date().getFullYear();
});

// 🌟 Footer logo animation on hover
const footerLogo = document.querySelector('.footer-logo');
if (footerLogo) {
  footerLogo.addEventListener("mouseover", () => {
    footerLogo.style.transition = "transform 0.3s ease";
    footerLogo.style.transform = "scale(1.1) rotate(5deg)";
  });
  footerLogo.addEventListener("mouseout", () => {
    footerLogo.style.transform = "scale(1) rotate(0deg)";
  });
}

// 🌟 Typing effect text rotation
const textList = [
  "Perfect Antinuke Bot",
  "Best Server Utility Bot",
  "Advanced Automod System",
  "Giveaway & Event Manager",
  "Reliable Moderation Tools"
];

let index = 0;
let charIndex = 0;
const typingText = document.getElementById('typingText');

function typeEffect() {
  if (!typingText) return;

  if (charIndex < textList[index].length) {
    typingText.textContent += textList[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(() => {
      typingText.textContent = "";
      charIndex = 0;
      index = (index + 1) % textList.length;
      typeEffect();
    }, 2000);
  }
}
(() => {
  const devPassword = "AryanSexy"; // 🔐 Your password
  let devAccessGranted = false;

  // 🔒 Block right-click
  document.addEventListener("contextmenu", (e) => e.preventDefault());

  // 🔒 Block suspicious key shortcuts
  document.addEventListener("keydown", (e) => {
    if (
      !devAccessGranted &&
      (e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U"))
    ) {
      e.preventDefault();
      showPasswordModal();
      return false;
    }
  });

  // 🕵️ DevTools timing detection
  setInterval(() => {
    if (devAccessGranted) return;

    const before = new Date().getTime();
    debugger;
    const after = new Date().getTime();

    if (after - before > 100) {
      showPasswordModal();
    }
  }, 1000);

  // ✨ Show password modal
  function showPasswordModal() {
    if (document.getElementById("devModal")) return;

    const modal = document.createElement("div");
    modal.id = "devModal";
    modal.innerHTML = `
      <div class="modal-overlay">
        <div class="modal-box">
          <h2>Restricted Access</h2>
          <p>Please enter the password to access developer tools:</p>
          <input type="password" id="devPassInput" placeholder="Enter password">
          <div class="modal-actions">
            <button id="submitDevPass">Submit</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById("submitDevPass").addEventListener("click", () => {
      const input = document.getElementById("devPassInput").value;
      if (input === devPassword) {
        devAccessGranted = true;
        alert("Access granted.");
        modal.remove();
      } else {
        alert("Incorrect password. Reloading...");
        location.reload();
      }
    });
  }
})();
