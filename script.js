document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("menu-active");
    });
});


function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}


function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  });

document.getElementById("myButton").onclick = function () {
    window.location.href = "www.github.com";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}