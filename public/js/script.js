const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-list");
  const navList = document.querySelectorAll(".nav-list li");

  burger.addEventListener("click", () => {
    // Toggle nav
    nav.classList.toggle("nav-active");

    //Animate Nav

    navList.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navListFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    burger.classList.toggle('toggle');
  });
}

navSlide();
