<script>
const header = document.getElementById("main-header");
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const dropdowns = document.querySelectorAll('.menu ul li.dropdown  a');

let lastScroll = 0;

// Header shrink on scroll
if (header) {
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
    lastScroll = currentScroll;
  })
}

// Hamburger toggle
if (hamburger && menu) {
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
  })
}

// Mobile dropdown toggle
if (dropdowns.length  0) {
  dropdowns.forEach(drop => {
    drop.addEventListener('click', (e) => {
      if(window.innerWidth <= 768){
        e.preventDefault();
        drop.parentElement.classList.toggle('active');
      }
    });
  })
}
</script>
