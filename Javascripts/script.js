

// Fade-in UI
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
  document.body.style.visibility = 'visible';

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.about, .services, .contact, .map').forEach(el => observer.observe(el));
});

// Nav link highlight
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".nav-links a").forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage || 
       (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Contact Form Validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const namePattern = /^[A-Za-z\s]+$/;
  const phonePattern = /^\+?[0-9]{9,10}$/; // allows + only at start, then 9–10 digits
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
    alert("Please type your full name.");
    return false;
  }
  if (!namePattern.test(name)) {
    alert("Name can only contain letters and spaces.");
    return false;
  }

  if (!phone) {
    alert("Please type your phone number.");
    return false;
  }
  if (!phonePattern.test(phone)) {
    alert("Phone number must be numeric (9–10 digits) and may include '+' only at the start.");
    return false;
  }

  if (!email) {
    alert("Please type your email address.");
    return false;
  }
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address (example@example.com).");
    return false;
  }

  if (!message) {
    alert("Please type your message.");
    return false;
  }

  alert("Thank you! Your message has been submitted successfully.");
  return true;
}
