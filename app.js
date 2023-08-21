const overlay = document.querySelector(".overLay");
const dropDown = document.querySelector(".dropDown");
const bottomMenu = document.querySelector(".bottomMenu");
const links = document.querySelectorAll(".link");
const search = document.querySelector(".search");
const searchBar = document.querySelector(".searchBar");
const close = document.querySelector(".close");

let over = false;

!over &&
  links.forEach((link, i) => {
    link.addEventListener("click", (e) => {
      if (link.className.includes("colorLink")) {
        link.classList.remove("colorLink");
      }

      links.forEach((l) => {
        if (l !== link) {
          l.classList.add("colorLink");
        }
      });

      overlay.classList.add("activeOverlay");
      dropDown.classList.add("activeDropdown");

      over = true;
    });
  });

overlay.addEventListener("click", () => {
  overlay.classList.remove("activeOverlay");
  dropDown.classList.remove("activeDropdown");

  links.forEach((link) => {
    link.classList.remove("colorLink");
  });

  over = false;
});

search.addEventListener("click", () => {
  searchBar.style.display = "block";
});

close.addEventListener("click", () => {
  searchBar.style.display = "none";
});
