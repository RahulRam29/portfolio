document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelector(".navbar");

    navLinks.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const target = event.target.getAttribute("href");
            const targetSection = document.querySelector(target);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        }
    });
});
