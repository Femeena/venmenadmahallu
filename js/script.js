document.addEventListener("DOMContentLoaded", () => {
    const navbarMenu = document.querySelector(".navbar .links");
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const showPopupBtn = document.querySelector(".login-btn");
    const formPopup = document.querySelector(".form-popup");

    if (navbarMenu && hamburgerBtn) {
        const hideMenuBtn = navbarMenu.querySelector(".close-btn");

        // Show mobile menu
        hamburgerBtn.addEventListener("click", () => {
            navbarMenu.classList.toggle("show-menu");
        });

        // Hide mobile menu
        hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());
    }

    if (showPopupBtn && formPopup) {
        const hidePopupBtn = formPopup.querySelector(".close-btn");
        const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

        // Show login popup
        showPopupBtn.addEventListener("click", () => {
            document.body.classList.toggle("show-popup");
        });

        // Hide login popup
        if (hidePopupBtn) {
            hidePopupBtn.addEventListener("click", () => showPopupBtn.click());
        }

        // Show or hide signup form
        if (signupLoginLink) {
            signupLoginLink.forEach(link => {
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
                });
            });
        }
    }
});
