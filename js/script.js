/* =========================================
   SAFISTAY — MAIN JAVASCRIPT
========================================= */


/* ---------- Mobile Navigation ---------- */

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

if (menuToggle && primaryNav) {

    menuToggle.addEventListener("click", () => {

        primaryNav.classList.toggle("open");

        const isOpen = primaryNav.classList.contains("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close menu"
                : "Open menu"
        );
    });


    /* Close menu when a link is clicked */

    primaryNav.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            primaryNav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );
        });

    });
}


/* ---------- Close Menu With Escape ---------- */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        primaryNav &&
        primaryNav.classList.contains("open")
    ) {

        primaryNav.classList.remove("open");

        if (menuToggle) {

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );
        }
    }

});


/* ---------- Scroll Reveal ---------- */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

} else {

    /* Fallback for older browsers */

    revealElements.forEach((element) => {

        element.classList.add("visible");

    });

}


/* ---------- Current Year ---------- */

const yearElement =
    document.querySelector("#year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}