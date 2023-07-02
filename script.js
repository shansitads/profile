'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


// portfolio modal

// portfolio variables
const portfolioItems = document.querySelectorAll("[data-portfolio-item]");
const portfolioModalContainer = document.querySelector("[data-portfolio-modal-container]");
const portfolioModalCloseBtn = document.querySelector("[data-portfolio-modal-close-btn]");
const portfolioOverlay = document.querySelector("[data-portfolio-overlay]");

// modal variable
const portfolioModalImg = document.querySelector("[data-portfolio-modal-img]");
const portfolioModalTitle = document.querySelector("[data-portfolio-modal-title]");
const portfolioModalText = document.querySelector("[data-portfolio-modal-text]");
const portfolioModalDate =  document.querySelector("[data-portfolio-modal-date]");

// modal toggle function
const portfolioModalFunc = function () {
  portfolioModalContainer.classList.toggle("active");
  portfolioOverlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < portfolioItems.length; i++) {

  portfolioItems[i].addEventListener("click", function () {

    portfolioModalImg.src = this.querySelector("[data-portfolio-img]").src;
    portfolioModalImg.alt = this.querySelector("[data-portfolio-img]").alt;
    portfolioModalTitle.innerHTML = this.querySelector("[data-portfolio-title]").innerHTML;
    portfolioModalText.innerHTML = this.querySelector("[data-portfolio-text]").innerHTML;
    portfolioModalDate.innerHTML = this.querySelector("[data-portfolio-date]").innerHTML;

    portfolioModalFunc();

  });

}

// add click event to modal close button
portfolioModalCloseBtn.addEventListener("click", portfolioModalFunc);
portfolioOverlay.addEventListener("click", portfolioModalFunc);

