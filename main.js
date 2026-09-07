/* Roland Contracting LLC — navigation behaviour */
(function () {
  "use strict";

  var navbar = document.getElementById("navbar");
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");

  /* Mobile menu */
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      links.classList.toggle("is-open", !open);
    });

    /* Close after tapping a link */
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        links.classList.remove("is-open");
      }
    });

    /* Close on Escape */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("is-open")) {
        toggle.setAttribute("aria-expanded", "false");
        links.classList.remove("is-open");
        toggle.focus();
      }
    });
  }

  /* Solid navbar once the page scrolls past the top.
     Pages with .is-static keep a solid bar at all times. */
  if (navbar && !navbar.classList.contains("is-static")) {
    var setState = function () {
      navbar.classList.toggle("is-solid", window.scrollY > 40);
    };
    setState();
    window.addEventListener("scroll", setState, { passive: true });
  }
})();
