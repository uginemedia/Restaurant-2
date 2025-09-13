document.addEventListener("DOMContentLoaded", function () {
  // --- Mobile Menu Toggle ---
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", () => {
    const isOpened = mobileMenu.classList.toggle("open");
    if (isOpened) {
      mobileMenuButton.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
    } else {
      mobileMenuButton.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
    }
  });

  // Close mobile menu when a link is clicked
  mobileMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      mobileMenu.classList.remove("open");
      mobileMenuButton.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
    }
  });

  // --- Header Scroll Effect ---
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

AOS.init();
